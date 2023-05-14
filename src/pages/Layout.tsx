import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
