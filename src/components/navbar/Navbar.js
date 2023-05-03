import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logoPic from '../../assets/logo.png'
import { set } from "../../slices/languageSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language.value)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{background:"#5E432B"}}>
      <div className="container">
        <Link className="nav-link" style={{color:"#FFFFFF"}} to="/">
          <img src={logoPic} alt="Avocado-logo" />
          Avocado
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/">{language==="E"?"Home":"الرائيسية"}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/register-company"> {language==="E"?"Register Company":"تسجيل شركة"}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/services">{language==="E"?"Other Services":"خدمات اخري"}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2" to="/contact-us">{language==="E"?"Contact Us":"تواصل معنا"}</NavLink>
            </li>
          </ul>
          <div style={{color: "white"}}>
            {language === "E"
              ? <span style={{ cursor: "pointer" }} onClick={() => dispatch(set("A"))}>En</span>
              : <span style={{ cursor: "pointer" }} onClick={() => dispatch(set("E"))}>Ar</span>
            }
          </div>
        </div>

      </div>
    </nav>

  )

}

export default Navbar;