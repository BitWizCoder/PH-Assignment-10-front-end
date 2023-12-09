import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(`./brands.json`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
      {brands.map((brand) => (
        <Brand key={brand.id} brand={brand}></Brand>
      ))}
    </div>
  );
};

export default Brands;
