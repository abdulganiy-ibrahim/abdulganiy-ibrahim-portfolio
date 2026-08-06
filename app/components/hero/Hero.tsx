import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mt-10 p-2 flex flex-col lg:flex-row items-start justify-between gap-10"
    >
      <div className="lg:basis-3/5">
        <HeroText />
      </div>

      <div className="lg:basis-2/5 flex justify-center md:mx-auto">
        <HeroImage />
      </div>
      
    </section>
  )
}