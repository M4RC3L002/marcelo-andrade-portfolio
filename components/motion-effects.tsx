'use client';
import { useEffect } from 'react';

export default function MotionEffects({filter}:{filter:string}) {
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const running=new Set<Animation>();
  const observer=new IntersectionObserver(entries=>{
   entries.filter(entry=>entry.isIntersecting).forEach((entry,index)=>{
    observer.unobserve(entry.target);
    if(reduced.matches||document.documentElement.dataset.motionPaused==='true')return;
    const animation=entry.target.animate([
     {opacity:.3,transform:'translateY(28px)'},
     {opacity:1,transform:'translateY(0px)'},
    ],{duration:650,delay:Math.min(index*60,180),easing:'cubic-bezier(0.23, 1, 0.32, 1)',fill:'backwards'});
    running.add(animation);
    animation.onfinish=()=>running.delete(animation);
   });
  },{threshold:.12,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.manifesto h2, .manifesto-bottom, .section-lead, .service-row, .project, .about-grid > div, .contact h2, .contact > p, .contact-cta').forEach(element=>observer.observe(element));
  const onPreference=()=>{if(reduced.matches){running.forEach(animation=>animation.cancel());running.clear();}};
  reduced.addEventListener('change',onPreference);
  return()=>{observer.disconnect();running.forEach(animation=>animation.cancel());reduced.removeEventListener('change',onPreference);};
 },[filter]);
 return <div className="reading-progress" aria-hidden="true"/>;
}
