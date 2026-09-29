import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const footerLinks = [
  { label: 'Work', path: 'work' },
  { label: 'Experience', path: 'experience' },
  { label: 'Projects', path: 'projects' },
  { label: 'Contact', path: 'contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const el = document.getElementById(path);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('');
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="relative border-t border-white/6 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-ink-100">
              Enamul Islam
            </p>
            <p className="mt-1 text-sm text-ink-400">
              Software Engineer & AI Product Builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm text-ink-400 transition-colors hover:text-ink-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-6">
          <p className="text-xs text-ink-500">
            © 2026 Enamul Islam
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-ink-500 transition-colors hover:text-ink-300"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
