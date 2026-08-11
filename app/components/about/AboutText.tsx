import AboutCard from "./AboutCard";

export default function AboutText() {
  return (
    <>
      <p className="text-sm text-primary font-semibold">About me</p>

      <div className="space-y-4 mt-2">
        <h1 className="text-4xl xl:text-5xl font-bold font-heading">I Build With Understanding, Not Assumptions</h1>

        <p className="text-sm xl:text-lg text-gray-600">
          I believe great software starts with understanding, not just implementation. When I learn something new, I'm not satisfied until I know why it works, how it fits into the bigger picture, and the trade-offs behind every decision. Whether I'm designing an interface, structuring a backend, or working with databases, I approach every project with curiosity and intention. For me, writing code isn't just about solving today's problem, it's about building knowledge that helps me create better software tomorrow.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <AboutCard />
      </div>
    
    </>
  )
}