import Link from 'next/link';
import { navLinks as Links } from '@/lib/data';

export default function NavLink() {

  return (
    <div className="flex items-center space-x-4">
      {Links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-primary hover:border-b-2 hover:border-primary hover:text-secondary transition-all duration-300">
          {link.label}
        </Link>
      ))}
    </div>
  )
}