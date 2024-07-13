import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AboutPage() {
    return (
        <div className="px-20 py-10 bg-black text-white">
            <section className="text-center px-32">
                <h1 className="text-6xl font-bold mb-8">
                    ABOUT <span className="text-blue-800">ME</span>
                </h1>
                <h2 className="text-3xl font-semibold mb-6">
                    Get to <span className="text-blue-800">Know</span> me
                </h2>
                <div className="px-10 font-mono text-xl">
                    I am Aman Pal, a dedicated and proficient full-stack web developer currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Ajay Kumar Garg Engineering College, Ghaziabad. With expertise in front-end development using technologies like Next.js, React.js, and Tailwind CSS, coupled with backend proficiency in Node.js, Express, and MongoDB, I specialize in creating responsive and dynamic web applications. My project portfolio includes impactful creations such as College Insight, Weather App, Authapp, and Portfolios, where I integrate advanced animating libraries like Shadcn and Accertinity to enhance user interfaces.

                    <div className="font-mono text-xl my-8">
                        Beyond my technical acumen, I am passionate about basketball, serving as Captain and achieving notable success at AKTU Zonals and as a State Runner-up. I am driven by a curiosity for innovative solutions and a commitment to enhancing user experiences. I am eager to bring my skills and enthusiasm to a forward-thinking tech company, where I can contribute to building cutting-edge web applications and solutions.
                    </div>
                </div>
            </section>
            <section className="text-center mt-20">
                <h1 className="text-6xl font-bold my-6">
                    MY <span className="text-blue-800">SKILLS</span>
                </h1>
                <div className="my-5 mb-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-blue-800">Front-end</span> Tools
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <img src="/path/to/html5-logo.png" alt="HTML5 logo" className="w-20 h-20" />
                        <img src="/path/to/css3-logo.png" alt="CSS3 logo" className="w-20 h-20" />
                        <img src="/path/to/javascript-logo.png" alt="JavaScript logo" className="w-20 h-20" />
                    </div>
                </div>
                <div className="my-5 mb-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-blue-800">Back-end</span> Tools
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <img src="/path/to/nodejs-logo.png" alt="Node.js logo" className="w-20 h-20" />
                        <img src="/path/to/express-logo.png" alt="Express logo" className="w-20 h-20" />
                        <img src="/path/to/mongodb-logo.png" alt="MongoDB logo" className="w-20 h-20" />
                    </div>
                </div>
            </section>
            <BackgroundBeams />
        </div>
    );
}