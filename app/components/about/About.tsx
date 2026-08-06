import AboutImage from "./AboutImage";
import AboutText from './AboutText';

export default function About() {
  return (
    <section
      id="about" 
      className="mt-10 p-2 flex flex-col lg:flex-row justify-between gap-10"
    >
      <div className="hidden lg:flex lg:basis-2/5">
        <AboutImage />
      </div>

      <div className="lg:basis-3/5">
        <AboutText />
      </div>
      
    </section>
  )
}