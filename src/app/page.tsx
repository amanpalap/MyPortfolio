"use client";
import { GlobeDemo } from "@/modules/globe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
    <div className="w-full items-center flex flex-wrap lg:min-h-screen md:min-h-screen bg-black text-white">
      <div className="lg:w-2/5 mt-10 md:mt-0 lg:mt-0 w-full items-center justify-center md:w-2/5">
        <GlobeDemo />
      </div>
      <div className="md:w-3/5 lg:w-3/5 w-full items-center flex flex-wrap justify-between mt-10 md:mt-0 lg:mt-0">
        <div className="md:w-4/5 gap-y-4 lg:w-4/5 w-full lg:px-10 px-5 md:px-10 grid">
          <div>
            <h1 className="w-full font-bold text-center md:text-left lg:text-5xl text-5xl md:text-5xl lg:mb-4 md:mb-4">
              Hi, My Name is <span className="text-blue-500">Aman Pal</span>
            </h1>
          </div>
          <div className="md:w-full lg:w-full flex md:justify-left mx-auto lg:justify-left items-center md:text-left">
            <TypewriterEffectSmooth words={typeWords} />
          </div>
          <div className="w-full font-mono md:flex md:flex-wrap grid md:justify-left mx-auto text-2xl">
            <div className="text-center">I can Develop</div> <FlipWords className="text-blue-500 h-8 flex justify-center items-center text-center font-bold" words={words} /> <div className="text-center">Websites.</div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
