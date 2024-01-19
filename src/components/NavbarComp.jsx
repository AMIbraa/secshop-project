import { Nav, Navbar, Container } from "react-bootstrap";
// import { Row, Col, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import logo from "../../public/secshop-logo.png";
import "../distStyle/css/Navbar.css";

import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

const NavbarComp = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-name">
            <div className="logo_container">
              <img src={logo} alt="navbar_logo" className="navbar_logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button type="submit" className="navbar-button btn">
                Login
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
