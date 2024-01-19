/* eslint-disable react/prop-types */

import { Card, ListGroup } from "react-bootstrap";

// import { Link } from "react-router-dom";
// import { cardLinks } from "../data/index";

const CardCatalogue = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      {/* {cardLinks.map((link) => {
        return (
          <div className="card-link" key={link.id}>
            <Link>{link.text}</Link>
          </div>
        );
      })} */}
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.list1}</ListGroup.Item>
        <ListGroup.Item>{props.list2}</ListGroup.Item>
        <ListGroup.Item>{props.list3}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button className="card_button btn">Buy now</button>
        <button className="card_button btn">More details</button>
      </Card.Body>
    </Card>
  );
};

export default CardCatalogue;
