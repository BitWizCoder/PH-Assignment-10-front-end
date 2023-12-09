import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";

const Xiomi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products/xiomi`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((products) => {
        setData(products);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div className="bg-red-500 text-white p-4 text-center">
          There is no data found: {error}
        </div>
      ) : data.length === 0 ? (
        <div className="bg-amber-700 text-red-300 p-4 text-center h-[500px] text-7xl">
          There is no data found: {error}
        </div>
      ) : (
        data.map((item, i) => <ProductCards key={i} item={item} />)
      )}
    </div>
  );
};

export default Xiomi;
