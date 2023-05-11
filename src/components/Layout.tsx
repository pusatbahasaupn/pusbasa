import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Container from "./Container";
import Footer from "./Footer/Footer";

interface Children {
  children: ReactNode;
}

export default function Layout({ children }: Children) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
