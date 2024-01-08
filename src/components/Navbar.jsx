import { NavLink } from "react-router-dom";
import "../assets/Css/Navbar.css";
import { GrGallery } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import { LuSchool } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
// import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-white">
                    <img src="/img/emblemas.png" alt="Logo" className="logo" />
                </NavLink>
                <button
                    className="  navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: "white" }}
                >
                    <span className=" navbar-toggler-icon "></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end align-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active">
                                <LuSchool className="icon text-white" /> Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/noticias" activeClassName="active">
                                <FaRegNewspaper className="icon text-white" />{" "}
                                Noticias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/galeria" activeClassName="active">
                                <GrGallery className="icon text-white" />{" "}
                                Galería
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contacto" activeClassName="active">
                                <IoIosContacts className="icon text-white" />{" "}
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
