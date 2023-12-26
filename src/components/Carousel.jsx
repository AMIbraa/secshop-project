import { Carousel, Badge } from "react-bootstrap";
// import { useState } from "react";

const CarouselFadeExample = () => {
  // const [count, setCount] = useState(0);
  // function buying() {
  //   setCount(count + 1); bisa dipake buat menambahkan barang di keranjang
  // }

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src="../public/iphone14.jpg" alt="image" width={1366} />
          <Carousel.Caption>
            <h3>iPhone 14 Pro</h3>
            <p>A new level of Pro </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../public/iphone15.jpg" alt="image" width={1366} />
          <Carousel.Caption>
            <h3>
              iPhone 15 <Badge>New</Badge>
            </h3>
            <p>Dinamic island coming to all models</p>
            {/* <button onClick={buying}>Buy {count}</button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../public/samsungs23.jpg" alt="image" width={1366} />
          <Carousel.Caption>
            <h3>Samsung Galaxy S23 Series</h3>
            <p>Get ready to share the epic</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselFadeExample;
