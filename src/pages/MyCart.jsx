import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";

const MyCart = () => {
  const [data, setData] = useState([]); // Initial data from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the initial data from the API
    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/favorites`
    )
      .then((res) => res.json())
      .then((products) => {
        setData(products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <CartItems key={item._id} item={item} />)
      )}
    </div>
  );
};

export default MyCart;
