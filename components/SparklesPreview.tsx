"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { cn } from "@/lib/utils";

export function SparklesPreview() {
  return (
    <div className="h-[20rem] w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h2
        className={cn(
          "text-4xl md:text-7xl uppercase text-[#56accb] font-medium tracking-wider mb-4 transition-all duration-1000 max-w-3xl"
        )}
      >
        Welcome to <br /> <span className="text-blue-950">Nak Academy</span>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </h2>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#172554"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
