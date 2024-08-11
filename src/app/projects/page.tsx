import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";


export default function HeroParallaxDemo() {

    const products = [
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: "/1.png",
        },
        {
            title: "Green Grocers",
            link: "https://greengrocerss.netlify.app/",
            thumbnail: "/grocers.png",
        },
        {
            title: "Weather-App",
            link: "https://customweatherappresponsive.netlify.app/",
            thumbnail: "/2.png",
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: "/3.png",
        },
        {
            title: "Todos",
            link: "https://todosapicomponent.netlify.app/",
            thumbnail: "/todo.png",
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: "/3.png",
        },
        {
            title: "Todos",
            link: "https://todosapicomponent.netlify.app/",
            thumbnail: "/todo.png",
        },
        {
            title: "College Insight",
            link: "https://collegeinsights.netlify.app/",
            thumbnail: "/collegeInsight.png",
        },
        {
            title: "Green Grocers",
            link: "https://greengrocerss.netlify.app/",
            thumbnail: "/grocers.png",
        },
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: "/1.png",
        },
        {
            title: "Green Grocers",
            link: "https://greengrocerss.netlify.app/",
            thumbnail: "/grocers.png",
        },
        {
            title: "Fyle",
            link: "https://fyle-jade.vercel.app/",
            thumbnail: "/3.png",
        },
        {
            title: "Nerozen",
            link: "https://nerozen.netlify.app/",
            thumbnail: "/1.png",
        },

    ];


    return <HeroParallax products={products} />;
}



