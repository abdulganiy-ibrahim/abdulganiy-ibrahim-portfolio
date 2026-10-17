export type Education = {
  id: string;
  school: string;
  degree: string; // e.g. "B.Tech in Computer Science"
  period: string; // e.g. "2024 - Present"
  location: string;
  currentLevel?: string; // e.g. "300 Level" (remove once graduated)
  expectedGraduation?: string; // e.g. "2028"
  coursework?: string[]; // relevant courses
  highlights?: string[]; // CGPA, awards, leadership, clubs, etc.
};