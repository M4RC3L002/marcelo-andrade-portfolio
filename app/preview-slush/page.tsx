import type { Metadata } from 'next';
import SlushPortfolio from '@/components/slush-portfolio';
import './slush.css';
export const metadata:Metadata={title:'Estudo visual Slush',description:'Prévia alternativa do portfólio de Marcelo Andrade.',robots:{index:false,follow:false},alternates:{canonical:'/preview-slush'}};
export default function Page(){return <SlushPortfolio/>;}
