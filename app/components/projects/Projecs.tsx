import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">Featured Projects</h1>
        <p className="text-base font-semibold">Things I've built</p>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
      </div>
    </section>
  )
}