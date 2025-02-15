import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
    className?: string
}

const Logo = (
    { className }: LogoProps
) => {
  return (
    <Link href={"/"} className={cn("cursor-pointer select-none", className)}>
        <Image
            src="/logo.svg"
            alt="logo"
            width={55}
            height={55}
            className="shrink-0"
        />
    </Link>
  )
}

export default Logo
