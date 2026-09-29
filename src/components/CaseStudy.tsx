import { ArrowLeft, ExternalLink, Github, Check, Wrench, Lightbulb, Target, User, Code, AlertTriangle, TrendingUp } from 'lucide-react';
import { AmbientGlow } from '@/components/AmbientGlow';
import { selectedProjects, type SelectedProject } from '@/data/projects';

interface CaseStudyProps {
  slug: string;
  onBack: () => void;
}

export function CaseStudy({ slug, onBack }: CaseStudyProps) {
  const project = selectedProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-ink-300">Project not found.</p>
          <button onClick={onBack} className="mt-4 btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;

  const sections = [
    { icon: Target, label: 'Overview', content: cs.overview },
    { icon: AlertTriangle, label: 'Problem', content: cs.problem },
    { icon: Lightbulb, label: 'Solution', content: cs.solution },
    { icon: User, label: 'My Role', content: cs.role },
    { icon: Wrench, label: 'Engineering Challenges', content: cs.engineeringChallenges },
    { icon: TrendingUp, label: 'Outcome', content: cs.outcome },
  ];

  return (
    <div className="relative pt-20">
      <AmbientGlow variant="top-left" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mt-8 flex items-center gap-2 text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </button>

        {/* Header */}
        <header className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-accent-400/60">{project.index}</span>
            <span className="h-px w-12 bg-accent-400/20" />
            <span className="font-mono text-xs tracking-widest text-ink-400">
              {project.category.toUpperCase()}
            </span>
          </div>

          <h1 className="text-fluid-h2 font-bold tracking-tight text-ink-100">
            {project.name}
          </h1>

          <p className="mt-3 text-base text-ink-300 md:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Visit Live Product
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {cs.github && (
              <a
                href={cs.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Visual placeholder */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/8 bg-ink-850">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900">
            <div className="absolute inset-0 bg-grid-faint bg-grid-md opacity-30" />
            {project.slug === 'techclosr-ai' && (
              <img
                src="/techclosr-hero.png"
                alt="TechClosr AI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {project.slug === 'completegreet' && (
              <img
                src="/completegreet.png"
                alt="CompleteGreet"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {project.slug === 'jasmyn-ai' && (
              <img
                src="/jasmyn.jpg"
                alt="Jasmyn AI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {project.slug === 'optionsalgo-ai' && (
              <img
                src="/optionsalgo.png"
                alt="OptionsAlgo AI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {project.slug === 'binzoshop' && (
              <img
                src="/binzo.png"
                alt="BinzoShop"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {project.slug !== 'techclosr-ai' && project.slug !== 'completegreet' && project.slug !== 'jasmyn-ai' && project.slug !== 'optionsalgo-ai' && project.slug !== 'binzoshop' && (
              <>
                <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)' }} />
                <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-2xl font-semibold text-ink-100">{project.name}</p>
                    <p className="mt-2 font-mono text-xs tracking-widest text-ink-500">
                      SCREENSHOTS COMING SOON
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-12 space-y-12">
          {sections.map((section, i) => (
            <CaseStudySection
              key={section.label}
              icon={section.icon}
              label={section.label}
              content={section.content}
              index={i}
            />
          ))}

          {/* Key Features */}
          <div className="rounded-2xl glass p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-accent-400" />
              <h2 className="text-lg font-semibold text-ink-100">Key Features</h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {cs.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/2 px-4 py-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <span className="text-sm text-ink-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="rounded-2xl glass p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-accent-400" />
              <h2 className="text-lg font-semibold text-ink-100">Technology</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {cs.technology.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-accent-400/15 bg-accent-400/5 px-3 py-1.5 text-sm font-medium text-accent-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back to work */}
        <div className="mt-16 border-t border-white/6 pt-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Selected Work
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudySection({
  icon: Icon,
  label,
  content,
  index,
}: {
  icon: typeof Target;
  label: string;
  content: string;
  index: number;
}) {
  return (
    <div
      className="reveal is-visible"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-accent-400/70" />
        <h2 className="text-lg font-semibold text-ink-100">{label}</h2>
      </div>
      <p className="mt-4 text-base leading-relaxed text-ink-300">{content}</p>
    </div>
  );
}
