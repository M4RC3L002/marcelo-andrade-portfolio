import { ImageResponse } from 'next/og';
export const alt='Marcelo Andrade — Desenvolvedor web';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#081823',color:'#f0f6f8',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'80px',fontFamily:'sans-serif'}}><div style={{display:'flex',fontSize:42,color:'#57dcdf'}}>ma.</div><div style={{fontSize:80,marginTop:55,display:'flex'}}>Marcelo Andrade</div><div style={{fontSize:42,color:'#57dcdf',marginTop:20,display:'flex'}}>Ideias bem pensadas. Experiências digitais.</div><div style={{fontSize:26,marginTop:50,display:'flex'}}>Desenvolvimento web · Next.js · React</div></div>,size);}
