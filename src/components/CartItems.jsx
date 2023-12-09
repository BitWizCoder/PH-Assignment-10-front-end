import Rating from "@mui/material/Rating";
import { Link, useParams } from "react-router-dom";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { useState } from "react";

const CartItems = ({ item }) => {
  const [cartData, setCartData] = useState(item);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (id) => {
    console.log(id);

    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/favorites/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      {!isDeleted && (
        <div>
          <div className="bg-[#D9D9D9] p-3 rounded-md max-w-sm">
            <img src={cartData.image} alt="" className="rounded-md mb-4" />
            <p>
              <span className="font-bold">Name: </span>
              {cartData.name}
            </p>
            <p>
              <span className="font-bold">Brand: </span>
              {cartData.brand}
            </p>
            <p>
              <span className="font-bold">Type: </span>
              {cartData.type}
            </p>
            <p>
              <span className="font-bold">Price: </span>${cartData.price}.00
            </p>
            <div className="flex">
              <p>
                <span className="font-bold">Ratings: </span>
                {cartData.rating}
              </p>
              <Rating name="read-only" value={cartData.rating || 0} readOnly />
            </div>

            <Link>
              <button
                className="btn btn-error w-full mt-4 text-white"
                onClick={() => {
                  handleDelete(item._id);
                  setIsDeleted(true);
                }}
              >
                {" "}
                <FaTrashCanArrowUp />
                Remove From Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
