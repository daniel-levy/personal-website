import React from "react";
import { Carousel } from "flowbite-react";

import CarouselImage1 from "assets/carousel/carousel1.png";
import CarouselImage2 from "assets/carousel/carousel2.png";
import CarouselImage3 from "assets/carousel/carousel3.png";
import CarouselImage4 from "assets/carousel/carousel4.png";
import CarouselImage5 from "assets/carousel/carousel5.png";

const ImageCarousel = () => {
  return (
    <div className="h-80 w-80">
      <Carousel>
        <img src={CarouselImage1} alt="Daniel in Hawaii" />
        <img src={CarouselImage2} alt="Daniel in Toronto" />
        <img src={CarouselImage3} alt="Daniel and Jeanette" />
        <img src={CarouselImage4} alt="Daniel graduating" />
        <img src={CarouselImage5} alt="Daniel playing hockey" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
