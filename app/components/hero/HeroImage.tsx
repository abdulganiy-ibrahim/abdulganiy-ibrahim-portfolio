import Image from 'next/image';
import IbrahimDev from '@/public/ibrahimDev.png';
import { CodeXml, Monitor } from "lucide-react";

export default function HeroImage() {
  return (
    <div className='relative bg-background-hover rounded-2xl shadow-card pt-18 p-6'>
      
      <div className="absolute top-4 right-4 w-50 mb-4 flex items-center justify-center gap-2 shadow-emerald rounded-full p-2">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <p className='text-sm'>
          Available for work
        </p>
      </div>

      <div className='absolute top-10 left-10 w-12 h-12 flex items-center justify-center bg-background-hover rounded-lg border border-background-hover shadow-soft'>
        <CodeXml className='w-8 h-8 bg-background-hover text-primary'/>
      </div>

      <div className='flex items-center justify-center'>
        <Image 
          src={IbrahimDev}
          alt='Ibrahim Dev guy'
          priority
          className='w-50 h-50 object-fill rounded-full shadow-emerald'
        />
      </div>

      <div className="font-mono text-sm leading-8">
        <p>
          <span className="text-gray-600">const</span>{" "}
          <span className="text-blue-500">developer</span>{" "}
          <span>=</span>{" "}
          <span>{"{"}</span>
        </p>

        <p className="pl-6">
          name:
          <span className="text-primary">
            {" "} "Abdulganiy Ibrahim"
          </span>,
        </p>

        <p className="pl-6">
          focus:
          <span className="text-primary">
            {" "} "Full Stack Development"
          </span>,
        </p>

        <p className="pl-6">
          passion:
          <span className="text-primary">
            {" "} "Building products that solve real problems"
          </span>,
        </p>

        <p className="pl-6">
          goal:
          <span className="text-primary">
            {" "} "To build tech that makes impact"
          </span>,
        </p>

        <p>{"};"}</p>
      </div>

      <div className='hidden absolute bottom-40 right-5 w-12 h-12 md:flex items-center justify-center bg-background-hover rounded-lg border border-background-hover shadow-soft'>
        <Monitor className='w-8 h-8 bg-background-hover text-primary'/>
      </div>
      
    </div>
  )
}