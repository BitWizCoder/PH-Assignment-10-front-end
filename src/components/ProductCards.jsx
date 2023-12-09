import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductCards = ({ item }) => {
  return (
    <div className="bg-[#D9D9D9] p-3 rounded-md max-w-sm">
      <img src={item.image} alt="" className="rounded-md mb-4" />
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
        <Rating name="read-only" value={item.rating} readOnly />
      </div>
      <div className="flex justify-between mt-4">
        <Link to={`/details/${item._id}`}>
          <button className="btn btn-neutral">Details</button>
        </Link>
        <Link to={`/update/${item._id}`}>
          <button className="btn btn-neutral">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
