import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div>
    <input type="checkbox" id="ham-menu"/>
      <label for="ham-menu">
        <div class="hide-des">
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </div>

      </label>
      <div class="full-page-green"></div>
      <div class="ham-menu">
        <ul class="centre-text bold-text">
        <Link to="/shelfdecor" className="navlink">
          Shelf Decore
        </Link>
        <Link to="/tabledecor" className="navlink">
          Table Decore
        </Link>
        <Link to="/kitchen" className="navlink">
          Kitchen
        </Link>
        <Link to="/bedding" className="navlink">
          Bedding
        </Link>
        <Link to="/all" className="navlink">
          All
        </Link>
        <Link to="/about" className="navlink">
          About Us
        </Link>
        <Link to="/checkout" className="navlink">
          Checkout
        </Link>
      </ul>
    </div>
  </div>
  );
}

export default NavBar;