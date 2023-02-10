import { NavLink, Link } from "react-router-dom";
import logoPic from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="nav-link" to="/">
          <img src={logoPic} alt="Avocado-logo" />
          Avocado
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/register-company">Register Company</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/services">Other Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
          <div>
          <span>En</span>
        </div>
        </div>
        
      </div>
    </nav>

  )

}

export default Navbar;