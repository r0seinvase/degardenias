import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (

    <nav className="navigation">
      <div className="navbargrid">
        {/* <ul className="navigation__list navigation__list--inline"> */}
        <Link to="/" className="navlink">
          De Gardenias
        </Link>
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
        {/* </ul> */}
      </div>
    </nav>
  );
}

export default NavBar;