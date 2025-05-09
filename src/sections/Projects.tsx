// src/sections/Projects.tsx

import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import chopThumbnail from "/assets/image/thumbnail_chop.png";

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
            
        }
    ];

    return (
        <section id="projects" className="scroll-mt-16 w-full py-20 px-6 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                프로젝트
            </h2>
            <h3 className="text-lg md:text-lg font-normal text-gray-600 mb-12 text-center">
                웹 개발 프로젝트를 통해 실무 경험을 쌓았습니다.
            </h3>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>

            <ProjectModal />
        </section>
    );
}
