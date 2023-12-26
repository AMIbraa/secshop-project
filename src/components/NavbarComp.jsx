import { Nav, Navbar, Container } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import logo from "../../public/secshop-logo.png";
import "../distStyle/css/Navbar.css";

// import { navLinks } from "../data/products";

const NavbarComp = () => {
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
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#categories">Categories</Nav.Link>
                  <Nav.Link href="#catalogue">Catalogue</Nav.Link>
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
