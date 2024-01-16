import { Routes, Route } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import Header from "./components/Header";
// import Carousel from "./components/Carousel";
import Card from "./components/Card";
import CardPromo from "./components/CardPromo";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CataloguePage from "./pages/CataloguePage";

import sm from "./../public/samsungs23.jpg";
import ip14 from "./../public/iphone14.jpg";
import ip15 from "./../public/iphone15.jpg";
// import { useState } from "react";

const App = () => {
  // const res = await fetch("https://dummyjson.com/products");
  // const json = await res.json();
  // console.log(json);

  // const [pages, setPages] = useState("pages");

  return (
    <div>
      <NavbarComp />

      <Header />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/categories" Component={CategoriesPage} />
        <Route path="/catalogue" Component={CataloguePage} />
      </Routes>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5"></div>
          <div className="col-4">
            <Card
              image={sm}
              name="Samsung Galaxy S23"
              text="Mulai dari Rp 583.292/bln bunga 0% selama 24 bulan atau Rp 13.999.000"
            />
          </div>
          <div className="col-4">
            <Card
              image={ip14}
              name="iPhone 14"
              text="Dengan sistem kamera ganda paling hebat di iPhone. Ambil foto yang memukau dalam pencahayaan rendah maupun terang."
            />
          </div>
          <div className="col-4">
            <Card
              image={ip15}
              name="iPhone 15"
              text="Lahir dari titanium dan dilengkapi chip A17 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal yang pernah ada."
            />
          </div>
          <CardPromo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
