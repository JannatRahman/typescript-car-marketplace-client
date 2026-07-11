import Link from "next/link";
import Button from "./Button";
import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white py-24 text-center shadow-sm">

      <div className="rounded-full bg-blue-100 p-6">
        <SearchX
          size={50}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-900">
        No Cars Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        We could not find any cars matching your search.
        Try changing your filters or clearing them to see
        all available cars.
      </p>

      <Link href="/explore-cars" className="cursor-pointer mt-8">
        <Button>
          Clear Filters
        </Button>
      </Link>

    </div>
  );
};

export default EmptyState;