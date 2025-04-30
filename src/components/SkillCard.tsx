import { IconType } from "react-icons";

interface SkillCardProps {
    name: string;
    icon: IconType;
    color: string;
}

export default function SkillCard({ name, icon: Icon, color }: SkillCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 hover:shadow-md text-center flex items-center">
            <Icon className={`text-4xl ${color} mb-2 ml-14`} />
            <p className="text-lg font-semibold text-gray-700 ml-10">{name}</p>
        </div>

    )
}