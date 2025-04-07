"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        {/* Fixed Header */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
        >
          {/* Top Header */}
          <header className="bg-white py-6 px-6 md:px-16 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/nak/nak.jpg"
                  alt="Taunton School Logo"
                  width={50}
                  height={50}
                  className="mr-4 rounded-2xl"
                />
                <div className="flex flex-col">
                  <span className="text-blue-900 text-xl font-semibold tracking-wide">
                    NAK ACADEMY
                  </span>
                  <div className="flex items-center">
                    <div className="mr-2 border-t border-[#56a747] w-10"></div>
                    <span className="text-[#56a747] text-sm tracking-wider">
                      SCHOOL
                    </span>
                    <div className="mx-2 border-t border-[#56a747] w-10"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden px-4">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1 rounded-full text-blue-900 hover:bg-gray-100 transition-colors"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <div
                className={cn(
                  "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300",
                  mobileMenuOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div
                  className={cn(
                    "fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-full text-blue-900 hover:bg-gray-100 transition-colors ml-auto block"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto p-4">
                      <ul className="space-y-6 py-6">
                        <MobileNavItem href="/" label="Home" active />
                        <MobileNavItem href="/about" label="About" />
                        <MobileNavItem href="/services" label="Services" />
                        <MobileNavItem href="/outlets" label="Outlets" />
                        <MobileNavItem href="/media" label="Media" />
                        <MobileNavItem href="/careers" label="Careers" />
                        <MobileNavItem href="/contact" label="Contact" />
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <nav className="hidden lg:flex items-center text-xs space-x-6">
                <div className="relative group">
                  <button className="flex items-center text-blue-900 font-bold">
                    YOUR TAUNTON SCHOOL JOURNEY
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-blue-900 font-bold">
                    DISCOVER TAUNTON SCHOOL
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center text-blue-900 font-bold">
                    ENGAGE WITH TAUNTON SCHOOL
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <Link href="/contact" className="text-blue-900 font-bold">
                  CONTACT US
                </Link>
              </nav>
            </div>
          </header>

          {/* Secondary Navigation */}
          <div
            className={`bg-[#56a747] text-white transition-all duration-500 ${
              scrolled
                ? "max-h-0 opacity-0 overflow-hidden"
                : "max-h-16 opacity-100"
            }`}
          >
            <div className="container mx-auto">
              <nav className="hidden md:flex flex-wrap justify-center font-semibold">
                {[
                  "INTERNATIONAL",
                  "YOUNG LEARNERS",
                  "PRE-GCSE",
                  "1 YEAR GCSE",
                  "2 YEAR GCSE",
                  "PFY & IFY",
                  "IB",
                  "A-LEVELS",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-3 py-4 hover:bg-[#56a747] transition-colors text-xs duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <nav className="md:hidden flex flex-wrap justify-center text-xs">
                {["INTERNATIONAL", "YOUNG LEARNERS", "A-LEVELS", "IB"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="px-3 py-4 hover:bg-[#56a747] transition-colors duration-200"
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
            src="/nak/nak.jpg"
            alt="Luxurious salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#56a747]/80 via-[#56a747]/10 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 md:px-20 px-4 mt-10">
          <div className="max-w-2xl text-white">
            <h2
              className={cn(
                "text-4xl md:text-8xl font-extralight mb-4 transition-all duration-1000 max-w-3xl"
              )}
            >
              Find Your Exceptional
              <div className="w-24 h-1 bg-white mt-4"></div>
            </h2>
            <p
              className={cn(
                "text-lg md:text-xl font-medium max-w-lg transition-all duration-1000 mt-3 mb-10"
              )}
              style={{ transitionDelay: "600ms" }}
            >
              Welcome to Nak Academy. An independent day and boarding school for
              ages 0 – 18. Your Journey
            </p>
            <p
              className={cn(
                "text-white uppercase font-bold text-sm tracking-wider transition-all duration-300 mt-6"
              )}
            >
              Learn More
              <div className="w-24 h-1 bg-white mt-4"></div>
            </p>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 left-4 z-50 bg-white hover:bg-[#56a747] text-black p-4 shadow-lg"
          aria-label="Scroll to top"
        >
          <Plus className="h-7 w-7" />
        </button>
      </section>
    </>
  );
}

function MobileNavItem({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`block text-lg font-medium transition-colors ${
          active ? "text-[#56a747]" : "text-blue-900"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
