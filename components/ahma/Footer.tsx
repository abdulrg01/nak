import { Facebook, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1e2132] text-gray-400 p-7 gap-5 text-sm">
      <ul className="flex md:flex-row flex-col gap-5">
        <li className="hover:text-white">Home</li>
        <li className="hover:text-white">Contact</li>
        <li className="hover:text-white">Gallery</li>
        <li className="hover:text-white">About</li>
      </ul>
      <div className="flex flex-row gap-3">
        <Facebook className="w-5 h-5 hover:text-white" />
        <Twitter className="w-5 h-5 hover:text-white" />
      </div>
      <div className="hover:text-white">C2025 Abdulrahman</div>
    </div>
  );
}
