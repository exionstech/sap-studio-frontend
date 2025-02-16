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
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Approach",
    href: "/our-approach",
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
      <div className="flex flex-col md:flex-row gap-10 md:justify-between py-10 bg-white w-full rounded-lg p-10">
        <div className="w-full md:w-[50%] flex flex-col gap-5 justify-center">
          <Logo />
          <div className="flex gap-3 items-center">
            <Facebook className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            <Twitter className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            <Linkedin className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
            <Instagram className="bg-green2 text-green4 p-1 rounded-full h-7 w-7" />
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col md:flex-row gap-10 justify-end">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-green4 font-medium">Navigation</h1>
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} className="text-gray1">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-green4 font-medium">Navigation</h1>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <Phone className="text-green4 w-5 h-5" />
                <a href="tel:+91 9876543210" className="text-gray1">
                 : +91 9876543210
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <Mail className="text-green4 w-5 h-5" />
                <a
                  href="mailto:mailto:info@sapsymphony.in"
                  className="text-gray1"
                >
                  : info@sapsymphony.in
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <MapPin className="text-green4 w-5 h-5" />
                <a
                  href="123 Greenway Blvd, EcoCity, EC 45678"
                  className="text-gray1"
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
