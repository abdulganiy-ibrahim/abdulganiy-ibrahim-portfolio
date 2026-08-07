import { skills} from "@/lib/data";

export default function TechnologyCard() {
  return (
    <>
      {
        skills.map((skill) => {
          const Icon = skill.icon

          return (
            <div 
            key={skill.name}
            className="flex flex-col gap-4 items-center justify-center bg-background-card rounded-2xl shadow-soft p-6 hover:shadow-emerald transition-all duration-300"
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