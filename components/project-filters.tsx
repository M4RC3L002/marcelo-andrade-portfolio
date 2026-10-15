'use client';
import { projects } from '@/lib/site';

// Adapted from Watermelon UI Tabs 1. Filters use pressed buttons,
// rather than tab roles, because they filter a shared project list.
export default function ProjectFilters({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="filters wm-segments" role="group" aria-label="Filtrar projetos">
    {['Todos', 'Gestão', 'Comércio', 'Produtividade'].map(category => {
      const count = projects.filter(project => category === 'Todos' || project.category === category).length;
      return <button key={category} type="button" aria-pressed={value === category} aria-controls="project-results" onClick={() => onChange(category)}>
        {category}<span aria-hidden="true">{count}</span>
      </button>;
    })}
  </div>;
}
