import { aboutCardText as cardText } from "@/lib/data";

export default function AboutCard() {
  return (
    <>
      {
        cardText.map((text) => (
          <div
            key={text.title}
            className="rounded-2xl bg-background-card border border-border/60 shadow-soft p-6 hover:shadow-emerald transition-all duration-300"
          >
            <text.icon className="w-6 h-6 text-primary" />

            <h1 className="mt-4 text-md font-semibold">{text.title}</h1>

            <p className="text-sm text-muted-foreground">{text.desc}</p>
          </div>
        ))
      }
    </>
  )
}