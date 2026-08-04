import AboutCard from "./AboutCard";

export default function AboutText() {
  return (
    <div>
      <p className="text-sm text-primary font-semibold">About me</p>

      <div className="space-y-4 mt-2">
        <h1 className="text-4xl font-bold font-heading">I Build With Understanding, Not Assumptions</h1>

        <p className="text-sm text-gray-600">
          I believe great software starts with understanding, not just implementation. When I learn something new, I'm not satisfied until I know why it works, how it fits into the bigger picture, and the trade-offs behind every decision. Whether I'm designing an interface, structuring a backend, or working with databases, I approach every project with curiosity and intention. For me, writing code isn't just about solving today's problem, it's about building knowledge that helps me create better software tomorrow.
        </p>
      </div>

      <div className="mt-4 flex items-cemter gap-4">
        <AboutCard />
      </div>
    
    </div>
  )
}