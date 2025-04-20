import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
}

export default function SkillCard({ name, icon: Icon, color}: SkillCardProps) {
    return (
        <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center flex items-center">
            <Icon className={`text-4xl ${color} mb-2 ml-14`}/>
            <p className="text-lg font-semibold text-gray-700 ml-10">{name}</p>
        </div>
    )
}