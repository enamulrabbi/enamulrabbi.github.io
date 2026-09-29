export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  locations?: string[];
  platforms?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Lead Developer',
    organization: 'Vytal Brands',
    period: '2021–2026',
    description:
      'Worked as a Lead Developer across 31+ projects involving web applications, mobile applications, e-commerce systems, automation and custom business software.',
    highlights: [
      'Full-stack development',
      'Mobile development',
      'E-commerce',
      'Backend systems',
      'APIs',
      'Automation',
      'AI integrations',
      'Client projects',
      'Team collaboration',
    ],
  },
  {
    role: 'Freelance Software Developer',
    organization: 'Upwork · Fiverr · Direct Clients',
    period: 'Freelance',
    description:
      'Worked with clients through freelance platforms and direct engagements, building custom web applications, mobile applications, automation systems, e-commerce platforms and business software.',
    highlights: [
      'International client experience',
      'Web applications',
      'Mobile applications',
      'Automation systems',
      'E-commerce platforms',
      'Business software',
    ],
    locations: ['Denmark', 'India', 'Georgia', 'Middle East', 'Bangladesh'],
    platforms: ['Upwork', 'Fiverr', 'Direct Clients'],
  },
];
