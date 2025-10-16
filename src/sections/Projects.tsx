// src/sections/Projects.tsx

import { domAnimation, LazyMotion, motion, Variants } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import chopThumbnail from "/assets/image/thumbnail_chop.png";

const sectionVariants: Variants = {
    hidden: {opacity: 0, x: 64},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 28,
            mass: 0.6,
            bounce: 0.05,
            restDelta: 0.01,
        }
    },
    exit: {opacity: 0.4, x: 90, transition: {duration: 0.35, ease: "easeInOut"}}
}

export default function Projects() {
    const projects = [
        {
            title: "CHOP!",
            description: "온라인 게임 현금거래를 안전하게 중개해주는 서비스",
            techStack: ["React", "TypeScript", "Vite", "Styled-Components", "PWA"],
            link: "https://github.com/buru-no1/burumarket-client",
            thumbnail: chopThumbnail,
            videoSrc: "/assets/video/chop.mp4",
        },
        {
            title: "Portfolio",
            description: "나만의 포트폴리오 웹사이트",
            techStack: ["React", "TypeScript", "Vite", "TailwindCSS"],
            link: "https://github.com/Jojunhyeong/portfolio",
            thumbnail: "/assets/image/portfolio.png",
            videoSrc: "/assets/video/portfolio.mp4",
            
        },
        {
            title: "머니플랜",
            description: "가계부 웹앱",
            techStack: ["React", "Vite", "TailwindCSS", "Zustand", "Supabase"],
            link: "https://github.com/Jojunhyeong/Ledger",
            thumbnail: "/assets/image/money_plan.png",
            videoSrc: "",
            
        }
    ];

    return (
        <LazyMotion features={domAnimation}>
        <motion.section id="projects" className="
        scroll-mt-16 w-full py-20 px-6 bg-white
        transform-gpu will-change-transform
          [content-visibility:auto]  
          [contain:content]  
          "
          variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{
          once: false,
          amount: 0.25,         
          margin: "0px 0px -12% 0px", 
        }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                프로젝트
            </h2>
            <h3 className="text-lg md:text-lg font-normal text-gray-600 mb-12 text-center">
                웹 개발 프로젝트를 통해 실무 경험을 쌓았습니다.
            </h3>

            <motion.div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true, amount: 0.2}}
            transition={{type: "tween", ease: "easeOut", duration: 0.4}}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </motion.div>

            <ProjectModal />
        </motion.section>
        </LazyMotion>
    );
}
