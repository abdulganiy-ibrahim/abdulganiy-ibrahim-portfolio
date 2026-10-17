import type { Education } from "@/types/education";

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  const {
    school,
    degree,
    period,
    location,
    currentLevel,
    expectedGraduation,
    coursework,
    highlights,
  } = education;

  return (
    // Same horizontal layout as ExperienceCard so the two sections feel consistent
    <article className="flex flex-col gap-5 rounded-2xl border border-border bg-background-card p-5 transition-all duration-300 hover:border-glow-border hover:shadow-emerald sm:p-6 md:flex-row md:gap-8 md:p-8">
      {/* Left: when / where */}
      <div className="md:w-56 md:shrink-0">
        <p className="text-sm font-medium text-primary">{period}</p>
        {expectedGraduation && (
          <p className="mt-1 text-sm text-muted-foreground">
            Expected graduation: {expectedGraduation}
          </p>
        )}
        <p className="mt-1 text-sm text-muted-foreground">{location}</p>
      </div>

      {/* Right: school, degree, extras */}
      <div className="min-w-0 flex-1 md:border-l md:border-border md:pl-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {school}
          </h3>
          {currentLevel && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {currentLevel}
            </span>
          )}
        </div>

        <p className="mt-1 font-medium text-foreground">{degree}</p>

        {highlights && highlights.length > 0 && (
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
        )}

        {coursework && coursework.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-foreground">
              Relevant coursework
            </p>
            <ul className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-full bg-surface px-4 py-1.5 text-sm text-foreground"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}