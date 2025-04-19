import NavMenu from "./NavMenu"


export default function Header() {
    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-sm px-6 py-4 flex justify-between items-center rounded-b-2xl">
            {/* 좌측: 로고 */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold text-indigo-600">Portfolio</h1>
            </div>
            {/* 가운데: 메뉴 */}
            <div className="flex-1 flex justify-center">
                <NavMenu />
            </div>
            <div className="flex-1"></div>
        </header>
    )
}