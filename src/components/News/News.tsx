import Title from "../Title/Title";
import NewsCard from "./NewsCard";

export default function News() {
  const articles = [
    {
      imgUrl:
        "https://www.daad.id/files/2022/06/iStock-507009337_864x486px.jpg",
      createdAt: "26 April 2022",
      title: "ELPT Batch 2 Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit varius arcu ornare facilisis. Nullam vulputate tortor quis luctus dapibus. Maecenas vel imperdiet massa, sed pretium ligula...",
    },
    {
      imgUrl:
        "https://www.daad.id/files/2022/06/iStock-507009337_864x486px.jpg",
      createdAt: "26 April 2022",
      title: "ELPT Batch 2 Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit varius arcu ornare facilisis. Nullam vulputate tortor quis luctus dapibus. Maecenas vel imperdiet massa, sed pretium ligula...",
    },
    {
      imgUrl:
        "https://www.daad.id/files/2022/06/iStock-507009337_864x486px.jpg",
      createdAt: "26 April 2022",
      title: "ELPT Batch 2 Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit varius arcu ornare facilisis. Nullam vulputate tortor quis luctus dapibus. Maecenas vel imperdiet massa, sed pretium ligula...",
    },
    {
      imgUrl:
        "https://www.daad.id/files/2022/06/iStock-507009337_864x486px.jpg",
      createdAt: "26 April 2022",
      title: "ELPT Batch 2 Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id velit varius arcu ornare facilisis. Nullam vulputate tortor quis luctus dapibus. Maecenas vel imperdiet massa, sed pretium ligula...",
    },
  ];
  return (
    <>
      <Title
        sub="latest news & articles"
        title="📰 • Berita & artikel terbaru"
      />
      <div className="flex justify-between">
        {articles.map((article, index) => {
          return (
            <>
              <NewsCard
                key={index}
                title={article.title}
                imgUrl={article.imgUrl}
                description={article.description}
                createdAt={article.createdAt}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
