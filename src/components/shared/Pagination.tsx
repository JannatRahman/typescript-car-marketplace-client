"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  totalPages,
}: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex items-center justify-center gap-2">

      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`h-11 w-11 rounded-xl font-semibold transition ${currentPage === page
                ? "bg-blue-600 text-white"
                : "border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="cursor-pointer flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;