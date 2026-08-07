import { 
  NavLink, AboutCardText, JourneyCard, Technology, 
  Project
} from '@/types';
import {
  Brain, Blocks, ScanSearch, BookOpen, CodeXml, Globe
} from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiGithub, SiPostman, SiVercel, SiSupabase
} from 'react-icons/si';


export const navLinks: NavLink[] = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#journey', label: 'Journey'},
  {href: '#skills', label: 'Skills'},
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
  {icon: CodeXml, year: 2024, desc: 'Started learning html & css'},
  {icon: Globe, year: 2025, desc: 'built my first responsive website'}
]

export const skills: Technology[] = [
  {
    icon: SiHtml5, name: 'HTML5', color: "#E34F26"
  }, {
    icon: SiCss, name: 'CSS3', color: "#1572B6"
  }, {
    icon: SiJavascript, name: 'JavaScript', color: "#F7DF1E"
  }, {
    icon: SiTypescript, name: 'TypeScript', color: '#3178C6'
  }, {
    icon: SiReact, name: 'React.js', color: "#61DAFB"
  }, {
    icon: SiTailwindcss, name: 'TailwindCSS', color: '#06B6D4'
  }, {
    icon: SiNextdotjs, name: 'Next.js', color: "#000000"
  }, {
    icon: SiNodedotjs, name: 'NodeJS', color: '#5FA04E'
  }, {
    icon: SiExpress, name: 'Express.js', color: '#0A0A0A'
  }, {
    icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1'
  }, {
    icon: SiSupabase, name: 'Supabase', color: '#3ECF8E'
  }, {
    icon: SiGit, name: 'Git', color: '#F03C2E'
  }, {
    icon: SiGithub, name: 'Github', color: '#181717'
  }, {
    icon: SiPostman, name: 'Postman', color: '#FF6C37'
  }, {
    icon: SiVercel, name: 'Vercel', color: '#000000'
  }
]

export const projects: Project[] = [
  {
    image: '/projectImages/sellora-dashboard.png', 
    name: 'Sellora', 
    desc: 'A full-stack e-commerce platform that enables businesses to manage products, inventory, orders, and analytics through a modern, intuitive dashboard.', 
    technology: [
      'React', 'NextJS', 'TailwindCSS', 'Supabase'
    ],
    demoUrl: 'https://sellora-project-pi.vercel.app',
    githubUrl: 'https://github.com/abdulganiy-ibrahim',
    status: 'private'
  }
]