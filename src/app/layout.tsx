import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";


const larkenDemo = localFont({
  src: "./fonts/larken-demo.ttf",
  variable: "--font-larken-demo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sap Studio",
  description: "Decode Natures Secret Symphony",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${larkenDemo.variable} ${poppins.variable}`}
    >
      <body
        className="font-poppins antialiased w-full h-full min-h-screen scroll-smooth mx-auto"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
