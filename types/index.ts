import { LucideIcon } from "lucide-react";
import { IconType } from 'react-icons';

export interface NavLink {
  href: string;
  label: string;
}

export interface AboutCardText {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface JourneyCard {
  icon: LucideIcon;
  year: number;
  desc: string;
}

export interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

export interface Project {
  
}