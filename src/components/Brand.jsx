import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Brand = ({ brand }) => {
  // eslint-disable-next-line react/prop-types
  const backgroundImageUrl = brand.image;

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <Link to={brand.route}>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={divStyle}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {
              // eslint-disable-next-line react/prop-types
              brand.name
            }
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
