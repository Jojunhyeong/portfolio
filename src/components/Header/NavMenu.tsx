import { useEffect, useState } from "react";

const menus = [
  { name: "홈", id: "about" },
  { name: "기술스택", id: "tech" },
  { name: "프로젝트", id: "projects" },
  { name: "블로그", id: "blog" },
  { name: "커리어", id: "career" },
  { name: "연락처", id: "contact" },
];

export default function NavMenu() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      for (const menu of menus) {
        const section = document.getElementById(menu.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveId(menu.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기에도 한번 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex gap-6 text-sm text-gray-800 font-semibold">
      {menus.map((menu, idx) => (
        <a
          key={menu.id}
          href={`#${menu.id}`}
          className={`transition-colors duration-300 ${
            activeId === menu.id ? "text-indigo-600 font-semibold" : "text-gray-600"
          }`}
        >
          {menu.name}
        </a>
      ))}
    </nav>
  );
}