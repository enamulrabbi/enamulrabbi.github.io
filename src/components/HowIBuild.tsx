import { useState } from 'react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { pipelineSteps } from '@/data/skills';

export function HowIBuild() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <AmbientGlow variant="dual" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          title="From Idea to Production"
          subtitle="My build process — from understanding the problem to shipping and improving."
        />

        {/* Pipeline visualization */}
        <Reveal delay={1} className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-accent-400/30 via-signal-500/20 to-transparent lg:block" />

            <div className="grid gap-4 lg:grid-cols-7">
              {pipelineSteps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setActiveStep(i)}
                  className="group relative text-left"
                >
                  {/* Node */}
                  <div
                    className={`relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      activeStep === i
                        ? 'border-accent-400/40 bg-accent-400/10 shadow-[0_0_20px_4px_rgba(34,211,238,0.2)]'
                        : 'border-white/8 bg-ink-850 group-hover:border-white/15'
                    }`}
                  >
                    <span
                      className={`font-mono text-sm font-semibold transition-colors ${
                        activeStep === i ? 'text-accent-400' : 'text-ink-400 group-hover:text-ink-200'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Label */}
                  <p
                    className={`text-sm font-semibold transition-colors ${
                      activeStep === i ? 'text-ink-100' : 'text-ink-400 group-hover:text-ink-200'
                    }`}
                  >
                    {step.title}
                  </p>
                </button>
              ))}
            </div>

            {/* Active step detail */}
            <div className="mt-10 rounded-2xl glass p-6 md:p-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-2xl font-bold text-accent-400/60">
                  {pipelineSteps[activeStep].number}
                </span>
                <h3 className="text-xl font-semibold text-ink-100">
                  {pipelineSteps[activeStep].title}
                </h3>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300">
                {pipelineSteps[activeStep].description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
