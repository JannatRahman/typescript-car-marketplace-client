"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  Search,
  RotateCcw,
  CarFront,
} from "lucide-react";

import Button from "../shared/Button";

const CarFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [brand, setBrand] = useState(
    searchParams.get("brand") || ""
  );

  const [fuel, setFuel] = useState(
    searchParams.get("fuel") || ""
  );

  const [condition, setCondition] = useState(
    searchParams.get("condition") || ""
  );

  const [sort, setSort] = useState(
    searchParams.get("sort") || ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);

    if (brand) params.set("brand", brand);

    if (fuel) params.set("fuel", fuel);

    if (condition) params.set("condition", condition);

    if (sort) params.set("sort", sort);

    router.push(`/explore-cars?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setFuel("");
    setCondition("");
    setSort("");

    router.push("/explore-cars");
  };

  return (
    <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-md">
          <CarFront size={26} />
        </div>

        <div>

          <h2 className="text-3xl font-black">
            Search Cars
          </h2>

          <p className="mt-1 text-[var(--foreground-muted)]">
            Find the perfect vehicle using filters below.
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="relative mb-6">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
        />

        <input
          type="text"
          placeholder="Search by title, model or brand..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full

            rounded-2xl

            border
            border-[var(--border)]

            bg-[var(--surface-secondary)]

            py-4
            pl-14
            pr-5

            outline-none

            transition

            focus:border-[var(--primary)]
          "
        />

      </div>

      {/* Filters */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <select
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-5 py-4 outline-none focus:border-[var(--primary)]"
        >
          <option value="">All Brands</option>
          <option>BMW</option>
          <option>Mercedes</option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>Tesla</option>
          <option>Audi</option>
        </select>

        <select
          value={fuel}
          onChange={(e) =>
            setFuel(e.target.value)
          }
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-5 py-4 outline-none focus:border-[var(--primary)]"
        >
          <option value="">Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>

        <select
          value={condition}
          onChange={(e) =>
            setCondition(e.target.value)
          }
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-5 py-4 outline-none focus:border-[var(--primary)]"
        >
          <option value="">Condition</option>
          <option>New</option>
          <option>Used</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] px-5 py-4 outline-none focus:border-[var(--primary)]"
        >
          <option value="">Sort By</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="priceLow">
            Price Low → High
          </option>
          <option value="priceHigh">
            Price High → Low
          </option>
        </select>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">

        <Button
          variant="secondary"
          className="cursor-pointer"
          onClick={handleReset}
        >
          <RotateCcw size={18} />
          Reset
        </Button>

        <Button
          className="cursor-pointer"
          onClick={handleSearch}
        >
          <Search size={18} />
          Search Cars
        </Button>

      </div>

    </div>
  );
};

export default CarFilters;