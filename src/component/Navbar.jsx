import { Link } from "react-router-dom";
import "./component-style/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/career">Job Opportunities</Link>
    </nav>
  );
};

export default Navbar;
