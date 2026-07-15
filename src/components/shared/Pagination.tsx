"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

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
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const pages = [];

  const start = Math.max(1, currentPage - 2);

  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-3">

      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() =>
          goToPage(currentPage - 1)
        }
        className="
          flex
          items-center
          gap-2

          rounded-2xl

          border
          border-[var(--border)]

          bg-[var(--surface)]

          px-5
          py-3

          font-semibold

          transition

          hover:bg-[var(--surface-secondary)]

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* First */}

      {start > 1 && (
        <>
          <button
            onClick={() => goToPage(1)}
            className="
              h-12
              w-12

              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--surface)]

              font-semibold

              transition

              hover:bg-[var(--surface-secondary)]
            "
          >
            1
          </button>

          {start > 2 && (
            <span className="px-2 text-[var(--foreground-muted)]">
              ...
            </span>
          )}
        </>
      )}

      {/* Pages */}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`
            h-12
            w-12

            rounded-2xl

            font-bold

            transition-all
            duration-200

            ${
              currentPage === page
                ? "bg-[var(--primary)] text-white shadow-md"
                : "border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-secondary)]"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Last */}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-2 text-[var(--foreground-muted)]">
              ...
            </span>
          )}

          <button
            onClick={() =>
              goToPage(totalPages)
            }
            className="
              h-12
              w-12

              rounded-2xl

              border
              border-[var(--border)]

              bg-[var(--surface)]

              font-semibold

              transition

              hover:bg-[var(--surface-secondary)]
            "
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          goToPage(currentPage + 1)
        }
        className="
          flex
          items-center
          gap-2

          rounded-2xl

          border
          border-[var(--border)]

          bg-[var(--surface)]

          px-5
          py-3

          font-semibold

          transition

          hover:bg-[var(--surface-secondary)]

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Next
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;