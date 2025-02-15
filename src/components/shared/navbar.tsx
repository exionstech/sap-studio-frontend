import React from "react";
import Logo from "./logo";
import NavItems from "./nav-items";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 z-10 shadow-sm w-full bg-[#F9FBF4]">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 flex items-center justify-between w-full py-3">
        <Logo />
        <div className="md:flex hidden">
          <NavItems />
        </div>
        <Link
          href={"/"}
          className="text-white font-medium bg-green4 rounded-md py-2 px-6 md:flex w-fit items-center hidden"
        >
          Shop Now
          
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
