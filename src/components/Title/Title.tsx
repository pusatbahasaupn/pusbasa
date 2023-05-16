interface ITitle {
  sub: string;
  title: string;
}

export default function Title({ sub, title }: ITitle) {
  return (
    <div className="my-10">
      <div className="uppercase text-primary font-semibold text-xl">{sub}</div>
      <div className="text-4xl font-semibold">{title}</div>
    </div>
  );
}
