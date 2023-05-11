import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Activities from "./pages/Activities";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/activities" element={<Activities />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
