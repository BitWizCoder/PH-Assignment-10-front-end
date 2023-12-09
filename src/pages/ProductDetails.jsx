import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaCartArrowDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products/details/${id}`
    )
      .then((res) => res.json())
      .then((item) => {
        setItem(item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (id) => {
    const data = {
      name: item.name,
      brand: item.brand,
      image: item.image,
      type: item.type,
      price: item.price,
      description: item.description,
      rating: item.rating,
    };
    console.log(id);

    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/favorites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
        toast.success("Product added to cart");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex mt-10">
      {loading ? ( // Show a loader if loading is true
        <p>Loading...</p>
      ) : (
        <div className="flex">
          <img src={item.image} alt="" className="rounded-md mb-4" />
          <div className="flex flex-col gap-5">
            <p>
              <span className="font-bold">Name: </span>
              {item.name}
            </p>
            <p>
              <span className="font-bold">Brand: </span>
              {item.brand}
            </p>
            <p>
              <span className="font-bold">Type: </span>
              {item.type}
            </p>
            <p>
              <span className="font-bold">Price: </span>${item.price}.00
            </p>
            <div className="flex">
              <p>
                <span className="font-bold">Ratings: </span>
                {item.rating}
              </p>
              <Rating name="read-only" value={item.rating || 0} readOnly />
            </div>
            <p className="font w-[550px]">
              <span className="font-bold">Description: </span>
              {item.description.substring(0, 400)}
            </p>
            <button
              className="btn btn-neutral text-lg"
              onClick={() => {
                handleAddToCart(item._id);
              }}
            >
              {" "}
              <FaCartArrowDown className="text-xl" /> Add to Cart
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
