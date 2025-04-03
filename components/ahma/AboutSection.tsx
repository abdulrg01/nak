"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section id="ahmaabout" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About" subtitle="My Journey & Vision" />

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div
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
              className="relative h-[500px] md:h-auto"
            >
              <Image
                src="/ahma2.png"
                alt="ahamad"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-20 left-10">
                <p className="text-lg lg:text-xl text-white md:text-3xl font-light tracking-wide font-serif border-b border-white pb-2">About</p>
                <h1 className="mt-4 text-4xl text-white md:text-5xl font-light tracking-wide font-serif">The King</h1>
              </div>
            </motion.div>

            <div className="p-8 md:p-12 bg-white text-[#1e2132]">
              <motion.div
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
                className="mb-8"
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  With a background in international relations and humanitarian
                  advocacy, I have dedicated my life to serving communities and
                  creating positive change across our nation and beyond. My
                  passion for education, healthcare, and women&apos;s
                  empowerment has guided my initiatives throughout my public
                  service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As the founder of the Legacy Foundation, I work alongside
                  dedicated teams to implement sustainable programs that address
                  critical needs in underserved communities, with a focus on
                  long-term impact and community empowerment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4">Key Initiatives:</h3>
                <ul className="space-y-3">
                  {[
                    "Educational scholarships for young men",
                    "Rural healthcare accessibility programs",
                    "Economic empowerment initiatives",
                    "Clean water projects in underserved communities",
                    "Youth leadership development programs",
                    "Cultural heritage preservation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-[#d4af37] flex-shrink-0 mt-1 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex space-x-4">
                <Link
                  href="#initiatives"
                  className="px-6 py-3 bg-[#1e2132] text-white rounded-full hover:bg-[#1e2132]/90 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37]/10 transition-colors"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
