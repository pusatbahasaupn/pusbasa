import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Program from "../pages/Program";
import Activities from "../pages/Activities";

export default function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profiles" element={<Profile />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/activities" element={<Activities />} />
      </Route>
    </Routes>
  );
}
