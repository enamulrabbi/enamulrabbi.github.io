import { useState } from 'react';
import { ChevronDown, Calendar, Layers, ShoppingBag } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { moreProjects, archivedProjects } from '@/data/moreProjects';

export function MoreProjects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <AmbientGlow variant="top-left" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          title="More Projects"
          subtitle="A broader collection of client projects, products and software systems I've built."
        />

        {/* More projects grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {moreProjects.map((project, i) => (
            <Reveal key={project.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <MoreProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Shopify section */}
        <Reveal delay={1}>
          <ShopifySection />
        </Reveal>

        {/* Project Archive */}
        <Reveal delay={1}>
          <ProjectArchive />
        </Reveal>
      </div>
    </section>
  );
}

function MoreProjectCard({ project }: { project: (typeof moreProjects)[number] }) {
  return (
    <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-accent-400/60">
          {project.category.toUpperCase()}
        </span>
        {project.date && (
          <span className="flex items-center gap-1 font-mono text-xs text-ink-500">
            <Calendar className="h-3 w-3" />
            {project.date}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-ink-100 transition-colors group-hover:text-accent-400">
        {project.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-300">
        {project.description}
      </p>

      {project.components && (
        <div className="mt-4 space-y-1.5">
          {project.components.map((c) => (
            <div key={c} className="flex items-center gap-2 text-xs text-ink-400">
              <span className="h-1 w-1 rounded-full bg-accent-400/50" />
              {c}
            </div>
          ))}
        </div>
      )}

      {project.platform && (
        <div className="mt-4 inline-flex rounded-md bg-white/5 px-2.5 py-1 text-xs text-ink-300">
          {project.platform}
        </div>
      )}
    </div>
  );
}

function ShopifySection() {
  return (
    <div className="mt-12 rounded-2xl border border-white/8 bg-ink-850/50 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-400/10 border border-mint-400/20">
          <ShoppingBag className="h-5 w-5 text-mint-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-ink-100">Shopify & E-commerce</h3>
          <p className="text-xs text-ink-400">2021</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-300">
        Worked on multiple Shopify projects and e-commerce implementations during 2021, including
        client-specific storefront development and customization.
      </p>
    </div>
  );
}

function ProjectArchive() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between rounded-2xl glass p-6 transition-all duration-300 hover:border-white/15"
      >
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-ink-400" />
          <div className="text-left">
            <h3 className="text-base font-semibold text-ink-100">Project Archive</h3>
            <p className="text-xs text-ink-400">Older projects and earlier work</p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-ink-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? 'mt-3 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-2 rounded-2xl glass p-5 sm:grid-cols-2 lg:grid-cols-3">
          {archivedProjects.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/2 px-4 py-3 text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
