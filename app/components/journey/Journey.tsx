import JourneyCard from "./JourneyCard"

export default function Journey() {
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">My Journey</h1>
        <p className="text-base font-semibold">My path as a developer</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <JourneyCard />
      </div>

    </section>
  )
}