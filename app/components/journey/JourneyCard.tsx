import { journeyCardText as cardText } from "@/lib/data";

export default function JourneyCard() {
  return (
    <>
      {/* Mobile — vertical timeline */}
      <div className="md:hidden">
        {
          cardText.map((text) => (
            <div
              key={text.year}
              className="relative pl-12 mb-8 last:mb-0"
            >
              <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-3.75 top-6 -bottom-8 w-0.5 bg-primary/20 last:hidden" />

              <div className="rounded-2xl shadow-soft p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/20 p-2 transition-transform duration-300">
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
      </div>

      {/* Tablet / Desktop — horizontal timeline, scrollable */}
      <div className="hidden md:block relative">
        <div
          className="overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative flex w-max items-start gap-4 px-1 lg:gap-6">
            <div className="absolute left-0 right-0 top-2 h-0.5 bg-primary/20" />

            {
              cardText.map((text) => (
                <div
                  key={text.year}
                  className="relative z-10 flex w-56 shrink-0 flex-col items-center text-center lg:w-64"
                >
                  <div className="mb-4 h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" />

                  <div className="w-full rounded-2xl shadow-soft p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald">
                    <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-primary/20 p-2 transition-transform duration-300">
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
          </div>
        </div>
      </div>
    </>
  )
}