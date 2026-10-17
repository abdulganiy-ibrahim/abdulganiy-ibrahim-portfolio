import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, company, type, period, location, summary, highlights, technologies } =
    experience;

  return (
    // Mobile: stacked. md and up: horizontal (meta column on the left, details on the right).
    <article className="flex flex-col gap-5 rounded-2xl border border-border bg-background-card p-5 transition-all duration-300 hover:border-glow-border hover:shadow-emerald sm:p-6 md:flex-row md:gap-8 md:p-8">
      {/* Left: who / when */}
      <div className="md:w-56 md:shrink-0">
        <p className="text-sm font-medium text-primary">{period}</p>
        <h4 className="mt-1 font-heading text-lg font-semibold text-foreground">
          {company}
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">{type}</p>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
      </div>

      {/* Right: what you did technically */}
      <div className="min-w-0 flex-1 md:border-l md:border-border md:pl-8">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {role}
        </h3>
        <p className="mt-2 text-muted-foreground">{summary}</p>

        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface px-4 py-1.5 text-sm text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}