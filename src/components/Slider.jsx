/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";

const Slider = ({ images, width, height }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="carousel carousel-center rounded-box"
        style={{ width: "100%", position: "relative", overflow: "hidden" }}
      >
        <div
          className="carousel-item"
          style={{ width: "100%", position: "relative", overflow: "hidden" }}
        >
          <img
            src={images[currentSlide]}
            alt="Pizza"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
