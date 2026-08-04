import { Button } from '../ui';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';


export default function HeroText() {
  return (
    <div>
      <div className="w-50 mb-4 flex items-center justify-center gap-2 shadow-emerald rounded-full p-2">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        <p>
          Abdulganiy Ibrahim
        </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold font-heading">
          Building scalable web applications with clean code and & <span className="text-primary">great user experiences</span>
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          I buid fast, responsive, and user-friendly web applications that meet your business needs. I specialize in React, Next.js, and Node.js, and I am passionate about creating high-quality software that solves real-world problems.
        </p>
      </div>

      <div className='flex items-center gap-6'>
        <Link
          href='#contact'
          className='inline-flex items-center gap-4 bg-primary shadow-emerald text-white rounded-2xl py-2 px-4 hover:bg-primary-hover'
        >
          View my work
          <ArrowUpRight className='h-4 w-4' />
        </Link>

        <Button
          className='inline-flex items-center gap-4 shadow-soft rounded-2xl py-2 px-4 hover:bg-background-hover hover:shadow-emerald'
        >
          Download CV
          <Download className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}