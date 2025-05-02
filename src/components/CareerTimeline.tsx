import { useEffect, useRef, useState } from "react";
import { careerData } from "../data/careerData";

interface CareerItemProps {
  period: string;
  title: string;
  organization: string;
  description: string;
  index: number;
}

function CareerItem({ period, title, organization, description, index }: CareerItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white z-10" />
      <div
        className={`w-96 p-6 bg-white rounded-lg shadow-md transition-all duration-700 ease-out transform
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          ${isLeft ? "ml-10" : "mr-10"}`}
      >
        <p className="bg-indigo-200 text-indigo-950 rounded-xl px-2 w-fit text-sm text-gray-400">{period}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{title}</h3>
        <p className="text-sm text-gray-600">{organization}</p>
        <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
    return (
      <section className="w-full py-20 bg-white flex flex-col items-center relative">
        
        {/* 중앙선 */}
        <div className="absolute top-32 bottom-0 left-1/2 w-[2px] bg-indigo-300 -translate-x-1/2 z-0" />
  
        {/* 카드 */}
        <div className="relative w-full max-w-4xl flex flex-col gap-16 z-10">
            
          {careerData.map((item, index) => (
            <CareerItem key={index} {...item} index={index} />
          ))}
        </div>
      </section>
    );
  }