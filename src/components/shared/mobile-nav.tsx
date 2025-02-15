import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignJustify, ArrowRight } from 'lucide-react';
import Logo from './logo';
import Link from 'next/link';
import NavItems from './nav-items';

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
        <AlignJustify className="h-8 w-8 shrink-0" />
      </SheetTrigger>
      <SheetContent className='py-16 flex flex-col gap-14' side={"left"}>
        <div className="flex items-center justify-center">
        <Logo/>
        </div>
        <NavItems/>
        <Link
          href={"/"}
          className="text-white font-medium bg-green4 rounded-md py-2 px-3 flex items-center justify-center"
        >
          Shop Now
          <ArrowRight className="w-6 h-6 ml-2" />
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
