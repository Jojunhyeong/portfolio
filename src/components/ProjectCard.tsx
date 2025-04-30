import { useModalStore } from "../store/modalStore";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  thumbnail?: string;
  videoSrc?: string;
}

export default function ProjectCard({ title, description, techStack, link, thumbnail, videoSrc }: ProjectCardProps) {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div
      onClick={() => videoSrc && openModal(videoSrc)}
      className="relative group bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col gap-4 h-full transform transition-transform duration-200 hover:-translate-y-1"
    >
      {thumbnail && (
        <>
          <img
            src={thumbnail}
            alt={`${title} 썸네일`}
            className="w-full h-40 object-contain mb-4 rounded-md z-10 transition-opacity duration-300 group-hover:opacity-0"
          />
          {videoSrc && (
            <video
              src={videoSrc}
              muted
              playsInline
              className="w-full h-40 object-contain mb-4 rounded-md absolute top-6 right-2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              onMouseEnter={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime > 5) {
                  e.currentTarget.pause();
                }
              }}
            />
          )}
        </>
      )}

      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((stack) => (
          <span
            key={stack}
            className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded"
          >
            {stack}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 hover:underline mt-auto"
        >
          GitHub
        </a>
      )}
    </div>
  );
}
