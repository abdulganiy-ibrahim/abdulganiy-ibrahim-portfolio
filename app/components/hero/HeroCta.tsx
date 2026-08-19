import Link from "next/link";
import { Button } from "../ui";
import { ArrowUpRight, Eye } from 'lucide-react';

export default function HeroCta() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const el = document.getElementById("projects");

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <Link
        href='#projects'
        onClick={handleClick}
        className='inline-flex items-center gap-4 bg-primary border border-primary text-white rounded-2xl py-2 px-3 hover:bg-background hover:text-primary transition-all duration-300'
      >
        View my work
        <ArrowUpRight className='h-4 w-4' />
      </Link>

      <Link
        href='/Abdulganiy-Ibrahim-CV.pdf'
        target="_blank"
        rel="noopener noreferrer"
        className='inline-flex items-center gap-4 bg-background text-primary border border-primary rounded-2xl py-2 px-3 hover:bg-primary hover:text-white hover:shadow-emerald transition-all duration-300'
      >
        View CV
        <Eye className='h-4 w-4' />
      </Link>
    </div>
  )
}