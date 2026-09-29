import { useEffect, useState } from 'react';

export function useHashRoute(): [string, (path: string) => void] {
  const [route, setRoute] = useState(() => {
    if (typeof window === 'undefined') return '';
    const hash = window.location.hash.replace(/^#/, '');
    return hash;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setRoute(hash);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    if (path === '') {
      window.location.hash = '';
    } else {
      window.location.hash = path;
    }
  };

  return [route, navigate];
}
