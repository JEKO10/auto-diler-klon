import ControlBtns from "./ControlBtns";

const ImageModal = ({
  setIsModalOpen,
  selectedImage,
  setImageIndex,
  imageIndex,
  totalImages,
}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <ControlBtns
        setImageIndex={setImageIndex}
        imageIndex={imageIndex}
        totalImages={totalImages}
      />
      <div className="relative">
        <img
          src={`${BASE_URL}${selectedImage}`}
          alt="Full screen"
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
        />
        <button
          onClick={closeModal}
          className="text-sm md:text-xl absolute md:top-4 top-2 right-2 md:right-4  bg-red-500 text-white px-3 lg:px-5 py-1 lg:py-2 rounded-lg transition hover:bg-white hover:text-red-500"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
