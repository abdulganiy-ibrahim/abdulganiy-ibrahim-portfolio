import Link from "next/link";
import { Button } from "../ui";
import { ArrowUpRight, Download } from 'lucide-react';

export default function HeroCta() {
  return (
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
  )
}