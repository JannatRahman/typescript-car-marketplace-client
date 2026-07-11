"use client";

import { Search, RotateCcw } from "lucide-react";
import Button from "../shared/Button";

const CarFilters = () => {
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
            className="w-full rounded-2xl border border-gray-300 py-4 pl-12 pr-5 text-lg outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>All Brands</option>
            <option>BMW</option>
            <option>Mercedes</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Tesla</option>
            <option>Audi</option>
          </select>

          <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>

          <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>Condition</option>
            <option>New</option>
            <option>Used</option>
          </select>

          <select className="rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>Sort By</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
          </select>

        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">

          <Button
            variant="secondary"
            className="flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} />
            Reset
          </Button>

          <Button className="flex items-center justify-center gap-2">
            <Search size={18} />
            Search Cars
          </Button>

        </div>

      </div>
    </div>
  );
};

export default CarFilters;