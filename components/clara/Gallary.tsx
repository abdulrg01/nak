"use client"
import React from "react";
import { motion } from "framer-motion";

function Gallary() {
  return (
    <section id="claragallery" className="flex flex-col items-center bg-white w-full">
      <motion.h1
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
        className="text-4xl text-gray-800 text-center md:text-6xl font-bold mt-[10px] mb-[50px]"
      >
        Our Gallary Approach
      </motion.h1>
      <div className="holsgrid">
        <motion.div
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
          className=" text-gray-700 flex flex-col p-[5%] bg-[#f8f8f8]"
        >
          <img
            className="w-full"
            src="/clara.png"
            alt="personaldev"
          />
          <h2 className="my-[20px] text-2xl font-bold">Personal Development</h2>
          <p>
            Unlock your potential and build meaningful relationships through our
            comprehensive personal growth programs.
          </p>
        </motion.div>
        <motion.div
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
            delay: 0.07,
          }}
          viewport={{
            once: true,
          }}
          className="bg-[#f8f8f8] flex flex-col p-[5%] text-gray-700"
        >
          <img
            className="w-full"
            src="/clara.png"
            alt="financialem"
          />
          <h2 className="my-[20px] text-2xl font-bold">
            Financial Empowerment
          </h2>
          <p>
            Secure your future with smart investments and growth strategies
            tailored to your unique financial situation.
          </p>
        </motion.div>
        <motion.div
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
            delay: 0.07 * 2,
          }}
          viewport={{
            once: true,
          }}
          className="text-gray-700 flex flex-col p-[5%] bg-[#f8f8f8]"
        >
          <img
            className="w-full"
            src="/clara.png"
            alt="personaldev"
          />
          <h2 className="my-[20px] text-2xl font-bold">
            Professional Excellence
          </h2>
          <p>
            Advance your career with tailored skills and strategies designed to
            help you excel in your chosen field.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallary;
