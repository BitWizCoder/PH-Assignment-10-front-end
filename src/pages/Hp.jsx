import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import Flicking from "@egjs/react-flicking";

const Hp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products/hp`
    )
      .then((res) => res.json())
      .then((products) => {
        setData(products);
      })
      .catch((err) => console.log(err));
  }, []);

  const images = [
    "https://i.ibb.co/FsjT4n5/Group-1.png",
    "https://i.ibb.co/3c2wYRj/image-2.png",
    "https://i.ibb.co/ZJhhL4D/image-4.png",
    "https://i.ibb.co/sbL641g/image-5.png",
    "https://i.ibb.co/ZJhhL4D/image-4.png",
  ];

  // eslint-disable-next-line no-unused-vars
  const [panels, setPanels] = useState(images);

  return (
    <>
      <Flicking renderOnlyVisible={true} circular={true}>
        {panels.map((image, index) => (
          <div className="flicking-panel" key={index}>
            <div className="border-amber-400 border-4">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </Flicking>
      <div className="container mx-auto mb-10 grid justify-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {data.map((item, i) => {
          return <ProductCards key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default Hp;
