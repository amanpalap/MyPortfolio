import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import a from "@/images/1.png"
import b from "@/images/2.png"
import c from "@/images/3.png"



export default function HeroParallaxDemo() {

    const products = [
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: a,
        },
        {
            title: "Weather-App",
            link: "https://customweatherappresponsive.netlify.app/",
            thumbnail: b,
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: c,
        },
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: a,
        },
        {
            title: "Weather-App",
            link: "https://customweatherappresponsive.netlify.app/",
            thumbnail: b,
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: c,
        },
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: a,
        },
        {
            title: "Weather-App",
            link: "https://customweatherappresponsive.netlify.app/",
            thumbnail: b,
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: c,
        },
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: a,
        },
        {
            title: "Weather-App",
            link: "https://customweatherappresponsive.netlify.app/",
            thumbnail: b,
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: c,
        },
    ];


    return <HeroParallax products={products} />;
}



