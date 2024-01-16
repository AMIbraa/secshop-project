import { Nav, Navbar, Container } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import logo from "../../public/secshop-logo.png";
import "../distStyle/css/Navbar.css";

import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

const NavbarComp = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="navbar-name">
            <div className="logo_container">
              <img src={logo} alt="navbar_logo" className="navbar_logo" />
            </div>
          </Navbar.Brand>

          <Form inline>
            <Row>
              <Col xs="auto">
                <Nav className="me-auto">
                  {navLinks.map((link) => {
                    return (
                      <div className="nav-link" key={link.id}>
                        <NavLink
                          to={link.path}
                          //className={([isActive, isPending]) =>
                          //isPending ? "pending" : isActive ? "active" : ""
                          //}
                        >
                          {link.text}
                        </NavLink>
                      </div>
                    );
                  })}
                </Nav>
              </Col>
              <Col xs="auto">
                <button type="submit" className="navbar_button btn">
                  Login
                </button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
