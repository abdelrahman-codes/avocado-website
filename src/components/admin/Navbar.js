import { NavLink, Link } from "react-router-dom";
import logoPic from '../../assets/logo.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{backgroundColor:"#699635"}}>
            <div className="container">
                <Link className="nav-link" to="/">
                    <img src={logoPic} alt="Avocado-logo" />
                    Avocado
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-3 mb-2 mb-lg-0 w-100 d-flex justify-content-between">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/admin/contacts">طلبات التواصل</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/admin/templates">نماذج الشركات</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/admin/company-requests">طلبات انشاء الشركات</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to="/admin/main-dashboard">
                                <MoreHorizIcon style={{ fontSize: "30px" }} />
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>

            </div>
        </nav>

    )

}

export default Navbar;
