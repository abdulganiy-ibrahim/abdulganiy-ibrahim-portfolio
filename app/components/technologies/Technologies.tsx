import TechnologyCard from "./TecnologyCard"

export default function Technologies() {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">Skill & Technologies</h1>
        <p className="text-base font-semibold">Technogies I work with</p>
      </div> 

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechnologyCard />
      </div>
    </section>
  )
}