import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { ProjectVisual, ProjectContent } from '@/components/ProjectVisual';
import { selectedProjects } from '@/data/projects';
import { useReveal } from '@/hooks/useReveal';

interface SelectedWorkProps {
  onCaseStudy: (slug: string) => void;
}

export function SelectedWork({ onCaseStudy }: SelectedWorkProps) {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <AmbientGlow variant="top-left" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          title="Selected Work"
          subtitle="Products and systems I've built across AI, SaaS, web and e-commerce."
        />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {selectedProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              onCaseStudy={() => onCaseStudy(project.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectRowProps {
  project: (typeof selectedProjects)[number];
  onCaseStudy: () => void;
}

function ProjectRow({ project, onCaseStudy }: ProjectRowProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const layoutMap: Record<string, { grid: string; visualVariant: 'large' | 'wide' | 'tall' }> = {
    'visual-left': { grid: 'lg:grid-cols-2', visualVariant: 'large' },
    'visual-right': { grid: 'lg:grid-cols-2', visualVariant: 'large' },
    'full-width': { grid: 'lg:grid-cols-1', visualVariant: 'wide' },
    'large-visual': { grid: 'lg:grid-cols-2', visualVariant: 'tall' },
  };

  const config = layoutMap[project.layout] || layoutMap['visual-left'];
  const visualRight = project.layout === 'visual-right';
  const isFullWidth = project.layout === 'full-width';

  const visual = (
    <ProjectVisual project={project} variant={config.visualVariant} />
  );

  const content = (
    <ProjectContent project={project} onCaseStudy={onCaseStudy} />
  );

  if (isFullWidth) {
    return (
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''}`}
      >
        {visual}
        <div className="mt-8 max-w-2xl">
          <ProjectContent project={project} onCaseStudy={onCaseStudy} />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} grid ${config.grid} items-center gap-8 md:gap-12`}
    >
      {visualRight ? (
        <>
          <div className="order-2 lg:order-1">{content}</div>
          <div className="order-1 lg:order-2">{visual}</div>
        </>
      ) : (
        <>
          <div>{visual}</div>
          <div>{content}</div>
        </>
      )}
    </div>
  );
}
