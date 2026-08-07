import { projects } from '@/lib/data';
import ProjectCardImage from "./ProjectCardimage";
import TechnologyBadge from "./TechnologyBadge";

export default function ProjectCard() {
  return (
    <>
      {
        projects.map((p) => (
          <div
            key={p.name} 
            className="bg-background-card space-y-4 rounded-xl p-2"
            >
            <div className="flex items-center justify-center">
              <ProjectCardImage imageUrl={p.image} />
            </div>

            <div className="space-y-3">
              <h1 className="text-base text-primary font-semibold">{p.name}</h1>

              <p className="text-sm">{p.desc}</p>
            </div>

            <div>
              {
                p.technology.map((tech) => (
                  <>
                    <TechnologyBadge name={tech} />
                  </>
                ))
              }
            </div>

          </div>
        ))
      }
    </>
  )
}