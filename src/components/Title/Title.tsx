interface ITitle {
  sub: string;
  title: string;
}

export default function Title({ sub, title }: ITitle) {
  return (
    <div className="my-10">
      <div className="uppercase text-primary font-semibold md:text-xl">
        {sub}
      </div>
      <div className="md:text-4xl text-lg font-semibold">{title}</div>
    </div>
  );
}
