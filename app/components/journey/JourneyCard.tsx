import { journeyCardText as cardText } from "@/lib/data";

export default function JourneyCard() {
  return (
    <>
      {
        cardText.map((text) => (
          <div
            key={text.year}
            className="relative pl-12 mb-8"
          >
            <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />

            <div className="rounded-2xl shadow-soft p-4 hover:shadow-emerald transition-all duration-300">
              <div className="bg-primary/20 inline-flex items-center justify-center p-2 rounded-xl">
                <text.icon className="text-primary" />
              </div>

              <div className="mt-2">
                <h1>{text.year}</h1>
                <p>{text.desc}</p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}