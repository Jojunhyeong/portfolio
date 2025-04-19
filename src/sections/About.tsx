import profile from "../assets/profile.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="pt-10 relative w-full h-96 flex justify-center items-start text-left px-6 bg-gradient-to-r from-[#FFFFFF] via-[#F3F0FF] to-[#E0DFFF]">

            <div className="flex flex-col justify-between items-start text-left w-full max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">조준형</h1>
                <p className="mt-4 text-lg text-gray-600">
                    안녕하세요! 사용자 경험을 먼저 생각하는 프론트엔드 개발자를 지향하고 있습니다.
                    <br />대학교 졸업 후 실무 중심의 사이드 프로젝트와 기술 학습을 통해 실력을 쌓고 있으며,
                    <br />협업과 커뮤니케이션을 중시하며 함께 성장하는 개발자가 되고자 합니다.
                </p>
            </div>
            <div className="shrink-0"><img className=" rounded-xl object-cover h-72" src={profile} alt="프로필 사진" /></div>
        </section>
    )
}