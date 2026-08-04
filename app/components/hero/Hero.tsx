import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full mt-20 flex flex-col items-start justify-center lg:flex-row lg:justify-between gap-20 p-10"
    >
      <div className="w-150">
        <HeroText />
      </div>


      <div className="mt-5 w-130">
        <HeroImage />
      </div>
      
    </section>
  )
}