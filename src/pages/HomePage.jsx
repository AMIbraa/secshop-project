import { Col, Container, Row } from "react-bootstrap";
import "../distStyle/css/Header.css";
import head_rightImg from "../../public/holding-phone.png";

import Card from "../components/Card";
import CardPromo from "../components/CardPromo";

import sm from "../../public/samsungs23.jpg";
import ip14 from "../../public/iphone14.jpg";
import ip15 from "../../public/iphone15.jpg";

const HomePage = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <span className="head_subtle">
                Technology at Your Fingertips:
              </span>
              <div className="w-75 mt-2 head_title">
                <h1>Find your dream</h1>
                <h1 className="">Smartphone</h1>
                <h1>
                  only on <span className="secshop">SecShop</span>
                </h1>
                <h1>100% Trusted!</h1>
              </div>
              <p className="head_text">
                Discover the best experience in the world of technology with the
                latest cellphone collection in our shop! Visit our shop
                immediately and get special offers and attractive discounts.
              </p>
              {/* <div className="d-flex justify-content-between align-items-start w-50 mt-4"></div> --> ini dipake kalo ada 2 btn */}
              <button className="header_button btn">Find out!</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="img_container d-fl">
                <img
                  src={head_rightImg}
                  alt="header_image"
                  className="head_rightImg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5"></div>
          <div className="col-4">
            <Card
              image={sm}
              name="Samsung Galaxy S23"
              text="Starting from IDR 583,292/month 0% interest for 24 months or IDR 13,999,000"
            />
          </div>
          <div className="col-4">
            <Card
              image={ip14}
              name="iPhone 14"
              text="With the most powerful dual camera system on iPhone. Take stunning photos in both low and bright lighting."
            />
          </div>
          <div className="col-4">
            <Card
              image={ip15}
              name="iPhone 15"
              text="It's made of titanium and features a groundbreaking A17 Pro chip, customizable Action buttons, and the most reliable iPhone camera system ever."
            />
          </div>
          <CardPromo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
