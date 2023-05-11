import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/profiles"}>Profile</Link>
      <Link to={"/programs"}>Program</Link>
      <Link to={"/activities"}>Activities</Link>
    </div>
  );
}
