// import React from "react";
import { Dropdown } from "react-bootstrap";

import CardCatalogue from "../components/CardCatalogue";

// import { Link } from "react-router-dom"
// import { cardLinks } from "../data/index"

const CataloguePage = () => {
  return (
    <div>
      <Dropdown className="pt-5">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Bestseller</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Lowest price</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Highest price</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <CardCatalogue
        name="Samsung Galaxy S23 Ultra"
        image=""
        text="awesome"
        list1="ok"
        list2="ok"
        list3="ok"
      />
      {/* 
      - create list of the products
      - create dropdown (sort by lowest price, higher price, etc)
      - create love button (wishlist) - later

       */}
    </div>
  );
};

export default CataloguePage;
