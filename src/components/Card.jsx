/* eslint-disable react/prop-types */ // Ini buat props.image
import { Card } from "react-bootstrap";

const CardComp = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <button className="card_button btn">Details</button>
      </Card.Body>
    </Card>
  );
};

/* <Col md={4}>
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
      </Container> */

export default CardComp;
