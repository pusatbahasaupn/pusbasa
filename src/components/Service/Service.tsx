import Title from "../Title/Title";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div>
      <Title sub="service we provide" title="👥 • Pelayan yang kami berikan" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
