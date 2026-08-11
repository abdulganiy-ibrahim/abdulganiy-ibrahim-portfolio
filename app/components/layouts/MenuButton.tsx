'use client';

import { MenuIcon, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { useState } from 'react';
import { BrandLogo, BrandName } from '../brand';
import { navLinks as Links } from '@/lib/data';
import Link from 'next/link';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button
        className="flex items-center justify-center rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </Button>

      {
        isMenuOpen && (
          <>
            <div 
              className='fixed inset-0 bg-black/50 z-50'
              onClick={toggleMenu}
            />

            <aside className='fixed overflow-y-auto bg-background flex flex-col top-0 right-0 min-h-screen w-64 md:w-80 z-50 shadow-soft rounded-l-lg p-4'>
              <div className="flex items-center space-x-2 mb-8">
                <BrandLogo />
                <BrandName />
              </div>

              <nav className="flex flex-col space-y-4">
                {
                  Links.map((link) => (
                    <Link 
                      key={link.href} href={link.href}
                      className="flex items-center justify-between border border-primary/40 text-primary rounded-lg p-2 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))
                }
              </nav>

              <div>
                <Button 
                  className="w-full flex items-center justify-between gap-2 mt-15 bg-danger/80 text-white rounded-lg font-semibold transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Close menu 
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </aside>
          </>
          )
        }
      </>
  );
}
