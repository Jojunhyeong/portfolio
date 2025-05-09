import SkillCard from "../components/SkillCard";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiGithub, SiJira, SiConfluence
} from "react-icons/si";

export default function TechStack() {
    const frontend = [
        {name: 'HTML5', icon: SiHtml5 ,color: "text-orange-500"},
        {name: 'CSS3', icon: SiCss3, color: "text-blue-500"},
        {name: 'JavaScript', icon: SiJavascript, color: "text-yellow-400"},
        {name: 'TypeScript', icon: SiTypescript, color: "text-blue-600"},
        {name: 'React', icon: SiReact, color: "text-sky-500"},
        {name: 'Next.js', icon: SiNextdotjs, color: "text-gray-800"},
        {name: 'Tailwind CSS', icon: SiTailwindcss, color: "text-cyan-400"},
    ];
    const tools = [{
        name: 'GitHub',
        icon: SiGithub,
        color: "text-blue-500",
    }, {
        name: 'JIRA',
        icon: SiJira,
        color: "text-blue-500",
    }, {
        name: 'Confluence',
        icon: SiConfluence,
        color: "text-blue-500",
    }];

    return(
        <section id="tech" className="scroll-mt-16 w-full bg-gray-50  py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">기술 스택</h2>
            <h3 className="text-2xl md:text-xl font-semibold text-gray-600 mb-12 text-center">다양한 프론트엔드 기술을 활용하여 사용자 친화적인 웹 애플리케이션을 개발합니다.</h3>

            <div className="max-w-5xl mx-auto mb-16">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">Frontend</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {frontend.map((item, idx) => (
                        <SkillCard key={idx} name={item.name} icon={item.icon} color={item.color}/>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">협업 툴</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {tools.map((item, idx) => (
                        <SkillCard key={idx} name={item.name} icon={item.icon} color={item.color} />
                    ))}
                </div>
            </div>
        </section>
    )
}