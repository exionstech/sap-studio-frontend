import React from "react";
import Logo from "./logo";
import {
  Facebook,
  Icon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const navigation = [
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

const contact = [
  {
    href: "tel:+91 9876543210",
    icon: Icon,
  },
  {
    href: "mailto:info@sapsymphony.in",
    icon: Mail,
  },
  {
    href: "123 Greenway Blvd, EcoCity, EC 45678",
    icon: MapPin,
  },
];

const Footer = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14">
      <div className="flex flex-col md:flex-row gap-10 md:justify-between py-10 bg-white w-full rounded-lg p-6">
        <div className="w-full md:w-[50%] flex flex-col gap-5 justify-center">
          <Logo />
          <div className="flex gap-3 items-center">
            <Link
              href={
                "https://www.linkedin.com/company/jayma-bio-innovations-private-limited/posts/?feedView=all"
              }
              target="blank"
            >
               <Linkedin className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            </Link>
            <Link
              href={
                "https://www.instagram.com/jaymabioinnovations/"
              }
              target="blank"
            >
               <Instagram className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            </Link>
            <Link
              href={
                "https://x.com/Jaymabio"
              }
              target="blank"
            >
               <Twitter className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col md:flex-row gap-10 justify-end">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-green4 font-medium select-none pointer-events-none">
              Navigation
            </h1>
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-gray1 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-green4 font-medium select-none pointer-events-none">
              Contact Us
            </h1>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <Phone className="text-green4 w-5 h-5" />
                <a href="tel:+91 9876543210" className="text-gray1 text-sm">
                  : +91 9876543210
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <Mail className="text-green4 w-5 h-5" />
                <a
                  href="mailto:mailto:info@sapsymphony.in"
                  className="text-gray1 text-sm"
                >
                  : info@sapsymphony.in
                </a>
              </div>
              <div className="flex gap-1">
                <MapPin className="text-green4 w-5 h-5" />
                <a
                  href="123 Greenway Blvd, EcoCity, EC 45678"
                  className="text-gray1 text-sm"
                >
                  : 123 Greenway Blvd, EcoCity, EC 45678
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
