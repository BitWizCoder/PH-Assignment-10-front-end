import { useEffect, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [rating, setRating] = useState();

  const [oldData, setOldData] = useState([]);

  const { id } = useParams();
  console.log(id);

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
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((res) => res.json())
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

  //   Get product fata for filling default fields
  useEffect(() => {
    fetch(
      `https://brandshop-server-side-ap70zhu4k-muhammads-projects-f455d3ff.vercel.app/products/details/${id}`
    )
      .then((res) => res.json())
      .then((data) => setOldData(data))
      .catch((err) => console.log(err));
  }, [id]);

  const [selectedOption, setSelectedOption] = useState(oldData.type);
  const [brands, setBrands] = useState(oldData.brand);

  console.log(oldData);

  return (
    <>
      <h1 className="text-center text-3xl mt-10 mb-4">Add a new product</h1>
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-5 mb-20" onSubmit={handleSubmint}>
          <input
            defaultValue={oldData.name}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Brand names */}
          <select
            // value={brands}
            defaultValue={oldData.brand}
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
            defaultValue={oldData.image}
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            defaultValue={oldData.type}
            // value={selectedOption}
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
            defaultValue={oldData.price}
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />

          {/* Descriptin text area */}
          <textarea
            defaultValue={oldData.description}
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
              onChange={handleRatingChange}
              checked={oldData.rating === 1}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="2"
              onChange={handleRatingChange}
              checked={oldData.rating === 2}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="3"
              onChange={handleRatingChange}
              checked={oldData.rating === 3}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="4"
              onChange={handleRatingChange}
              checked={oldData.rating === 4}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="5"
              onChange={handleRatingChange}
              checked={oldData.rating === 5}
            />
          </div>

          <button type="submit" className="btn btn-neutral">
            Update
            <TiPlus className="text-xl" />
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
