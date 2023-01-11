import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  // eslint-disable-next-line
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
