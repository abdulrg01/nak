"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  Heart,
  Globe,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message. We will be in touch soon.");
  };

  return (
    <section id="contact" className="py-20 bg-[#1e2132] relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <p className="text-gray-500 mb-4">Let&apos;s Keep in Touch</p>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-24 bg-gray-700"></div>
            <div className="h-1 w-12 mx-2 rounded-full bg-[#d4af37]"></div>
            <div className="h-[1px] w-24 bg-gray-700"></div>
          </div>
        </motion.div>
        <div className="bg-[#1a1c2a] rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
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
              className="p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                Get In Touch <Send className="ml-2 h-5 w-5" />
              </h3>

              <div className="flex space-x-4 mb-8">
                <a
                  href="#"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#d4af37] transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>

              <p className="text-gray-400 mb-8">Send Your Message Here!</p>

              <div className="relative h-48 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#151725] opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-12 w-12 rounded-full bg-[#2a2d42]/50 flex items-center justify-center text-[#d4af37]/70"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        {i % 3 === 0 && <Send size={16} />}
                        {i % 3 === 1 && <Heart size={16} />}
                        {i % 3 === 2 && <Globe size={16} />}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

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
              className="p-8 md:p-12 bg-white"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1e2132] text-white rounded-full hover:bg-[#1e2132]/90 transition-colors flex items-center justify-center"
                >
                  Send <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
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
    </section>
  );
}
