'use client'
import Link from "next/link";
import { Home, Info, Briefcase, Mail } from 'lucide-react';
import { useState } from "react";

export default function NavBar() {
    const [hover, setHover] = useState("");

    return (
        <div className="md:grid px-20 flex justify-center lg:grid px-auto lg:grid-cols-1 md:grid-cols-1 font-mono lg:bg-transparent md:bg-transparent bg-black font-bold text-lg md:w-44 lg:w-44 gap-y-8 lg:px-4 md:px-4 py-4 z-50 gap-x-4">
            <Link className="flex items-center w-full md:justify-between lg:justify-between justify-center" href="/">
                <span className={`transition-opacity mx-auto duration-300 ${hover === 'home' ? 'opacity-100' : 'opacity-0'} md:block lg:block hidden`}>Home</span>
                <div
                    className="rounded-full opacity-100 bg-white hover:bg-slate-400 p-2"
                    onMouseEnter={() => setHover('home')}
                    onMouseLeave={() => setHover('')}
                >
                    <Home size={34} color={'blue'} />
                </div>
            </Link>
            <Link className="flex items-center w-full md:justify-between lg:justify-between justify-center" href="/about">
                <span className={`transition-opacity mx-auto duration-300 ${hover === 'about' ? 'opacity-100' : 'opacity-0'} md:block lg:block hidden`}>About</span>
                <div
                    className="rounded-full opacity-100 bg-white hover:bg-slate-400 p-2"
                    onMouseEnter={() => setHover('about')}
                    onMouseLeave={() => setHover('')}
                >
                    <Info size={34} color={'blue'} />
                </div>
            </Link>
            <Link className="flex items-center w-full md:justify-between lg:justify-between justify-center" href="/projects">
                <span className={`transition-opacity duration-300 ${hover === 'projects' ? 'opacity-100' : 'opacity-0'} md:block lg:block hidden`}>Projects</span>
                <div
                    className="rounded-full opacity-100 bg-white hover:bg-slate-400 p-2"
                    onMouseEnter={() => setHover('projects')}
                    onMouseLeave={() => setHover('')}
                >
                    <Briefcase size={34} color={'blue'} />
                </div>
            </Link>
            <Link className="flex items-center w-full md:justify-between lg:justify-between justify-center" href="/contact">
                <span className={`transition-opacity duration-300 ${hover === 'contact' ? 'opacity-100' : 'opacity-0'} md:block lg:block hidden`}>Contact</span>
                <div
                    className="rounded-full opacity-100 bg-white hover:bg-slate-400 p-2"
                    onMouseEnter={() => setHover('contact')}
                    onMouseLeave={() => setHover('')}
                >
                    <Mail size={34} color={'blue'} />
                </div>
            </Link>
        </div>
    );
}
