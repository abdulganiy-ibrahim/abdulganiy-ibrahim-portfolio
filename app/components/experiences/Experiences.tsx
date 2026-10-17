import { experiences } from "@/lib/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  return (
    // scroll-mt keeps the heading clear of the floating navbar when using #experience
    <section id="experience" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="font-heading text-lg font-semibold text-primary">
            Experience
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            How I've worked
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}