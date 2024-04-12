import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
