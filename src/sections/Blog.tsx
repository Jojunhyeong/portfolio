import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blog";
import { LazyMotion, domAnimation, motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, x: -64 },
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
    },
  },
  exit: { opacity: 0.4, x: -90, transition: { duration: 0.35, ease: "easeInOut" } },
};

export default function Blog() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        id="blog"
        className="
          scroll-mt-16 w-full py-20 px-6 bg-gray-50
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
          블로그
        </h2>
        <h3 className="text-lg md:text-lg font-normal text-gray-600 mb-12 text-center">
          개발 경험과 기술적 인사이트를 공유합니다.
        </h3>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        >
          {blogs.map((blog, idx) => (
            <div key={idx}>
              <BlogCard {...blog} />
            </div>
          ))}

          <a
            href="https://velog.io/@jojh0323/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 font-bold text-xl hover:text-gray-600 text-center mt-36"
          >
            → 더 많은 글 보러가기
          </a>
        </motion.div>
      </motion.section>
    </LazyMotion>
  );
}
