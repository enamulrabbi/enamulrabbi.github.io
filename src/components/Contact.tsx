import { Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { AmbientGlow } from '@/components/AmbientGlow';
import { contact } from '@/data/contact';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <AmbientGlow variant="center" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <div className="rounded-3xl border-gradient relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-ink-900/80" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/8 via-transparent to-signal-500/8" />

          <div className="relative p-8 text-center md:p-16">
            <Reveal>
              <SectionHeading
                title="Have a product in mind?"
                align="center"
              />
            </Reveal>

            <Reveal delay={1}>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-300 md:text-lg">
                I'm open to interesting AI, SaaS, software engineering and product development
                opportunities.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${contact.email}`} className="btn-primary group">
                  <Mail className="h-4 w-4" />
                  Email Me
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
