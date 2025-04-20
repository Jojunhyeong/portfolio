interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    thumbnail?: string;
}

export default function ProjectCard({ title, description, techStack, link, thumbnail }: ProjectCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col gap-4 h-full transform transition-transform duration-200 hover:-translate-y-1">
            {thumbnail && (
                <img src={thumbnail} alt={`${title} 썸네일`} className="w-full h-40 object-contain mb-4 rounded-md" />)}
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2">
                {
                    techStack.map((stack) => (
                        <span
                            key={stack}
                            className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded"
                        >{stack}</span>
                    ))
                }
            </div>
            {link && (
                <a href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline mt-auto">GitHub</a>
            )}
        </div>
    )
}