import Link from 'next/link';
import { ArrowUpRight, LockIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type UrlProps = {
  LinkUrl: string
}

type GithubBtnProps = UrlProps & {
  status: "public" | "private";
};

export const LiveBtn = ({ LinkUrl }: UrlProps) => {
  return (
    <Link
      href={LinkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className='flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-primary bg-background text-primary hover:bg-primary hover:text-white transition-all duration-300'
    >
      Live Demo 
      <ArrowUpRight className='h-4 w-4' />
    </Link>
  )
}

export const GithubBtn = ({ LinkUrl, status }: GithubBtnProps) => {
  const isPrivate = status === "private";

  if (isPrivate) {
    return (
      <button
        type="button"
        disabled
        title="This repository is private"
        className='flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/30 py-2 px-4 text-white/60'
      >
        <LockIcon className='h-4 w-4' />
        Private
      </button>
    )
  }

  return (
    <Link
      href={LinkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className='flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary border border-primary text-white hover:bg-background hover:text-primary transition-all duration-300'
    >
      <SiGithub className='h-4 w-4' />
      Github
    </Link>
  )
}