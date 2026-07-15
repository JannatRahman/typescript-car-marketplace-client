import Link from "next/link";
import { SearchX } from "lucide-react";

import Button from "./Button";

const EmptyState = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        px-8
        py-24

        text-center

        shadow-lg
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center

          rounded-full

          bg-[var(--surface-secondary)]

          text-[var(--primary)]
        "
      >
        <SearchX size={44} />
      </div>

      {/* Heading */}

      <h2
        className="
          mt-8

          text-3xl
          font-bold

          text-[var(--foreground)]
        "
      >
        No Cars Found
      </h2>

      {/* Description */}

      <p
        className="
          mt-4

          max-w-lg

          text-base
          leading-7

          text-[var(--muted)]
        "
      >
        We couldn't find any cars matching your search criteria.
        Try adjusting the filters or clear them to explore all
        available vehicles.
      </p>

      {/* Action */}

      <Link
        href="/explore-cars"
        className="mt-10"
      >
        <Button className="cursor-pointer px-8">
          Clear Filters
        </Button>
      </Link>
    </div>
  );
};

export default EmptyState;