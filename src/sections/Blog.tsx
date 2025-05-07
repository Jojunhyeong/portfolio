import BlogCard from "../components/BlogCard";
import { blogs } from "../data.ts/blog";

export default function Blog() {
    return (
        <section id="blog" className="scroll-mt-16 w-full py-20 px-6 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">블로그</h2>
            <h3 className="text-lg md:text-lg font-normal text-gray-600 mb-12 text-center">
                개발 경험과 기술적 인사이트를 공유합니다.
            </h3>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog, idx) => (
                    <BlogCard key={idx} {...blog} />
                ))}
                <a
                    href="https://velog.io/@jojh0323/posts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-400 font-bold text-xl hover:text-gray-600 text-center mt-36" 
    
                >
                    → 더 많은 글 보러가기
                </a>
            </div>


        </section>

    )

}