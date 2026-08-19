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
    desc: 'Architecture over shortcuts'
}, {
    icon: ScanSearch,
    title: 'Craft Experiences',
    desc: 'Details makes difference'
}, {
    icon: BookOpen,
    title: 'Keep growing',
    desc: 'Learning never stop'
  }
]

export const journeyCardText: JourneyCard[] = [
  {
    icon: CodeXml,
    year: 2024,
    desc: 'Started learning HTML & CSS and built small layouts and book covers.',
  },
  {
    icon: Globe,
    year: 2025,
    desc: 'Completed HTML & CSS and started learning JavaScript.',
  },
  {
    icon: Smartphone,
    year: 2025,
    desc: 'Built my first real project, a phone store with search, cart, and WhatsApp ordering.',
  },
  {
    icon: Atom,
    year: 2026,
    desc: 'Started learning React and built my first React project, a CGPA Calculator.',
  },
  {
    icon: Palette,
    year: 2026,
    desc: 'Learned Tailwind CSS and began building more polished, responsive interfaces.',
  },
  {
    icon: Layers,
    year: 2026,
    desc: 'Started learning Next.js and TypeScript while building Sellora.',
  },
  {
    icon: Store,
    year: 2026,
    desc: 'Built Sellora, my first full-stack multi-tenant web app with authentication, storefronts, carts, orders, and analytics.',
  },
  {
    icon: Server,
    year: 2026,
    desc: 'Now learning Node.js and Express.js while deepening my understanding of system design and software architecture.',
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
    image: '/projectImages/sellora-dash-sreenshot.webp', 
    name: 'Sellora', 
    desc: 'A full-stack e-commerce platform that enables businesses to manage products, inventory, orders, and analytics through a modern, intuitive dashboard.', 
    technology: [
      'React.js', 'Next.js', 'TailwindCSS', 'Supabase'
    ],
    LiveUrl: 'https://sellora-project-pi.vercel.app',
    githubUrl: 'https://github.com/abdulganiy-ibrahim',
    status: 'private'
  }, {
    image: '/projectImages/LPMS.png', 
    name: 'Product management system', 
    desc: 'A full-stack product management system built with Express and TypeScript, featuring CRUD operations for creating, viewing, updating, and deleting products through a React frontend.', 
    technology: [
      'React.js',  'TailwindCSS', 'Typescript', 'Express.js'
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