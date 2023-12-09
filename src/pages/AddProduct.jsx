import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const [rating, setRating] = useState(2);
  const [selectedOption, setSelectedOption] = useState("option-1");

  const [brands, setBrands] = useState("option-1");

  const navigate = useNavigate();

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleBrands = (e) => {
    setBrands(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = brands;
    const image = form.image.value;
    const type = selectedOption;
    const price = form.price.value;
    const description = form.description.value;
    // const rating = form.name.value;

    const values = {
      name,
      brand,
      image,
      type,
      price,
      description,
      rating,
    };
    console.log(values);

    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((res) => {
        res.json();
        toast.success("Product Added successfully.");
      })
      .then((data) => {
        console.log(data);
      });

    // Reset selections and form
    e.target.reset();
    setSelectedOption("option-1");
    setBrands("option-1");
    setRating(2);
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-10 mb-4">Add a new product</h1>
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-5 mb-20" onSubmit={handleSubmint}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Brand names */}
          <select
            value={brands}
            onChange={handleBrands}
            className="select select-bordered w-full max-w-xs"
          >
            <option value={"option-1"} disabled>
              Select a brand name
            </option>
            <option value={"apple"}>Apple</option>
            <option value={"motorola"}>Motorola</option>
            <option value={"hp"}>HP</option>
            <option value={"one-plues"}>One Plues</option>
            <option value={"samsung"}>Samsung</option>
            <option value={"xiomi"}>Xiomi</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            value={selectedOption}
            // defaultValue={selectedOption}
            onChange={handleSelectChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option value={"option-1"} disabled>
              Select a product type
            </option>
            <option value={"Mobile Phone"}>Mobile Phone</option>
            <option value={"Laptop/Computer"}>Laptop/Computer</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />

          {/* Descriptin text area */}
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Write a Short description about the product"
          ></textarea>

          {/* Rating */}
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="1"
              // checked={rating === 1}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="2"
              checked={rating === 2}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="3"
              // checked={rating === 3}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="4"
              // checked={rating === 4}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="5"
              // checked={rating === 5}
              onChange={handleRatingChange}
            />
          </div>
          <button type="submit" className="btn btn-neutral">
            Add
            <TiPlus className="text-xl" />
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddProduct;
