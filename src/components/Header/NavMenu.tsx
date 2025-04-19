const menus = ['홈', '기술스택', '프로젝트', '블로그', '경력/교육', '연락처'];

export default function NavMenu() {
    return (
        <nav className="hidden md:flex gap-6 text-sm text-gray-800 font-semibold">
            {menus.map((menu, idx) => (
                <a key={idx} 
                 href="#"
                className={`${idx === 0? 'text-indigo-600  font-semibold' : "text-gray-600 font-semibold"}`}>{menu}</a>
            ))}
        </nav>
    )
}