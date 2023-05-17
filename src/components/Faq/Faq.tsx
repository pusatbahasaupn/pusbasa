import Title from "../Title/Title";
import FaqItem from "./FaqItem";

export default function Faq() {
  const faqs = [
    {
      question: "Apakah video gratis tersedia ?",
      answered:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos doloremque minima unde nemo tempora impedit possimus saepe temporibus excepturi. Illum obcaecati porro itaque, libero eum nostrum quos, sunt laborum ratione laudantium, doloremque harum unde fuga animi voluptatum eveniet dolorem incidunt. Qui, animi totam! Veniam eos esse cumque. Quam mollitia minus repellat, molestiae laudantium saepe eveniet! Facere inventore hic asperiores doloremque id deserunt tempora sequi esse eum natus? Molestias eum temporibus animi dolorum magnam laudantium eius, obcaecati ipsa tempore reprehenderit, quos corrupti. Fugiat, optio. Animi voluptas voluptatibus voluptate iste rerum incidunt, cupiditate magnam mollitia ratione dolorem labore reiciendis odit temporibus praesentium?",
    },
    {
      question: "Seberapa sering Parsinta upload pelajaran ?",
      answered:
        " Setiap hari akan ada video untuk setiap seri yang masih dalam persiapan, usahakan setiap hari Anda cek konten baru di parsinta. ",
    },
    {
      question: "Bagaimana cara nonton video gratis ?",
      answered:
        " Dari kedua sisi baik gratis mau pun berbayar, Anda tetap harus login jika ingin menonton video. ",
    },
  ];

  return (
    <>
      <Title
        sub="frequently asked question"
        title="🤔 • Pertanyaan yang Sering Diajukan"
      />
      <div>
        <div className="overflow-hidden divide-y border shadow-sm">
          {faqs.map((item, key) => (
            <FaqItem
              question={item.question}
              answer={item.answered}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
}
