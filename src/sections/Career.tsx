import CareerTimeLine from "../components/CareerTimeline"

export default function Career() {
    return(
        <section id="career" className="w-full py-20 px-6 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                학력 및 활동
            </h2>
            <p className="text-lg md:text-lg font-normal text-gray-600 mb-4 text-center">
                학업, 동아리, 프로젝트를 통해 많은 경험을 쌓았습니다.
            </p>
            <CareerTimeLine/>
        </section>
    )
}