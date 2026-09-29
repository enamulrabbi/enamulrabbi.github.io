import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (path: string) => void;
  currentRoute: string;
}

const navLinks = [
  { label: 'Work', path: 'work' },
  { label: 'Experience', path: 'experience' },
  { label: 'About', path: 'about' },
  { label: 'Projects', path: 'projects' },
  { label: 'Contact', path: 'contact' },
];

export function Navigation({ onNavigate, currentRoute }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isCaseStudy = currentRoute.startsWith('/work/');

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isCaseStudy) {
      onNavigate('');
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(path);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3' : 'py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              if (isCaseStudy) {
                onNavigate('');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-display text-lg font-bold tracking-tight text-ink-100 transition-opacity hover:opacity-80"
          >
            ENAMUL
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-200 transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-strong p-6 pt-24 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className="rounded-lg px-4 py-3 text-base font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-ink-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
