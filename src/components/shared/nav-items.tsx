import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Science",
    link: "/",
  },
  {
    name: "How it works",
    link: "/works",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "FAQs",
    link: "#faqs",
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
          <div key={item.link}>
            {/* Desktop Link */}
            <Link
              href={item.link}
              className={cn(
                "text-green4 font-medium md:flex hidden py-1",
                active && "text-green3 border-[1px] border-green3"
              )}
            >
              {item.name}
            </Link>
            {/* Mobile Link */}
            <Link
              href={item.link}
              className={cn(
                "text-green4 font-medium md:hidden p-2 rounded-lg flex justify-center items-center bg-green1",
                active && "text-green3 border-[1px] border-green3 bg-green-200"
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
