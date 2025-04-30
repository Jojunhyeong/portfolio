interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    link: string;
    thumbnail?: string;
}

export default function BlogCard({ title, description, date, link, thumbnail }: BlogCardProps) {
    return (
        <a
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-lg transition-transform duration-500 hover:-translate-y-2 bg-white hover:text-black"
        >
            {thumbnail ? (
                <img src={thumbnail} alt="title" className="w-full h-56 object-cover"/>
            ): (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image
                </div>
            )}

            <div className=" p-4 flex flex-col gap-2">
                <h3 className="text-lg ">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <p className=" text-xs text-gray-500 ">{date}</p>
            </div>

        </a>
    )
}