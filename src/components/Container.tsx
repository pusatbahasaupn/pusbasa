import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

export default function Container({ children }: Children) {
  return <div className="mx-auto container md:px-20">{children}</div>;
}
