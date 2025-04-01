"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl text-gray-800 font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-4">{subtitle}</p>
      <div className="flex items-center justify-center">
        <div className="h-[1px] w-24 bg-gray-700"></div>
        <div className="h-1 w-12 mx-2 rounded-full bg-[#d4af37]"></div>
        <div className="h-[1px] w-24 bg-gray-700"></div>
      </div>
    </motion.div>
  );
}
