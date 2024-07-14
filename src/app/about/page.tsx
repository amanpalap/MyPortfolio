import React from "react";
import Image from "next/image";


const SkillButton = ({ src, alt, label, className, classname }: any) => (
    <button className="relative hover:scale-110 transition-scale duration-200 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex ${className} h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm text-white backdrop-blur-3xl font-mono font-bold`}>
            <Image src={src} width={100} height={100} alt={alt} className={`w-8 ${classname} h-8 m-2`} />{label}
        </span>
    </button>
);

export default function AboutPage() {
    return (
        <div className="px-20 py-10 bg-black text-white">
            <section className="text-center px-32 z-50">
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
            <section className="text-center bg-transparent mt-20">
                <h1 className="text-6xl font-bold my-6 mb-10">
                    MY <span className="text-blue-800">SKILLS</span>
                </h1>
                <div className="my-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-blue-800">Front-end</span> Tools
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <SkillButton className="px-4" src="/html.png" alt="HTML logo" label="HTML" />
                        <SkillButton src="/tailwind.png" classname="h-6 w-9" alt="Tailwind CSS logo" label="Tailwind" />
                        <SkillButton src="/js.png" alt="JavaScript logo" label="JavaScript" />
                        <SkillButton src="/ts.png" alt="TypeScript logo" label="TypeScript" />
                        <SkillButton src="/react.png" alt="React logo" label="React" />
                        <SkillButton src="/next.png" alt="Next.js logo" label="Next.js" />
                        <SkillButton src="/accernity.png" alt="accernity.js logo" label="Accernity" />
                        <SkillButton src="/shadcn.png" classname="invert" alt="shadcn logo" label="Shadcn" />
                    </div>
                </div>
                <div className="my-5 mb-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-blue-800">Back-end</span> Tools
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <SkillButton src="/exp.png" alt="Express.js logo" label="Express" />
                        <SkillButton src="/node.png" alt="Node.js logo" label="Node.js" />
                        <SkillButton src="/mongo.png" classname="w-6" alt="MongoDB logo" label="MongoDB" />
                        <SkillButton src="/post.png" alt="Postman logo" label="Postman" />
                        <SkillButton src="/jwt.png" alt="JWT logo" label="JWT" />
                    </div>
                </div>
                <div className="my-5 mb-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-blue-800">Other</span> Tools
                    </h2>
                    <div className="flex justify-center space-x-4">
                        <SkillButton src="/vercel.png" alt="Vercel logo" label="Vercel" />
                        <SkillButton src="/netlify.png" alt="Netlify logo" label="Netlify" />
                        <SkillButton src="/vs.png" alt="VS Code logo" label="VS Code" />
                        <SkillButton src="/gpt.png" alt="ChatGPT logo" label="ChatGPT" />
                        <SkillButton src="/black.png" alt="Blackbox AI logo" label="Blackbox AI" />
                        <SkillButton src="/git.png" alt="GitHub logo" label="GitHub" />
                    </div>
                </div>
            </section>
        </div>
    );
}