import { ServiceItem, TechnologyItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    shortDesc: 'Custom websites & web applications built with latest technologies.',
    fullDesc: 'We engineer robust, responsive, and high-performance web applications tailored to your business goals. From modern React SPAs to enterprise-grade web portals, we ensure exceptional UX, fast loading speeds, and scalable architecture.',
    iconName: 'Code',
    features: ['Custom UI/UX Design', 'Full-Stack Web Apps', 'E-Commerce Platforms', 'API Integration & Development'],
    deliverables: ['Source Code Ownership', 'Responsive Mobile-First UI', 'SEO Optimized', 'Deployment & Training']
  },
  {
    id: 'mobile-app-development',
    title: 'MOBILE APP DEVELOPMENT',
    shortDesc: 'Native & cross-platform mobile apps for Android & iOS.',
    fullDesc: 'Transform your ideas into feature-rich mobile applications. We build high-performance native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps delivering seamless experiences across all devices.',
    iconName: 'Smartphone',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Mobile Design', 'App Store Deployment & Support'],
    deliverables: ['Play Store & App Store Ready', 'Push Notification Integration', 'Secure Offline Storage', 'Analytics Setup']
  },
  {
    id: 'software-development',
    title: 'SOFTWARE DEVELOPMENT',
    shortDesc: 'Scalable, secure & high-performance software solutions.',
    fullDesc: 'Custom enterprise software engineered to streamline operations, automate workflows, and solve complex business challenges with meticulous attention to security and performance.',
    iconName: 'Laptop',
    features: ['Enterprise Software', 'ERP & CRM Systems', 'Cloud-Native Architecture', 'Legacy Modernization'],
    deliverables: ['Scalable Microservices', 'Automated Testing', 'Role-Based Access Control', 'Comprehensive Documentation']
  },
  {
    id: 'cloud-solutions',
    title: 'CLOUD SOLUTIONS',
    shortDesc: 'Cloud migration, hosting, AWS, Azure & infrastructure management.',
    fullDesc: 'Empower your business with reliable cloud infrastructure. We specialize in AWS, Azure, and Google Cloud migration, serverless deployments, CI/CD pipelines, and 24/7 DevOps management.',
    iconName: 'Cloud',
    features: ['AWS & Azure Migration', 'DevOps & CI/CD Pipelines', 'Serverless Infrastructure', 'High Availability & Backup'],
    deliverables: ['Optimized Cloud Cost', 'Automated Scaling', 'Enterprise Security Hardening', 'Monitoring & Alerts']
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    shortDesc: 'Boost your online presence with SEO, SMM, Google Ads & more.',
    fullDesc: 'Drive qualified traffic, maximize conversions, and elevate your brand visibility with data-driven digital marketing strategies, SEO campaigns, PPC advertising, and social media management.',
    iconName: 'TrendingUp',
    features: ['Search Engine Optimization (SEO)', 'Google Ads & PPC Campaigns', 'Social Media Marketing (SMM)', 'Conversion Rate Optimization'],
    deliverables: ['Keyword Ranking Reports', 'Ad ROI Analytics', 'Content Strategy Calendar', 'Lead Generation Funnels']
  },
  {
    id: 'it-consulting',
    title: 'IT CONSULTING',
    shortDesc: 'Strategic IT consulting to optimize processes and drive growth.',
    fullDesc: 'Navigate complex technology decisions with expert guidance. We audit your existing systems, recommend future-ready tech stacks, and architect digital transformation roadmaps for sustainable growth.',
    iconName: 'Users',
    features: ['Technology Roadmap Planning', 'IT Infrastructure Audit', 'Cybersecurity Assessment', 'Digital Transformation'],
    deliverables: ['Strategic Audit Report', 'Tech Stack Recommendation', 'Risk Mitigation Plan', 'Dedicated Tech Advisor']
  }
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  { name: '.NET', category: 'Backend', icon: 'Code2', description: 'Enterprise-grade backend framework by Microsoft for scalable web services.' },
  { name: 'ASP.NET Core', category: 'Backend', icon: 'Server', description: 'High-performance, cross-platform framework for building modern cloud apps.' },
  { name: 'Angular', category: 'Frontend', icon: 'Layers', description: 'Robust TypeScript-based framework for building large-scale web applications.' },
  { name: 'SQL Server', category: 'Database', icon: 'Database', description: 'Enterprise relational database management system for secure data storage.' },
  { name: 'MySQL', category: 'Database', icon: 'Database', description: 'Popular open-source relational database powering high-speed web apps.' },
  { name: 'AWS', category: 'Cloud', icon: 'Cloud', description: 'Amazon Web Services cloud infrastructure for hosting, storage, and computing.' },
  { name: 'Azure', category: 'Cloud', icon: 'CloudRain', description: 'Microsoft Azure cloud platform for enterprise applications and services.' },
  { name: 'React', category: 'Frontend', icon: 'Atom', description: 'Leading JavaScript library for building fast, interactive user interfaces.' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'EXPERT TEAM',
    subtitle: 'Skilled professionals with industry experience.',
    icon: 'Award',
    desc: 'Our certified engineers, architects, and designers bring years of top-tier industry experience to every project.'
  },
  {
    title: 'QUALITY & SECURITY',
    subtitle: 'We follow best practices to deliver secure & quality solutions.',
    icon: 'ShieldCheck',
    desc: 'Rigorous code reviews, automated testing, and stringent security standards ensure zero-defect delivery.'
  },
  {
    title: 'ON-TIME DELIVERY',
    subtitle: 'We value time and deliver what we promise.',
    icon: 'Clock',
    desc: 'Agile milestone planning guarantees transparent progress and punctual delivery without compromises.'
  },
  {
    title: 'SCALABLE SOLUTIONS',
    subtitle: 'Future-ready solutions that grow with your business.',
    icon: 'TrendingUp',
    desc: 'Modular architectures designed to scale effortlessly as your user base and data volume expand.'
  },
  {
    title: '24/7 SUPPORT',
    subtitle: "We're always here to support your business.",
    icon: 'Headphones',
    desc: 'Dedicated maintenance, continuous monitoring, and responsive technical support around the clock.'
  }
];

export const STATS_DATA = [
  { number: '100+', label: 'Happy Clients', icon: 'Users' },
  { number: '250+', label: 'Projects Delivered', icon: 'CheckCircle' },
  { number: '5+', label: 'Years of Excellence', icon: 'Star' },
  { number: 'Global', label: 'Clientele', icon: 'Globe' }
];
