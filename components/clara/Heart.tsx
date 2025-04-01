"use client";

import { motion } from "framer-motion";

export default function Heart() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <path d="M19 14c1.49-1.97 2-3.01 2-4.5 0-2.21-1.79-4-4-4-1.5 0-2.81.83-3.5 2.05C12.81 6.33 11.5 5.5 10 5.5c-2.21 0-4 1.79-4 4 0 1.49.51 2.53 2 4.5 1.74 2.31 4 4.5 4 4.5s2.26-2.19 4-4.5z" />
    </motion.svg>
  );
}
