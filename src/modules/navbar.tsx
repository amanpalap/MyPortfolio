import Link from "next/link";
import { Home, Info, Briefcase, Mail } from 'lucide-react';

export default function NavBar() {
    return (
        <div className="grid grid-cols-1 w-32 gap-y-4 px-4 py-4 z-50">
            <Link className="flex items-center w-full justify-between" href="/">
                <span>Home</span> <Home size={24} className="ml-2" />
            </Link>
            <Link className="flex items-center w-full justify-between" href="/about">
                <span>About</span> <Info size={24} className="ml-2" />
            </Link>
            <Link className="flex items-center w-full justify-between" href="/projects">
                <span>Projects</span> <Briefcase size={24} className="ml-2" />
            </Link>
            <Link className="flex items-center w-full justify-between" href="/contact">
                <span>Contact</span> <Mail size={24} className="ml-2" />
            </Link>
        </div>
    );
}
