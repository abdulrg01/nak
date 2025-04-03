"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const slides = [
  {
    image: "/clara.png",
    title: "Pure Joy Capture",
    subtitle: "Dive into beautifully crafted virtual landscapes.",
  },
  {
    image: "/nak.jpg",
    title: "Capturing love",
    subtitle: "Stay tuned for our next big release.",
  },
  {
    image: "/clara.png",
    title: "Happiness in frame",
    subtitle: "Dive into beautifully crafted virtual landscapes.",
  },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goToSlide = (index: any) => setCurrentIndex(index);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className={`w-full h-full bg-center bg-cover bg-no-repeat`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 text-white">
              <motion.h1
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{
                  once: true,
                }}
                className="mb-4 text-4xl flex items-center justify-center text-white md:text-5xl font-light tracking-wide font-serif"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{
                  once: true,
                }}
                className="mb-8 text-lg  lg:text-xl sm:px-16 xl:px-48 text-white flex items-center justify-center md:text-3xl font-light tracking-wide font-serif"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      <div>
        {/* Mobile Menu Button */}
        <button
          className="text-white absolute top-7 left-4 z-40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-950 z-40 pt-10 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-40 md:gap-96">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="flex flex-col space-y-6 pt-20 items-center">
                  <Link
                    href="/clara"
                    className="text-[#d4af37] text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="text-white text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Biography
                  </Link>
                  <Link
                    href="#initiatives"
                    className="text-white text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Initiatives
                  </Link>
                  <Link
                    href="#gallery"
                    className="text-white text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="#contact"
                    className="text-white text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
      <div className="fixed top-7 z-50 inset-0">
        <h1 className="text-xl flex items-center justify-center text-white md:text-3xl font-light tracking-wide font-serif">
          Ciroma Clara
        </h1>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2"
        onClick={() =>
          goToSlide((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2"
        onClick={() => goToSlide((currentIndex + 1) % slides.length)}
      >
        ▶
      </button>

      {/* Wave Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 192L48 202.7C96 213 192 235 288 229.3C384 224 480 192 576 186.7C672 181 768 203 864 213.3C960 224 1056 224 1152 208C1248 192 1344 160 1392 144L1440 128V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V192Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
