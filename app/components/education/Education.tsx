import { education } from "@/lib/data/education";
import SectionHeading from "../../components/ui/SectionHeading";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="Education" title="Where I'm studying" />

        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <EducationCard key={item.id} education={item} />
          ))}
        </div>
      </div>
    </section>
  );
}