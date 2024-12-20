import { useState } from "react";

const FilterForm = () => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    location: "",
    year: "",
    oil: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-white font-inter -mt-44 sm:-mt-72 md:-mt-16 lg:-mt-32 xl:-mt-44 shadow-[0_1px_18px_8px_rgba(0,0,0,0.1)] rounded-md rounded-tl-none p-4 w-[90%] max-w-6xl mx-auto z-10 relative">
      <article className="bg-red-500 flex justify-start absolute -top-10 left-0 rounded-md rounded-bl-none rounded-br-none ">
        <p className="text-white px-6 py-2 rounded-md font-medium">
          Filtriraj pretragu
        </p>
      </article>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4"
      >
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="text"
            name="brand"
            placeholder="Marka"
            value={filters.brand}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="number"
            name="price"
            placeholder="Cijena"
            value={filters.price}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="text"
            name="location"
            placeholder="Lokacija"
            value={filters.location}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="number"
            name="year"
            placeholder="Godište"
            value={filters.year}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="text"
            name="body"
            placeholder="Karoserija"
            value={filters.body}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto">
          <input
            type="text"
            name="oil"
            placeholder="Gorivo"
            value={filters.oil}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white w-full md:w-auto px-6 py-2 rounded-md font-medium"
        >
          Traži
        </button>
      </form>
    </section>
  );
};

export default FilterForm;
