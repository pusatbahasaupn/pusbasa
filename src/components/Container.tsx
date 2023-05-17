import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

export default function Container({ children }: Children) {
  return <div className="mx-auto container px-5 md:px-20">{children}</div>;
}
