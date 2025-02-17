"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Science",
    link: "/",
  },
  {
    name: "Use Cases",
    link: "/use-cases",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavItems = () => {
        const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row items-center lg:gap-10 md:gap-6 gap-5">
        {navItems.map((item) => {
        const active =
          pathname === item.link ||
          (pathname.startsWith(item.link) && item.link !== "/");
        
        return (
          <div key={item.link} className="w-full md:w-auto">
            {/* Desktop Link */}
            <Link
              href={item.link}
              className={cn(
                "text-green4 font-medium md:flex hidden py-1",
                active && "text-green3 border-b-[2px] border-green3"
              )}
            >
              {item.name}
            </Link>
            {/* Mobile Link */}
            <Link
              href={item.link}
              className={cn(
                "text-green4 font-medium md:hidden p-2 rounded-lg flex justify-center items-center w-full bg-green1/40",
                active && "text-green3 border-b-[2px] border-green3 bg-green1"
              )}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
