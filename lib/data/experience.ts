import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "sellora",
    role: "Full Stack Developer",
    company: "Sellora",
    type: "Personal Project",
    period: "March 2026 to July 2026",
    summary:
      "A multi tenant e-commerce storefront platform where each vendor gets their own store front and dashboard. I built it full stack and own the data security, the dashboards and the vendor tooling.",
    highlights: [
      "Designed Row Level Security policies in Supabase so each store can only read and write its own data, keeping tenants fully isolated at the database level.",
      "Built a multi store dashboard system where every vendor manages their own store from one account, each with a matching public store front.",
      "Designed the dashboard interface and component structure with React and Tailwind CSS, focused on making store management quick and clear.",
      "Implemented product management and vendor order handling, with orders arriving through WhatsApp rather than a built in checkout.",
      "Integrated Supabase Auth to handle sign in and session management across stores and dashboards.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Supabase Auth",
    ],
  },
  {
    id: "auth-system",
    role: "Backend Developer",
    company: "Authentication System",
    type: "Personal Project",
    period: "August 2026 to September 2026",
    summary:
      "An end to end authentication system built from scratch with Node.js and Express.js to understand how secure sign in works beyond using a ready made service.",
    highlights: [
      "Built sign up and sign in flows with input validation and clear error responses.",
      "Hashed passwords before storage so plain text credentials are never saved.",
      "Issued and verified JWT tokens to keep users signed in across requests.",
      "Added authorization middleware to protect routes and restrict access by user role.",
      "Applied rate limiting to slow down brute force attempts on sensitive endpoints.",
    ],
    technologies: ["Node.js", "Express.js", "JWT"],
  },
];