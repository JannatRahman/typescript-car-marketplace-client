"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Search, RotateCcw } from "lucide-react";
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

  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-7 text-white">
        <h2 className="text-3xl font-bold">
          Find Your Perfect Car
        </h2>

        <p className="mt-2 text-blue-100">
          Search premium cars from trusted dealers across Bangladesh.
        </p>
      </div>

      {/* Body */}
      <div className="space-y-8 p-8">

        {/* Search */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by title, brand or model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 py-4 pl-12 pr-5 text-lg outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">All Brands</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Tesla">Tesla</option>
            <option value="Audi">Audi</option>
          </select>

          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>

          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="priceLow">Price Low → High</option>
            <option value="priceHigh">Price High → Low</option>
          </select>

        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">

          <Button
          className="cursor-pointer"
            variant="secondary"
            onClick={() => {
              setSearch("");
              setBrand("");
              setFuel("");
              setCondition("");
              setSort("");

              router.push("/explore-cars");
            }}
          >
            <RotateCcw size={18} />
            Reset
          </Button>

          <Button
          className="cursor-pointer"
            onClick={() => {
              const params = new URLSearchParams();

              if (search) params.set("search", search);

              if (brand) params.set("brand", brand);

              if (fuel) params.set("fuel", fuel);

              if (condition) params.set("condition", condition);

              if (sort) params.set("sort", sort);

              router.push(`/explore-cars?${params.toString()}`);
            }}
          >
            Search Cars
          </Button>

        </div>

      </div>
    </div>
  );
};

export default CarFilters;