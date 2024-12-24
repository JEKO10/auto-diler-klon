const SkeletonCard = () => {
  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-3 space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
      <div className="flex justify-between text-sm my-3">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="h-10 bg-red-300 rounded w-24"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
