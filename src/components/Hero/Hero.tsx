import heroPicture from "../../assets/images/hero-image.png";

export default function Hero() {
  return (
    <article className="flex items-center flex-col md:flex-row justify-between my-16 gap-10">
      <div className="hero-text order-2 md:order-none md:w-1/2">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-5xl leading-normal">
          New <span className="text-primary">Language</span>, new <br />{" "}
          <span className="text-primary">oppportunities</span>, new you{" "}
        </h1>
        <p className="mt-4 text-center md:text-left md:text-xl">
          Get access to compact lessons from the experts and connect with a
          community of native speakers to help you master words faster.
        </p>
        <div className="my-4 space-y-5 md:space-x-8 flex md:flex-row flex-col md:items-center">
          <button className="py-3 px-10 font-semibold rounded-md bg-primary text-white">
            Lets Join!
          </button>
          <div className="flex gap-5 justify-center">
            <div className="total-students text-center">
              <p className="font-semibold text-xl">
                100<span className="text-primary">K+</span>
              </p>
              <p className="font-base">Students</p>
            </div>
            <div className="total-classes text-center">
              <p className="font-semibold text-xl">
                20<span className="text-primary">+</span>
              </p>
              <p className="font-base">Students</p>
            </div>
            <div className="total-mentors text-center">
              <p className="font-semibold text-xl">
                24<span className="text-primary">+</span>
              </p>
              <p className="font-base">Mentors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image order-1 md:order-none md:w-1/2">
        <img className="w-full" src={heroPicture} />
      </div>
    </article>
  );
}
