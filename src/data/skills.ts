export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    icon: 'layout',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Mobile',
    icon: 'smartphone',
    skills: ['React Native', 'Flutter', 'Android'],
  },
  {
    label: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    label: 'AI',
    icon: 'cpu',
    skills: ['AI APIs', 'Voice AI', 'AI Agents', 'Automation'],
  },
  {
    label: 'Database',
    icon: 'database',
    skills: ['MySQL', 'Project-specific databases'],
  },
];

export interface PipelineStep {
  number: string;
  title: string;
  description: string;
}

export const pipelineSteps: PipelineStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Define the problem, map the requirements and understand the business context before writing any code.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'Design the system — frontend, backend, APIs, data models and integrations — before building begins.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement the product with clean, maintainable code across frontend, backend and mobile as needed.',
  },
  {
    number: '04',
    title: 'Integrate',
    description: 'Connect third-party services, AI APIs, payment systems and external tools into a cohesive system.',
  },
  {
    number: '05',
    title: 'Test',
    description: 'Verify functionality, handle edge cases and ensure the product works reliably across environments.',
  },
  {
    number: '06',
    title: 'Deploy',
    description: 'Ship to production with proper configuration, environment setup and static hosting readiness.',
  },
  {
    number: '07',
    title: 'Improve',
    description: 'Monitor, iterate and refine based on real usage — software is never truly finished.',
  },
];
