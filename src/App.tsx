import { CursorGlow } from '@/components/CursorGlow';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { MoreProjects } from '@/components/MoreProjects';
import { Skills } from '@/components/Skills';
import { HowIBuild } from '@/components/HowIBuild';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CaseStudy } from '@/components/CaseStudy';
import { useHashRoute } from '@/hooks/useHashRoute';

export default function App() {
  const [route, navigate] = useHashRoute();

  const isCaseStudy = route.startsWith('/work/');
  const caseStudySlug = isCaseStudy ? route.replace('/work/', '') : '';

  const handleExplore = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCaseStudy = (slug: string) => {
    navigate(`/work/${slug}`);
  };

  const handleBack = () => {
    navigate('');
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isCaseStudy) {
    return (
      <div className="min-h-screen bg-ink-950">
        <CursorGlow />
        <Navigation onNavigate={navigate} currentRoute={route} />
        <CaseStudy slug={caseStudySlug} onBack={handleBack} />
        <Footer onNavigate={navigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <CursorGlow />
      <Navigation onNavigate={navigate} currentRoute={route} />
      <main>
        <Hero onExplore={handleExplore} />
        <SelectedWork onCaseStudy={handleCaseStudy} />
        <Experience />
        <About />
        <MoreProjects />
        <Skills />
        <HowIBuild />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
