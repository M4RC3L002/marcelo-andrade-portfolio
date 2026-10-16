'use client';
import { useEffect, useRef } from 'react';

export default function MotionEffects({filter}:{filter:string}) {
 const seen=useRef(new WeakSet<Element>());
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
  const running=new Set<Animation>();
  const allowed=()=>!reduced.matches&&document.documentElement.dataset.motionPaused!=='true';
  const observer=new IntersectionObserver(entries=>{
   entries.filter(entry=>entry.isIntersecting).forEach((entry,index)=>{
    observer.unobserve(entry.target);
    if(seen.current.has(entry.target))return;
    seen.current.add(entry.target);
    if(!allowed())return;
    const image=entry.target.matches('.project');
    const frames=image ? [{opacity:.55,clipPath:'inset(0 0 16% 0 round 16px)',transform:'translateY(22px)'},{opacity:1,clipPath:'inset(0 0 0% 0 round 16px)',transform:'translateY(0px)'}] : [{opacity:.5,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0px)'}];
    const animation=entry.target.animate(frames,{duration:image?700:500,delay:Math.min(index*60,120),easing:'cubic-bezier(0.23, 1, 0.32, 1)',fill:'backwards'});
    running.add(animation);animation.onfinish=()=>running.delete(animation);
   });
  },{threshold:.1,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.manifesto h2, .section-lead, .project, .about-copy, .contact h2').forEach(element=>observer.observe(element));
  const cleanups:Array<()=>void>=[];
  document.querySelectorAll<HTMLElement>('.project-photo').forEach(card=>{
   const surface=card.querySelector<HTMLElement>('.preview');if(!surface)return;
   let frame=0;
   const reset=()=>{cancelAnimationFrame(frame);frame=0;surface.style.transform='';};
   const move=(event:PointerEvent)=>{
    if(!fine.matches||!allowed()||event.pointerType!=='mouse')return;
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
     const r=card.getBoundingClientRect();
     const x=Math.max(-.5,Math.min(.5,(event.clientX-r.left)/r.width-.5));
     const y=Math.max(-.5,Math.min(.5,(event.clientY-r.top)/r.height-.5));
     surface.style.transform=`perspective(1000px) rotateX(${-y*5}deg) rotateY(${x*6}deg) scale(.985)`;
     frame=0;
    });
   };
   card.addEventListener('pointermove',move,{passive:true});card.addEventListener('pointerleave',reset);
   const cancel=()=>{reset();card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',reset);};
   cleanups.push(cancel);
  });
  const cancelMotion=()=>{if(!allowed()){running.forEach(animation=>animation.cancel());running.clear();document.querySelectorAll<HTMLElement>('.project-photo .preview').forEach(el=>el.style.transform='');}};
  const mutation=new MutationObserver(cancelMotion);mutation.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion-paused']});
  reduced.addEventListener('change',cancelMotion);
  return()=>{observer.disconnect();mutation.disconnect();running.forEach(animation=>animation.cancel());cleanups.forEach(fn=>fn());reduced.removeEventListener('change',cancelMotion);};
 },[filter]);
 return <div className="reading-progress" aria-hidden="true"/>;
}
