import { Card } from "react-bootstrap";
import smfe from "../../public/smfe.jpg";

const CardPromo = () => {
  return (
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
  );
};

export default CardPromo;
