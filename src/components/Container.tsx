import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

export default function Container({ children }: Children) {
  return <div className={`mx-auto container md:px-24 hp:px-0 hp:relative  h-[100vh] overflow-x-hidden`}>{children}</div>;
}
