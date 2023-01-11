import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <img src="../png-transparent-diwan-bookstore-logo-publishing-book-angle-text-reading.png" />
        </li>
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
