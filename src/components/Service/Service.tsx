import Title from "../Title/Title";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div>
      <Title sub="service we provide" title="👥 • Pelayan yang kami berikan" />
      <div className="flex  gap-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
