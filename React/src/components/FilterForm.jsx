import Form from "./Form";

const FilterForm = ({ isHome }) => {
  return (
    <section
      className={`border bg-body font-inter ${
        isHome ? "-mt-44 sm:-mt-72 md:-mt-16 lg:-mt-32 xl:-mt-44 " : "mt-14"
      } shadow-[0_1px_18px_8px_rgba(0,0,0,0.1)] rounded-md rounded-tl-none p-4 w-[90%] max-w-6xl mx-auto z-10 relative`}
    >
      <article className="bg-red-500 flex justify-start absolute -top-10 left-0 rounded-md rounded-bl-none rounded-br-none ">
        <p className="text-white px-6 py-2 rounded-md font-medium">
          Filtriraj pretragu
        </p>
      </article>
      <Form />
    </section>
  );
};

export default FilterForm;
