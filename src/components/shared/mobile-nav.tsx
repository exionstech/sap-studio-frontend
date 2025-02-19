"use client";

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { AlignJustify, ArrowRight, X } from 'lucide-react';
import Logo from './logo';
import Link from 'next/link';
import NavItems from './nav-items';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close sheet when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 hover:bg-green1/20 rounded-lg transition-colors">
          <AlignJustify className="h-6 w-6" color="#2C3221" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="flex flex-col w-full max-w-xs bg-white p-6"
      >
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-green1/20 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav className="flex-1">
          <NavItems />
        </nav>

        <div className="mt-auto pt-8">
          <Link
            href={process.env.NEXT_PUBLIC_PRODUCT_DETAILS_LINK as string}
            target='_blank'
            className="w-full text-white font-medium bg-green4 rounded-lg py-3 px-4 flex items-center justify-center hover:bg-green4/90 transition-colors"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;