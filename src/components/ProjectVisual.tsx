import { ExternalLink, ArrowRight } from 'lucide-react';
import type { SelectedProject } from '@/data/projects';
import { TechClosrVisual } from '@/components/visuals/TechClosrVisual';
import { CompleteGreetVisual } from '@/components/visuals/CompleteGreetVisual';
import { JasmynVisual } from '@/components/visuals/JasmynVisual';
import { OptionsAlgoVisual } from '@/components/visuals/OptionsAlgoVisual';
import { BinzoShopVisual } from '@/components/visuals/BinzoShopVisual';

const visualMap: Record<string, React.FC> = {
  'techclosr-ai': TechClosrVisual,
  'completegreet': CompleteGreetVisual,
  'jasmyn-ai': JasmynVisual,
  'optionsalgo-ai': OptionsAlgoVisual,
  'binzoshop': BinzoShopVisual,
};

interface ProjectVisualProps {
  project: SelectedProject;
  variant: 'large' | 'wide' | 'tall';
}

export function ProjectVisual({ project, variant }: ProjectVisualProps) {
  const dimensions: Record<string, string> = {
    large: 'aspect-[16/10]',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[4/5]',
  };

  const Visual = visualMap[project.slug];

  return (
    <div
      className={`group relative ${dimensions[variant]} w-full overflow-hidden rounded-2xl border border-white/8 bg-ink-850`}
      data-cursor="hover"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900" />
      <div className="absolute inset-0 bg-grid-faint bg-grid-md opacity-30" />

      {/* Per-project visual */}
      {Visual && (
        <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.02]">
          <Visual />
        </div>
      )}

      {/* Project name overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-950/70 to-transparent p-4 md:p-5">
        <p className="font-display text-lg font-semibold tracking-tight text-ink-100 md:text-xl">
          {project.name}
        </p>
        <p className="mt-0.5 font-mono text-[10px] tracking-widest text-ink-400 md:text-xs">
          {project.category.toUpperCase()}
        </p>
      </div>

      {/* Hover overlay */}
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 flex items-center gap-2 rounded-lg glass-strong px-3 py-1.5 text-xs font-medium text-ink-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Visit Live Site
        <ExternalLink className="h-3 w-3" />
      </a>

      {/* Corner accents */}
      <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-accent-400/20 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-accent-400/20 rounded-br-2xl" />
    </div>
  );
}

interface ProjectContentProps {
  project: SelectedProject;
  onCaseStudy: () => void;
}

export function ProjectContent({ project, onCaseStudy }: ProjectContentProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm text-accent-400/60">{project.index}</span>
        <span className="h-px w-12 bg-accent-400/20" />
        <span className="font-mono text-xs tracking-widest text-ink-400">
          {project.category.toUpperCase()}
        </span>
      </div>

      <h3 className="text-fluid-h3 font-semibold tracking-tight text-ink-100">
        {project.name}
      </h3>

      <p className="mt-1 text-sm font-medium text-accent-400/80">{project.tagline}</p>

      <p className="mt-4 text-base leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={onCaseStudy}
          className="group flex items-center gap-2 text-sm font-semibold text-ink-100 transition-colors hover:text-accent-400"
          data-cursor="hover"
        >
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <span className="h-4 w-px bg-white/10" />
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-ink-400 transition-colors hover:text-ink-200"
        >
          Live Website
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
