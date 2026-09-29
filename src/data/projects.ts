export interface SelectedProject {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  website: string;
  tags: string[];
  layout: 'visual-left' | 'visual-right' | 'full-width' | 'large-visual';
  index: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    role: string;
    keyFeatures: string[];
    technology: string[];
    engineeringChallenges: string;
    outcome: string;
    github?: string;
  };
}

export const selectedProjects: SelectedProject[] = [
  {
    slug: 'techclosr-ai',
    name: 'TechClosr AI',
    category: 'AI · SaaS · Voice AI',
    tagline: 'AI voice agents for business communication',
    description:
      'An AI-powered business communication platform that enables businesses to handle customer conversations, leads, follow-ups and appointments through intelligent voice agents.',
    website: 'https://techclosr.com/',
    tags: ['AI Voice Agents', 'Lead Management', 'Appointments', 'Knowledge Base', 'Call Automation'],
    layout: 'visual-left',
    index: '01',
    caseStudy: {
      overview:
        'TechClosr AI is a SaaS platform that deploys intelligent voice agents to handle customer communication end-to-end — from initial contact through lead qualification, appointment scheduling and follow-up.',
      problem:
        'Businesses spend significant time and resources handling inbound and outbound customer calls manually. Response delays, inconsistent messaging and missed follow-ups create friction in the customer journey.',
      solution:
        'An AI voice platform where configurable agents handle calls, manage leads, book appointments and reference a connected knowledge base — providing consistent, round-the-clock communication without manual intervention.',
      role:
        'Built the platform as a full-stack product, including the frontend dashboard, backend services, AI voice integration and API architecture.',
      keyFeatures: [
        'AI voice agents for inbound and outbound calls',
        'Lead management pipeline',
        'Appointment scheduling and calendar integration',
        'Knowledge base for context-aware responses',
        'Call automation workflows',
        'Dashboard for monitoring and configuration',
      ],
      technology: ['React', 'Node.js', 'AI Voice APIs', 'REST APIs', 'MySQL'],
      engineeringChallenges:
        'Integrating real-time voice AI with low latency, managing call state and session continuity, and building a knowledge base system that gives voice agents accurate, context-aware responses during live conversations.',
      outcome:
        'A working SaaS platform deployed at techclosr.com, enabling businesses to automate customer communication through configurable AI voice agents.',
    },
  },
  {
    slug: 'completegreet',
    name: 'CompleteGreet',
    category: 'SaaS · Interactive Video · Customer Engagement',
    tagline: 'Interactive video platform for engagement and conversion',
    description:
      'A large SaaS platform built around interactive video, visitor engagement, communication, lead generation and conversion experiences.',
    website: 'https://completegreet.com/',
    tags: ['Interactive Video', 'Live Chat', 'Bookings', 'Analytics', 'E-commerce'],
    layout: 'visual-right',
    index: '02',
    caseStudy: {
      overview:
        'CompleteGreet is a comprehensive SaaS platform that combines interactive video, live chat, bookings, analytics and e-commerce capabilities into a single customer engagement product.',
      problem:
        'Businesses need multiple disconnected tools — one for video, one for chat, one for booking, one for analytics — which fragments the customer experience and creates integration overhead.',
      solution:
        'A unified SaaS platform where businesses can deploy interactive video experiences, manage live chat, accept bookings, track analytics and handle e-commerce — all from a single integrated system.',
      role:
        'Contributed to the development of the platform across multiple repositories, working on frontend features, backend services and integrations. CompleteGreet is a team-built product — this case study reflects my specific contributions to the codebase.',
      keyFeatures: [
        'Interactive video experiences',
        'Real-time live chat',
        'Booking and scheduling system',
        'Analytics and reporting dashboard',
        'E-commerce integration',
        'Multi-repository architecture',
      ],
      technology: ['React', 'Node.js', 'PHP', 'Laravel', 'REST APIs', 'MySQL'],
      engineeringChallenges:
        'Coordinating across multiple repositories that form one product, maintaining data consistency between subsystems, and building real-time interactive video features that perform reliably at scale.',
      outcome:
        'A deployed SaaS platform at completegreet.com serving as an integrated customer engagement and conversion tool.',
    },
  },
  {
    slug: 'jasmyn-ai',
    name: 'Jasmyn AI',
    category: 'AI · Voice AI · SaaS',
    tagline: 'AI voice calling for business communication',
    description:
      'An AI voice-calling platform designed to automate business conversations and customer communication through intelligent AI agents.',
    website: 'https://jasmyn.ai/',
    tags: ['Voice AI', 'AI Agents', 'Business Calls', 'Automation'],
    layout: 'full-width',
    index: '03',
    caseStudy: {
      overview:
        'Jasmyn AI is an AI voice-calling platform that automates business conversations — handling customer calls, follow-ups and communication through configurable AI agents.',
      problem:
        'Outbound and inbound business calling is labor-intensive, inconsistent and difficult to scale. Businesses need a way to automate routine phone-based communication without losing conversational quality.',
      solution:
        'A voice AI platform with intelligent agents that can be configured for specific business use cases — handling calls, managing conversation flow and maintaining natural-sounding dialogue.',
      role:
        'Built the platform including the frontend interface, backend services, AI voice integration and agent configuration system.',
      keyFeatures: [
        'AI voice agents for business calls',
        'Agent configuration and customization',
        'Conversation flow management',
        'Call automation and scheduling',
        'Business communication dashboard',
      ],
      technology: ['React', 'Node.js', 'AI Voice APIs', 'REST APIs', 'MySQL'],
      engineeringChallenges:
        'Achieving natural conversation flow in AI voice interactions, managing real-time audio processing, and building a flexible agent configuration system that supports diverse business calling scenarios.',
      outcome:
        'A working voice AI platform deployed at jasmyn.ai, enabling businesses to automate phone-based customer communication.',
    },
  },
  {
    slug: 'optionsalgo-ai',
    name: 'OptionsAlgo AI',
    category: 'AI · Trading · SaaS',
    tagline: 'AI-powered options and market analysis',
    description:
      'An AI-powered options and market analysis platform that evolved from an AI signal concept into a web-based product.',
    website: 'https://optionsalgo.ai/',
    tags: ['AI', 'Market Analysis', 'Trading', 'SaaS'],
    layout: 'visual-right',
    index: '04',
    caseStudy: {
      overview:
        'OptionsAlgo AI is a web-based SaaS platform for options and market analysis, built around AI-assisted signal generation and market data processing.',
      problem:
        'Options traders need tools that can process market data and surface relevant analysis in real time, without relying on manual chart monitoring.',
      solution:
        'A web-based platform that combines AI analysis with market data feeds to provide options and market insights through an accessible web interface.',
      role:
        'Built the platform from concept to deployed product — including the frontend, backend, AI integration and market data processing.',
      keyFeatures: [
        'AI-powered market analysis',
        'Options signal processing',
        'Web-based dashboard interface',
        'Real-time market data integration',
        'SaaS subscription architecture',
      ],
      technology: ['React', 'Node.js', 'AI APIs', 'REST APIs', 'MySQL'],
      engineeringChallenges:
        'Processing real-time market data efficiently, building an AI analysis pipeline that produces timely output, and designing a SaaS architecture that handles subscription-based access control.',
      outcome:
        'A deployed SaaS product at optionsalgo.ai, evolved from an AI signal concept into a full web-based trading analysis platform.',
    },
  },
  {
    slug: 'binzoshop',
    name: 'BinzoShop',
    category: 'E-commerce · Digital Marketplace',
    tagline: 'Digital products marketplace',
    description:
      'An e-commerce platform for digital products including gift cards, game top-ups, PC games and other virtual products.',
    website: 'https://binzoshop.com/',
    tags: ['E-commerce', 'Digital Products', 'Marketplace'],
    layout: 'large-visual',
    index: '05',
    caseStudy: {
      overview:
        'BinzoShop is an e-commerce platform specializing in digital products — including gift cards, game top-ups, PC games and other virtual goods.',
      problem:
        'Selling digital products requires a platform that can handle instant delivery, multiple product categories and secure transactions for virtual goods.',
      solution:
        'A complete e-commerce platform with product catalog, cart, checkout and digital delivery — designed specifically for the needs of virtual product sales.',
      role:
        'Built the e-commerce platform including the storefront, backend, product management and order processing system.',
      keyFeatures: [
        'Digital product catalog',
        'Gift card and game top-up system',
        'Checkout and payment processing',
        'Order management',
        'Product management dashboard',
      ],
      technology: ['React', 'PHP', 'Laravel', 'REST APIs', 'MySQL'],
      engineeringChallenges:
        'Building a reliable digital delivery system for instant product fulfillment, handling multiple virtual product types with different delivery flows, and designing a secure checkout process.',
      outcome:
        'A deployed e-commerce platform at binzoshop.com, serving as a digital marketplace for gift cards, game top-ups and PC games.',
    },
  },
];
