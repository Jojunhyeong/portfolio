import { FaGithub, FaLinkedin, FaGlobe,} from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function Contact() {
    return (
        <section className="w-full py-20 bg-gray-50 flex flex-col items-center" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📮 연락처</h2>
            <p className="mb-10 text-gray-600">프로젝트 협업이나 채용 문의는 아래 이메일로 연락주세요.</p>

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl flex flex-col gap-6">
                <div >
                    <h3 className="text-lg font-semibold text-gray-800">이메일</h3>
                    <h3 className="text-gray-600 hover:underline">
                        whwnsgud23@naver.com
                    </h3>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800">위치</h3>
                    <p className="text-gray-600">부산광역시 동래구 연안로71</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800">소셜 미디어</h3>
                    <div className="flex gap-4 mt-2 text-2xl text-gray-600">
                        <a href="https://github.com/jojunhyeong" target="_blank" rel="noopener noreferrer" className="text-black"><FaGithub/></a>
                        <a href="https://velog.io/@jojh0323" target="_blank" rel="noreferrer" style={{ color: "#20C997" }}><SiVelog/></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800">이력서</h3>
                    <a href="/resume.pdf"
                    download
                    className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
                        이력서 다운로드
                    </a>
                </div>
            </div>
        </section>
    )
}