import { Card } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import sm from "../../public/samsungs23.jpg";
import smfe from "../../public/smfe.jpg";
import ip14 from "../../public/iphone14.jpg";
import ip15 from "../../public/iphone15.jpg";

const CardComp = () => {
  return (
    <div className="card_container mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div className="">
                  <Card>
                    <img src={sm} alt="Samsung S23" className="card_img" />
                    <Card.Body>
                      <Card.Title>Samsung Galaxy S23</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </Card.Text>
                      <button className="card_button btn">Details</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div className="">
                  <Card>
                    <img src={ip14} alt="iPhone 14" className="card_img" />
                    <Card.Body>
                      <Card.Title>iPhone 14</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </Card.Text>
                      <button className="card_button btn">Details</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div className="">
                  <Card>
                    <img src={ip15} alt="iPhone 15" className="card_img" />
                    <Card.Body>
                      <Card.Title>iPhone 15</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </Card.Text>
                      <button className="card_button btn">Details</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="promo_container">
        <Card className="text-center card_promo mt-5">
          <Card.Header>Special Promo</Card.Header>
          <Card.Img variant="top" src={smfe} />
          <Card.Body>
            <Card.Title>Cashback</Card.Title>
            <Card.Text>
              Extra Cashback up to 1 mio on certain products <br />
              *Terms & Conditions apply
            </Card.Text>
            <button className="card_button btn">Go somewhere</button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default CardComp;
