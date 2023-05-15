import heroPicture from '../../assets/images/hero-image.png'

export default function Hero() {
    return (
        <article className="flex my-16">
            <div className="hero-text">
                <h1 className="font-semibold text-4xl">New <span className="text-[#4F7DF3]">Language</span>, new <br /> <span className="text-[#4F7DF3]">oppportunities</span>, new you </h1>
                <p className="mt-4 text-base">Get access to compact lessons from the experts and connect with a community of native speakers to help you master words faster.</p>

                <div className="mt-12 space-x-8 flex items-center">
                    <button className="mr-10 h-10 px-6 font-semibold rounded-md bg-[#4475F2] text-white">Lets Join!</button>
                    <div className="total-students flex-col text-center">
                        <p className="font-semibold">100<span className="text-[#4F7DF3]">K+</span></p>
                        <p className="font-base">Students</p>
                    </div>
                    <div className="total-classes flex-col text-center">
                        <p className="font-semibold">20<span className="text-[#4F7DF3]">+</span></p>
                        <p className="font-base">Students</p>
                    </div>
                    <div className="total-mentors flex-col text-center">
                        <p className="font-semibold">24<span className="text-[#4F7DF3]">+</span></p>
                        <p className="font-base">Mentors</p>
                    </div>
                </div>
               
            </div>
            <div className="hero-image">
                <img src={heroPicture} />
            </div>
        </article>
    )
}