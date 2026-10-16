'use client';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Dynamic drawing stays in a decorative canvas, outside React's render loop.
export default function HeroBackground() {
 const canvasRef=useRef<HTMLCanvasElement>(null);
 const elapsedRef=useRef(0);
 const [paused,setPaused]=useState(false);
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{
  const canvas=canvasRef.current;
  if(!canvas)return;
  const context=canvas.getContext('2d');
  const host=canvas.parentElement;
  if(!context||!host)return;
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointerEnabled=window.matchMedia('(hover: hover) and (pointer: fine)');
  let width=1,height=1,frame=0,last=0,visible=true;
  const pointer={x:-1000,y:-1000};
  let seed=71423;
  const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
  const particles=Array.from({length:66},()=>({x:random(),y:random(),speed:0.5+random(),phase:random()*Math.PI*2,radius:0.8+random()*1.2}));
  const draw=()=>{
   context.clearRect(0,0,width,height);
   const time=elapsedRef.current/1000;
   const mobile=width<700;
   const count=mobile?30:66;
   const points=particles.slice(0,count).map(p=>{
    const x=(p.x*width+Math.sin(time*.14*p.speed+p.phase)*45+width)%width;
    const y=(p.y*height+Math.cos(time*.11+p.phase)*34+height)%height;
    return {x,y,p};
   });
   // A moving signal field behind the work gallery, rather than moving content.
   for(let line=0;line<11;line++){
    context.beginPath();
    for(let x=-20;x<=width+20;x+=12){
     const envelope=Math.sin(x/width*Math.PI);
     const y=height*.68+line*14+Math.sin(x*.005+time*.3+line*.21)*38*envelope;
     if(x===-20)context.moveTo(x,y);else context.lineTo(x,y);
    }
    context.strokeStyle=`rgba(78,208,209,${.045+line*.004})`;
    context.lineWidth=.8;
    context.stroke();
   }
   for(let i=0;i<points.length;i++){
    const a=points[i];
    for(let j=i+1;j<points.length;j++){
     const b=points[j];const distance=Math.hypot(a.x-b.x,a.y-b.y);
     const limit=mobile?95:155;
     if(distance<limit){context.beginPath();context.moveTo(a.x,a.y);context.lineTo(b.x,b.y);context.strokeStyle=`rgba(91,218,213,${(1-distance/limit)*.24})`;context.lineWidth=.7;context.stroke();}
    }
    const cursorDistance=Math.hypot(a.x-pointer.x,a.y-pointer.y);
    if(pointerEnabled.matches&&cursorDistance<190){context.beginPath();context.moveTo(a.x,a.y);context.lineTo(pointer.x,pointer.y);context.strokeStyle=`rgba(113,243,233,${(1-cursorDistance/190)*.4})`;context.stroke();}
    context.beginPath();context.arc(a.x,a.y,a.p.radius,0,Math.PI*2);context.fillStyle=cursorDistance<190?'rgba(171,255,242,.9)':'rgba(104,223,219,.62)';context.fill();
   }
  };
  const tick=(now:number)=>{
   frame=0;
   if(paused||preference.matches||!visible||document.hidden)return;
   if(now-last>=1000/30){elapsedRef.current+=last?Math.min(now-last,64):0;last=now;draw();}
   frame=requestAnimationFrame(tick);
  };
  const sync=()=>{cancelAnimationFrame(frame);frame=0;last=0;draw();if(!paused&&!preference.matches&&visible&&!document.hidden)frame=requestAnimationFrame(tick);};
  const resize=()=>{width=host.clientWidth;height=host.clientHeight;const ratio=Math.min(window.devicePixelRatio||1,width<700?1:1.5);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);context.setTransform(ratio,0,0,ratio,0,0);sync();};
  const onPointer=(event:PointerEvent)=>{if(!pointerEnabled.matches)return;const rect=host.getBoundingClientRect();pointer.x=event.clientX-rect.left;pointer.y=event.clientY-rect.top;};
  const leave=()=>{pointer.x=-1000;pointer.y=-1000;};
  const onPreference=()=>{setReduced(preference.matches);sync();};
  const observer=new ResizeObserver(resize);observer.observe(host);
  const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});intersection.observe(host);
  host.addEventListener('pointermove',onPointer,{passive:true});host.addEventListener('pointerleave',leave);
  document.addEventListener('visibilitychange',sync);preference.addEventListener('change',onPreference);
  setReduced(preference.matches);resize();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();host.removeEventListener('pointermove',onPointer);host.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',sync);preference.removeEventListener('change',onPreference);};
 },[paused]);
 return <><div className="hero-atmosphere" aria-hidden="true"/><canvas ref={canvasRef} className="hero-network" aria-hidden="true"/>{!reduced&&<button className="motion-toggle" type="button" aria-pressed={paused} aria-label={paused?'Retomar animação do fundo':'Pausar animação do fundo'} onClick={()=>setPaused(value=>!value)}>{paused?<Play size={14}/>:<Pause size={14}/>}<span>{paused?'Retomar movimento':'Pausar movimento'}</span></button>}</>;
}
