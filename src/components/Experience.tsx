import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { experience } from '@/data/experience';
import { MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <AmbientGlow variant="bottom-right" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          title="Experience"
        />

        <div className="mt-16 md:mt-24">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-400/40 via-accent-400/20 to-transparent md:left-1/2" />

            <div className="space-y-12 md:space-y-20">
              {experience.map((item, i) => (
                <Reveal key={item.role} delay={1}>
                  <TimelineItem item={item} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: (typeof experience)[number];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Node */}
      <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
        <div className="h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.4)]" />
        <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-accent-400/30" />
      </div>

      {/* Content */}
      <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-12">
        <div className="group rounded-2xl glass p-6 transition-all duration-300 hover:border-white/15 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-ink-100">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-accent-400/80">{item.organization}</p>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-ink-300">
              {item.period}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="rounded-md border border-white/8 bg-white/3 px-2.5 py-1 text-xs text-ink-300"
              >
                {h}
              </span>
            ))}
          </div>

          {item.locations && (
            <div className="mt-5 flex items-center gap-2 border-t border-white/6 pt-4">
              <MapPin className="h-3.5 w-3.5 text-ink-500" />
              <p className="text-xs text-ink-400">
                {item.locations.join(' · ')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}
