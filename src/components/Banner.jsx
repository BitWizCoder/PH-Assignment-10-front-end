import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";

const Banner = () => {
  const images = [
    "https://i.ibb.co/FsjT4n5/Group-1.png",
    "https://i.ibb.co/3c2wYRj/image-2.png",
    "https://i.ibb.co/ZJhhL4D/image-4.png",
    "https://i.ibb.co/sbL641g/image-5.png",
    "https://i.ibb.co/ZJhhL4D/image-4.png"
  ];

  // eslint-disable-next-line no-unused-vars
  const [panels, setPanels] = useState(images);

  return (
    <>
      <Flicking renderOnlyVisible={true} circular={true}>
        {panels.map((image, index) => (
          <div className="flicking-panel" key={index}>
            <div className="border-amber-400 border-4"><img src={image} alt={`Image ${index + 1}`} /></div>
          </div>
        ))}
      </Flicking>
    </>
  );
};

export default Banner;
