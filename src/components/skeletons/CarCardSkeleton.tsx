const CarCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md animate-pulse">

      <div className="h-56 bg-gray-200" />

      <div className="space-y-4 p-6">

        <div className="h-6 w-3/4 rounded bg-gray-200" />

        <div className="h-4 w-1/2 rounded bg-gray-200" />

        <div className="h-4 w-full rounded bg-gray-200" />

        <div className="h-4 w-2/3 rounded bg-gray-200" />

        <div className="pt-4">
          <div className="h-12 rounded-xl bg-gray-200" />
        </div>

      </div>

    </div>
  );
};

export default CarCardSkeleton;