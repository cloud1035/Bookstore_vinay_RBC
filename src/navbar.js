import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/finalcart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
