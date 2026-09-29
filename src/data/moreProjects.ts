export interface MoreProject {
  name: string;
  description: string;
  category: string;
  details?: string;
  components?: string[];
  date?: string;
  platform?: string;
}

export const moreProjects: MoreProject[] = [
  {
    name: 'Erides',
    description:
      'Ride-hailing platform consisting of passenger, driver and administrative systems.',
    category: 'Mobile · Platform · Ride-hailing',
    components: ['Passenger App', 'Driver App', 'Admin Platform', 'Backend/API'],
  },
  {
    name: 'CommentZap',
    description:
      'AI-powered automation for responding to Instagram comments, Instagram messages and WhatsApp messages.',
    category: 'AI · Automation · Social',
  },
  {
    name: 'CEO Society AI',
    description:
      'An AI-powered learning and community platform inspired by modern online learning communities.',
    category: 'AI · Education · SaaS',
  },
  {
    name: 'Android Auto Gmail Print',
    description:
      'An Android application developed for automatic Gmail printing on the Sunmi V2 Pro handheld device.',
    category: 'Android · Automation · Client Project',
    date: '2023',
    platform: 'Upwork',
  },
];

export const archivedProjects: string[] = [
  'Time Management Application',
  'Lottery Update Notification System',
  'SaaS Call Center Application',
  'Restaurant Management Software',
  'Income & Expense Management Application',
  'Pacman-inspired Game',
  'Trivia / Quiz Game',
  'Customizable E-commerce Platform',
  'Workout Tracker / Planner',
  'Student Learning Material Platform',
  'Instagram-style Social Network',
  'School Management System',
  'Deals / Product Review Forum',
];
