import { BrandLogo, BrandName } from '../brand';
import NavLink from './NavLink';
import Link from 'next/link';
import { MessageCircleMore } from "lucide-react";

export default function DesktopNavbar() {
  return (
    <div className="hidden lg:flex items-center justify-between space-x-10 px-4 py-6 bg-background/70 backdrop-blur-md border border-white/10 shadow-soft rounded-full">
      <div className="flex items-center space-x-2">
        <BrandLogo />
        <BrandName />
      </div>

      <div>
        <NavLink />
      </div>

      <div>
        <Link
          href='#contact'
          className="flex items-center gap-2 py-2 px-4 rounded-full font-semibold shadow-emerald hover:shadow-card transition-all duration-300"
        >
          Let's talk
          <MessageCircleMore className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}