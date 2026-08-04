import AboutImage from "./AboutImage";
import AboutText from './AboutText';

export default function About() {
  return (
    <section
      id="about" 
      className="mt-10 flex flex-col items-start justify-center lg:flex-row lg:justify-between lg:p-10"
    >
      <div className="hidden lg:block w-110">
        <AboutImage />
      </div>

      <div className="w-150">
        <AboutText />
      </div>
      
    </section>
  )
}