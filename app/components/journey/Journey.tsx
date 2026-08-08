import JourneyCard from "./JourneyCard"

export default function Journey() {
  return (
    <section 
      id="journey"
      className="mt-10"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">My Journey</h1>
        <p className="text-base font-semibold">My path as a developer</p>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center">
        <JourneyCard />
      </div>

    </section>
  )
}