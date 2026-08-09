import Link from "next/link";
import { Button } from "../ui";
import { ArrowUpRight, Download } from 'lucide-react';

export default function HeroCta() {
  return (
    <div className='flex items-center gap-2'>
      <Link
        href='#projects'
        className='inline-flex items-center gap-4 bg-primary border border-primary text-white rounded-2xl py-2 px-3 hover:bg-background hover:text-primary transition-all duration-300'
      >
        View my work
        <ArrowUpRight className='h-4 w-4' />
      </Link>

      <Link
        href='/Abdulganiy-Ibrahim-CV.pdf'
        download='Abdulganiy-Ibrahim-CV.pdf'
        className='inline-flex items-center gap-4 bg-background text-primary border border-primary rounded-2xl py-2 px-3 hover:bg-primary hover:text-white hover:shadow-emerald transition-all duration-300'
      >
        Download CV
        <Download className='h-4 w-4' />
      </Link>
    </div>
  )
}