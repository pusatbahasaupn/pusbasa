import Hero from "../components/Hero/Hero";
import News from "../components/News/News";
import Service from "../components/Service/Service";
import Faq from "../components/Faq/Faq";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Service />
      <News />
      <Faq />
    </div>
  );
}
