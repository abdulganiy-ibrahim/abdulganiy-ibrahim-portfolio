import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type UrlProps = {
  LinkUrl: string
}

export const LiveBtn = ({ LinkUrl }: UrlProps) => {
  return (
    <Link
      href={LinkUrl}
      className='flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-primary bg-background text-primary hover:bg-primary hover:text-white transition-all duration-300'
    >
      Live Demo 
      <ArrowUpRight className='h-4 w-4' />
    </Link>
  )
}

export const GithubBtn = ({LinkUrl}: UrlProps) => {
  return (
    <Link
      href={LinkUrl}
      className='flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary border border-primary text-white hover:bg-background hover:text-primary tranaition-all duration-300'
    >
      <SiGithub className='h-4 w-4' />
      Github
    </Link>
  )
}