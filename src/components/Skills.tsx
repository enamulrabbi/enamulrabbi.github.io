import { Layout, Smartphone, Server, Cpu, Database } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { skillGroups } from '@/data/skills';

const iconMap: Record<string, typeof Layout> = {
  layout: Layout,
  smartphone: Smartphone,
  server: Server,
  cpu: Cpu,
  database: Database,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <AmbientGlow variant="center" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          title="Technologies I Work With"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || Layout;
            return (
              <Reveal key={group.label} delay={((i % 5) + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:border-white/15">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-400/8 border border-accent-400/15 transition-all group-hover:bg-accent-400/12 group-hover:border-accent-400/25">
                    <Icon className="h-5 w-5 text-accent-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-100">{group.label}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-xs text-ink-400">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
