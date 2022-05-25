import './NavBarTwo.css'
import { Link } from "react-router-dom";
// import LoginModal from "react-login-modal";
import { FaBarcode, FaUser } from 'react-icons/fa';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// class Example extends Component {
//   handleSignup = (username, email, password) => {};
//   handleLogin = (username, password) => {}

function NavBarTwo() {
  return (

    <nav className="navigation">
      <ul className="navigation-title">
        <Link to="/" className="navlink">
          <h1 className="degardenias"> De Gardenias </h1>
        </Link>
        </ul>
        <div className="icons">
        <Link to="/login" className="navlink">
          <h1 style={{ color: 'white' }}><FaUser /> </h1>
        </Link>
        <Link to="/checkout" className="navlink">
          <h1 style={{ color: 'white' }}> <FaBarcode /> </h1>
        </Link>
      </div>
    </nav >
  );
}

export default NavBarTwo;