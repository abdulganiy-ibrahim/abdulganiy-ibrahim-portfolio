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
  category: string;
  color: string;
}

export interface Project {
  id: string;
  image: string;
  name: string;
  desc: string;
  technology: string[];
  LiveUrl: string;
  githubUrl: string;
  status: 'private' | 'public';
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}