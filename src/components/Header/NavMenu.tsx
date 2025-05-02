const menus =[
    {name: "홈", id:"about"},
    {name: "기술스택", id:"tech"},
    {name: "프로젝트", id:"projects"},
    {name: "커리어", id:"career"},
    {name: "연락처", id:"contact"},
]
export default function NavMenu() {
    return (
        <nav className="hidden md:flex gap-6 text-sm text-gray-800 font-semibold">
            {menus.map((menu, idx) => (
                <a key={idx} 
                 href={`#${menu.id}`}
                className={`${idx === 0? 'text-indigo-600  font-semibold' : "text-gray-600 font-semibold"}`}>{menu.name}</a>
            ))}
        </nav>
    )
}