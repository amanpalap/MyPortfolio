"use client";
import { GlobeDemo } from "@/modules/globe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import React from "react";


export default function Home() {
  const typeWords = [
    {
      text: "I am a",
    },
    {
      text: "Full Stack Web Developer.",
      className: "text-blue-500",
    },
  ];
  const words = ["Responsive", "Aesthetic", "Modern"];
  return (
    <div className="w-full max-h-screen pl-8 flex flex-wrap justify-between items-center min-h-screen bg-black text-white">
      <div className="w-2/5">
        <GlobeDemo />
      </div>
      <div className="w-3/5 items-center flex flex-wrap justify-between">
        <div className="w-4/5 px-10 grid">
          <h1 className="w-full font-bold text-5xl mb-4">
            Hi, My Name is <span className="text-blue-500">Aman Pal</span>
          </h1>
          <div className="w-full">
            <TypewriterEffectSmooth words={typeWords} />
          </div>
          <div className="w-full text-xl">
            I can Develop <FlipWords className="text-blue-500 font-bold" words={words} /> Websites.
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}