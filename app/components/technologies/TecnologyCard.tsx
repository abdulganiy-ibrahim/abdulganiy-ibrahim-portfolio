import { skills } from "@/lib/data";

type TechnologyCardProps = {
  category: string;
}

export default function TechnologyCard({ category }: TechnologyCardProps) {
  const filteredSkills =
    category === "all" ? skills : skills.filter((skill) => skill.category === category);

  return (
    <>
      {
        filteredSkills.map((skill) => {
          const Icon = skill.icon

          return (
            <div 
            key={skill.name}
            className="flex flex-col gap-4 items-center justify-center bg-background-card border border-border/60 rounded-2xl shadow-soft p-6 hover:shadow-emerald hover:border-primary/40 transition-all duration-300"
          >
              
            <Icon className="w-12 h-12" color={skill.color}/>

            <h1>{skill.name}</h1>
            </div>
          )         
        })
      }
    </>
  )
}