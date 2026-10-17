export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Freelance"
  | "Internship"
  | "Contract"
  | "Personal Project";

export type Experience = {
  id: string;
  role: string;
  company: string;
  type: EmploymentType;
  period: string; // e.g. "Jan 2026 - Present"
  location?: string;
  summary: string; // one or two sentences on what the role was
  highlights: string[]; // technical responsibilities / achievements
  technologies: string[];
};