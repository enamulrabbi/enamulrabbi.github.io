import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { Cpu, Layers, Boxes, Rocket } from 'lucide-react';

const focusAreas = [
  { icon: Cpu, label: 'AI Products', detail: 'Voice AI, AI agents, automation' },
  { icon: Layers, label: 'SaaS Platforms', detail: 'Full-stack web applications' },
  { icon: Boxes, label: 'Mobile Apps', detail: 'React Native, Flutter, Android' },
  { icon: Rocket, label: 'E-commerce', detail: 'Digital marketplaces & storefronts' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <AmbientGlow variant="dual" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              index="03"
              title="I build products, not just features."
            />

            <Reveal delay={1} className="mt-8 space-y-5 text-base leading-relaxed text-ink-300 md:text-lg">
              <p>
                I'm Enamul Islam, a software engineer and product builder focused on AI, SaaS,
                web and mobile applications.
              </p>
              <p>
                I've worked across AI-powered communication platforms, SaaS products, e-commerce
                systems, automation tools, mobile applications and custom business software.
              </p>
              <p>
                My work involves turning ideas and requirements into real software — from
                frontend and backend development to APIs, integrations and deployment.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal key={area.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <div className="group rounded-xl glass p-5 transition-all duration-300 hover:border-white/15">
                    <area.icon className="mb-3 h-5 w-5 text-accent-400 transition-transform group-hover:scale-110" />
                    <p className="text-sm font-semibold text-ink-100">{area.label}</p>
                    <p className="mt-1 text-xs text-ink-400">{area.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
