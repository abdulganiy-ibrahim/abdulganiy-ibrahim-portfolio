import { BrandLogo, BrandName } from '../brand';
import NavLink from './NavLink';
import { Button } from '../ui';
import { MessageCircleMore } from "lucide-react";

export default function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center justify-between w-full space-x-10 px-4 py-6 bg-background shadow-soft rounded-full">
      <div className="flex items-center space-x-2">
        <BrandLogo />
        <BrandName />
      </div>

      <div>
        <NavLink />
      </div>

      <div>
        <Button
          className="flex items-center gap-2 rounded-full font-semibold transition-all duration-300"
        >
          Let's talk
          <MessageCircleMore className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}