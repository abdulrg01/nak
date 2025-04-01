"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Clara() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#1e2132] relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="max-w-5xl mx-auto pt-6 md:pt-5 px-4 flex justify-between items-center relative z-50"
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-white text-xl md:text-3xl font-light tracking-wider"
        >
          <span className="font-bold">LEGACY</span> FOUNDATION
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="hidden md:flex space-x-8"
        >
          <Link
            href="#"
            className="text-[#d4af37] hover:text-[#d4af37]/80 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-white/80 transition-colors"
          >
            Biography
          </Link>
          <Link
            href="#initiatives"
            className="text-white hover:text-white/80 transition-colors"
          >
            Initiatives
          </Link>
          <Link
            href="#gallery"
            className="text-white hover:text-white/80 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-white/80 transition-colors"
          >
            Contact
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-[#1e2132] z-40 pt-24 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-6 items-center">
            <Link
              href="#"
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
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center relative z-10">
        <motion.div
          className="max-w-xl text-center md:text-left mb-12 md:mb-0"
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
        >
          {/* Intro Text */}
          <span className="text-4xl mb-1">👋</span>
          <motion.h2
            className="text-white text-base md:text-xl lg:text-4xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hello there! I&apos;m <span className="text-[#d4af37]">CIROMA CLARA</span>
          </motion.h2>

          <motion.h1
            className="text-white text-sm font-light mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Empowering Communities <br />
            <span className="font-bold text-4xl md:text-5xl">Transforming Lives</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Dedicated to creating positive change through education, healthcare,
            and community development initiatives.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative"
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
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#d4af37]/20">
            <Image
              src="/clara.png"
              alt="First Lady Portrait"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-[#d4af37]/30"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      </main>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-[#d4af37]/5"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-[#d4af37]/5"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[15%] w-20 h-20 rounded-full bg-[#d4af37]/5"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Wave Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
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
