"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        {/* Fixed Header */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
        >
          {/* Top Header */}
          <header className="bg-white py-4 px-6 md:px-16 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/nak.jpg"
                  alt="Taunton School Logo"
                  width={50}
                  height={50}
                  className="mr-4 rounded-2xl"
                />
                <div className="flex flex-col">
                  <span className="text-[#003366] text-xl font-semibold tracking-wide">
                    NAK ACADEMY
                  </span>
                  <div className="flex items-center">
                    <div className="mr-2 border-t border-red-500 w-10"></div>
                    <span className="text-[#003366] text-sm tracking-wider">
                      SCHOOL
                    </span>
                    <div className="mx-2 border-t border-red-500 w-10"></div>
                  </div>
                </div>
              </div>

              <div className="flex md:hidden">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </div>

              <nav className="hidden lg:flex items-center text-xs space-x-6">
                <div className="relative group">
                  <button className="flex items-center text-[#003366] font-medium">
                    YOUR TAUNTON SCHOOL JOURNEY
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-[#003366] font-medium">
                    DISCOVER TAUNTON SCHOOL
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-[#003366] font-medium">
                    ENGAGE WITH TAUNTON SCHOOL
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <Link href="/contact" className="text-[#003366] font-medium">
                  CONTACT US
                </Link>
              </nav>
            </div>
          </header>

          {/* Secondary Navigation */}
          <div
            className={`bg-[#002855] text-white transition-all duration-500 ${
              scrolled
                ? "max-h-0 opacity-0 overflow-hidden"
                : "max-h-16 opacity-100"
            }`}
          >
            <div className="container mx-auto">
              <nav className="hidden md:flex flex-wrap justify-center text-xs">
                {[
                  "INTERNATIONAL",
                  "HINKLEY POINT FAMILIES",
                  "YOUNG LEARNERS",
                  "PRE-GCSE",
                  "1 YEAR GCSE",
                  "2 YEAR GCSE",
                  "PFY & IFY",
                  "IB",
                  "A-LEVELS",
                  "BTEC",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-3 py-4 hover:bg-[#003366] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <nav className="md:hidden flex flex-wrap justify-center text-xs">
                {["INTERNATIONAL", "HINKLEY POINT FAMILIES"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-3 py-4 hover:bg-[#003366] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/nak.jpg"
            alt="Luxurious salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 px-20 mt-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
              A School for <br /> International <br /> Families
            </h1>
            <Button variant="outline" className="my-10">
              Discover more
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
