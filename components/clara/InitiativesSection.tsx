"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Users,
  Droplet,
  Lightbulb,
  Globe,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function InitiativesSection() {
  const initiatives = [
    {
      title: "Education For All",
      description:
        "Providing scholarships and educational resources to underprivileged children across the nation.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Women's Empowerment",
      description:
        "Supporting women through skills training, microfinance, and leadership development programs.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      title: "Healthcare Access",
      description:
        "Improving access to quality healthcare services in rural and underserved communities.",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-500",
    },
    {
      title: "Clean Water Initiative",
      description:
        "Providing clean water solutions and sanitation education to communities in need.",
      icon: <Droplet className="h-6 w-6" />,
      color: "bg-cyan-500",
    },
    {
      title: "Youth Leadership",
      description:
        "Mentoring the next generation of leaders through workshops and development programs.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-amber-500",
    },
    {
      title: "Cultural Heritage",
      description:
        "Preserving and promoting our rich cultural heritage for future generations.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-emerald-500",
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Initiatives" subtitle="Making a Difference" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
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
              <div className={`h-2 ${initiative.color}`}></div>
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div
                    className={`h-12 w-12 rounded-full ${initiative.color} bg-opacity-20 flex items-center justify-center text-${initiative.color.split("-")[1]}-500`}
                  >
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4">{initiative.title}</h3>
                </div>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
