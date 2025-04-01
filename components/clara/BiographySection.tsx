"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Globe, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function BiographySection() {
  const timelineItems = [
    {
      year: "2018-Present",
      title: "Legacy Foundation",
      description: "Founder and Chairperson",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      year: "2015-2019",
      title: "United Nations Women's Council",
      description: "Special Ambassador for Education",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      year: "2010-2015",
      title: "First Lady of the Republic",
      description: "Office of the First Lady",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2005-2010",
      title: "National Commission for Education",
      description: "Board Member",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      year: "1998-2005",
      title: "International Development Agency",
      description: "Regional Director",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <section id="biography" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Biography" subtitle="My Journey of Service" />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 h-full w-[2px] bg-gray-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 z-10">
                    <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <span className="text-sm px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
