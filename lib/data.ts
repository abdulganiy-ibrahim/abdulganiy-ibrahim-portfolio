import { 
  NavLink, AboutCardText, JourneyCard, Technology, Project, SocialLink
} from '@/types';
import {
  Brain, Blocks, ScanSearch, BookOpen, CodeXml, Globe, Mail, Smartphone, Atom, Palette, Layers, Store, Server
} from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiGithub, SiPostman, SiVercel, SiSupabase
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';


export const navLinks: NavLink[] = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#journey', label: 'Journey'},
  {href: '#technologies', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#contact', label: 'Contact'},
]

export const aboutCardText: AboutCardText[] = [
  {
    icon: Brain,
    title: 'Think Deeply',
    desc: 'Understanding before implementation.'
  }, {
    icon: Blocks,
    title: 'Build Intentionally',
    desc: 'Structure over shortcuts'
}, {
    icon: ScanSearch,
    title: 'Secure by default',
    desc: "Access control isn't an afterthought"
}, {
    icon: BookOpen,
    title: 'Keep growing',
    desc: 'Every project teaches the next one.'
  }
]

export const journeyCardText: JourneyCard[] = [
  {
    id: '1',
    icon: CodeXml,
    year: 2024,
    desc: 'Started learning HTML & CSS and built small layouts and book covers.',
  },
  {
    id: '2',
    icon: Globe,
    year: 2025,
    desc: 'Completed HTML & CSS and started learning JavaScript.',
  },
  {
    id: '3',
    icon: Smartphone,
    year: 2025,
    desc: 'Built my first real project, a phone store with search, cart, and WhatsApp ordering.',
  },
  {
    id: '4',
    icon: Atom,
    year: 2026,
    desc: 'Started learning React and built my first React project, a CGPA Calculator.',
  },
  {
    id: '5',
    icon: Palette,
    year: 2026,
    desc: 'Learned Tailwind CSS and began building more polished, responsive interfaces.',
  },
  {
    id: '6',
    icon: Layers,
    year: 2026,
    desc: 'Started learning Next.js and TypeScript while building Sellora.',
  },
  {
    id: '7',
    icon: Store,
    year: 2026,
    desc: 'Built Sellora, my first full-stack multi-tenant web app with authentication, storefronts, carts, orders, and analytics.',
  },
  {
    id: '8',
    icon: Server,
    year: 2026,
    desc: 'Building backend projects with Node.js and Express.js and deepening my understanding of system design and software architecture.',
  },
];

export const skills: Technology[] = [
  {
    icon: SiHtml5, name: 'HTML5', color: "#E34F26", category: 'frontend'
  }, {
    icon: SiCss, name: 'CSS3', color: "#1572B6", category: 'frontend'
  }, {
    icon: SiJavascript, name: 'JavaScript', color: "#F7DF1E", category: 'frontend'
  }, {
    icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'frontend'
  }, {
    icon: SiReact, name: 'React.js', color: "#61DAFB", category: 'frontend'
  }, {
    icon: SiTailwindcss, name: 'TailwindCSS', color: '#06B6D4', category: 'frontend'
  }, {
    icon: SiNextdotjs, name: 'Next.js', color: "#000000", category: 'frontend'
  }, {
    icon: SiNodedotjs, name: 'NodeJS', color: '#5FA04E', category: 'backend'
  }, {
    icon: SiExpress, name: 'Express.js', color: '#0A0A0A', category: 'backend'
  }, {
    icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', category: 'backend'
  }, {
    icon: SiSupabase, name: 'Supabase', color: '#3ECF8E', category: 'backend'
  }, {
    icon: SiGit, name: 'Git', color: '#F03C2E', category: 'tool'
  }, {
    icon: SiGithub, name: 'Github', color: '#181717', category: 'tool'
  }, {
    icon: SiPostman, name: 'Postman', color: '#FF6C37', category: 'tool'
  }, {
    icon: SiVercel, name: 'Vercel', color: '#000000', category: 'tool'
  }
]

export const projects: Project[] = [
  {
    id: '1',
    image: '/projectImages/sellora-dash-sreenshot.webp', 
    name: 'Sellora', 
    desc: "A multi-tenant storefront platform where each business gets its own store, products, orders, and sales dashboard, fully isolated from every other tenant on the platform. Every store is tied to its owner via userId, and every dependent table (products, orders, settings, sales) is scoped to that store's storeId. I enforced this isolation at the database level with Row-Level Security policies on each table, so tenant separation doesn't rely on application code getting it right every time; the database guarantees it.", 
    technology: [
      'React.js', 'Next.js', 'TailwindCSS', 'Supabase'
    ],
    LiveUrl: 'https://sellora-project-pi.vercel.app',
    githubUrl: 'https://github.com/abdulganiy-ibrahim',
    status: 'private'
  }, {
    id: '2',
    image: '/projectImages/LPMS.png', 
    name: 'Product management system', 
    desc: "A straightforward CRUD app for managing product inventory: create, edit, delete, and view, built with an Express/PostgreSQL backend and a React frontend. This was my first backend project outside a tutorial, and the real value was learning how to structure an Express codebase (routes, controllers, database layer) instead of dumping logic into one file. It's the project where backend development stopped being abstract to me.", 
    technology: [
      'React.js',  'TailwindCSS', 'Typescript', 'Express.js', 'PostgreSQL'
    ],
    LiveUrl: 'https://product-management-web-seven.vercel.app/',
    githubUrl: 'https://github.com/abdulganiy-ibrahim/product-management-system',
    status: 'public'
  },
]

export const socialLinks: SocialLink[] = [
  { icon: SiGithub, href: "https://github.com/abdulganiy-ibrahim", label: "GitHub", color: "181717" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/abdulganiy-ibrahim-04339840a", label: "LinkedIn" },
  { icon: Mail, href: "mailto:abdulganiyibrahim.dev@gmail.com", label: "Email" },
];