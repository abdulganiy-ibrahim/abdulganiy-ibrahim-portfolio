import { NavLink, AboutCardText } from '@/app/types';
import { Brain, Blocks, ScanSearch, BookOpen} from "lucide-react";

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