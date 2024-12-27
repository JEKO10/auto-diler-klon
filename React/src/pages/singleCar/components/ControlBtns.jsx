import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const ControlBtns = ({ setImageIndex, imageIndex, totalImages }) => {
  const nextSlide = () => {
    if (imageIndex < totalImages - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="text-red-500 text-lg md:text-2xl">
      <button
        onClick={prevSlide}
        className={`bg-black/50 p-2 md:p-4 absolute left-0 bottom-[50%] z-50 ${
          imageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={imageIndex === 0}
      >
        <GrLinkPrevious />
      </button>
      <button
        onClick={nextSlide}
        className={`bg-black/50 p-2 md:p-4 absolute right-0 bottom-[50%] z-50 ${
          imageIndex === totalImages - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={imageIndex === totalImages - 1}
      >
        <GrLinkNext />
      </button>
    </div>
  );
};

export default ControlBtns;
