import { projects } from '@/lib/data';
import ProjectCardImage from "./ProjectCardimage";
import TechnologyBadge from "./TechnologyBadge";
import { LiveBtn, GithubBtn } from './ProjectCardBtn';

export default function ProjectCard() {
  return (
    <>
      {
        projects.map((p) => (
          <div
            key={p.name}
            className="group relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-background-card p-3 shadow-soft transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-emerald"
          >
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-xl"
            >
              <div className="w-full transition-transform duration-700 ease-out group-hover:scale-110">
                <ProjectCardImage imageUrl={p.image} />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="space-y-2">
              <h1 className="text-base font-semibold text-primary transition-colors duration-300">
                {p.name}
              </h1>

              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {
                p.technology.map((tech) => (
                  <TechnologyBadge key={tech} name={tech} />
                ))
              }
            </div>

            <div className="mt-auto flex items-center justify-between gap-2 border-t border-border/60 pt-3">
              <LiveBtn LinkUrl={p.LiveUrl} />
              <GithubBtn LinkUrl={p.githubUrl} />
            </div>

          </div>
        ))
      }
    </>
  )
}