import Image from 'next/image';
import { CalendarDays, ChartNoAxesCombined } from 'lucide-react';
export default function Preview({tone,large=false}:{tone:string;large?:boolean}){
 const capture = tone==='os' ? {src:'/images/andradetech-dashboard.png',alt:'Dashboard do AndradeTech OS em seu estado inicial, com indicadores zerados e sem ordens recentes.',name:'AndradeTech OS'} : tone==='menu' ? {src:'/images/brasa-preview.jpg',alt:'Captura da demonstração Brasa Burger com hambúrguer, busca e categorias.',name:'Brasa Burger'} : tone==='shop' ? {src:'/images/amarilis-preview.jpg',alt:'Captura da vitrine Amarílis Jóias com fotografia de referência e chamada para explorar as joias.',name:'Amarílis Jóias'} : tone==='schedule' ? {src:'/images/forma-preview.jpg',alt:'Captura real do projeto Forma, salão e barbearia, com catálogo de serviços e solicitação de agendamento.',name:'Forma'} : null;
 if(capture)return <figure className={`preview capture capture-${tone} ${large?'preview-large':''}`}><Image unoptimized src={capture.src} alt={capture.alt} width={1280} height={900} sizes="(max-width:700px) 90vw,60vw"/><figcaption>{capture.name} · captura da interface</figcaption></figure>;
 const Icon=tone==='schedule'?CalendarDays:ChartNoAxesCombined;
 return <div className={`preview planned-preview ${large?'preview-large':''}`}><Icon size={40} strokeWidth={1}/><span>{tone==='schedule'?'Mais tempo para o que importa.':'Decisões com mais clareza.'}</span><small>Conceito em planejamento</small></div>;
}
