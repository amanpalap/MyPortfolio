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
                        Hi, My Name is Aman Pal
                    </h1>
                    <div className="w-full">
                        <TypewriterEffectSmooth words={typeWords} />
                    </div>
                    <div className="w-full text-xl">
                        I can Develop <FlipWords className="text-red-500 font-bold" words={words} /> Websites.
                    </div>
                </div>
                <div className="grid grid-cols-1 w-1/5 gap-y-4 px-4 py-4 z-50">
                    <Link className="flex items-center w-full justify-evenly" href="/home">Home</Link>
                    <Link className="flex items-center w-full justify-evenly" href="/about">About</Link>
                    <Link className="flex items-center w-full justify-evenly" href="/projects">Projects</Link>
                    <Link className="flex items-center w-full justify-evenly" href="/contact">Contact</Link>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}