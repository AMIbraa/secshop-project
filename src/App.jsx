import { Routes, Route } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import Header from "./components/Header";
// import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CataloguePage from "./pages/CataloguePage";

const App = () => {
  // const res = await fetch("https://dummyjson.com/products");
  // const json = await res.json();
  // console.log(json);

  return (
    <div>
      <NavbarComp />

      <Header />

      <Card />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/categories" Component={CategoriesPage} />
        <Route path="/catalogue" Component={CataloguePage} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
