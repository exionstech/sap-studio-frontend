import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import CopyRight from "@/components/shared/copy-right";
import { VideoProvider } from "@/components/shared/video-context";

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
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${larkenDemo.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased w-full h-full min-h-screen scroll-smooth mx-auto bg-[#F9FBF4]">
        <VideoProvider>
          <Navbar />
          {children}
          <Footer />
          <CopyRight />
          <Toaster />
        </VideoProvider>
      </body>
    </html>
  );
}
