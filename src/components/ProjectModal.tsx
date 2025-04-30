import { useModalStore } from "../store/modalStore";

export default function ProjectModal() {
    const {isOpen, videoSrc, closeModal} = useModalStore();

    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl shadow-lg max-w-7xl w-full relative">
                <button onClick={closeModal} className="z-10 absolute top-2 right-4 text-2xl text-gray-500 hover:text-black">
                    &times;
                </button>
                <video src={videoSrc} controls className="w-full rounded" autoPlay muted playsInline></video>
            </div>
        </div>
    )
}