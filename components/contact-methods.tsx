import { ArrowUpRight, Github, Mail, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

// Source-backed adaptation of Watermelon UI Contact 1: typed methods,
// explicit action, and separate title/description. No fake form submissions.
export default function ContactMethods() {
  const methods = [
    { title: 'Escreva para mim', description: site.email, action: 'Enviar e-mail', href: `mailto:${site.email}`, Icon: Mail, pending: '' },
    { title: 'Vamos conversar', description: site.phoneLabel, action: 'Abrir WhatsApp', href: site.whatsapp, Icon: MessageCircle, pending: 'WhatsApp · número ainda não informado' },
    { title: 'Por dentro do código', description: 'Explore meus repositórios e acompanhe o desenvolvimento.', action: 'Visitar GitHub', href: site.github, Icon: Github, pending: 'GitHub · perfil ainda não informado' },
  ];
  return <div className="contact-options wm-contact-methods">
    {methods.map(({ title, description, action, href, Icon, pending }) => <article className={`contact-method ${href ? '' : 'is-pending'}`} key={action}>
      <Icon size={24} strokeWidth={1.5} aria-hidden="true"/>
      <div><h3>{title}</h3><p style={{overflowWrap: 'anywhere'}}>{description}</p>
        {href ? <a href={href} target="_blank" rel="noopener noreferrer">{action}<ArrowUpRight size={17} aria-hidden="true"/></a> : <span className="contact-pending">Placeholder · {pending}</span>}
      </div>
    </article>)}
  </div>;
}
