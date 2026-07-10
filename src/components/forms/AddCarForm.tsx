"use client";

import Button from "@/components/shared/Button";

const AddCarForm = () => {
  return (
    <form className="space-y-8">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Car Title
          </label>

          <input
            type="text"
            placeholder="BMW M4 Competition"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Brand
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600">
            <option>BMW</option>
            <option>Mercedes</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Tesla</option>
            <option>Audi</option>
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Model
          </label>

          <input
            type="text"
            placeholder="M4 Competition"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Year */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Year
          </label>

          <input
            type="number"
            placeholder="2024"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Price (৳)
          </label>

          <input
            type="number"
            placeholder="8500000"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Mileage */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mileage (km)
          </label>

          <input
            type="number"
            placeholder="5000"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Fuel */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Fuel
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600">
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Transmission
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600">
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Location
          </label>

          <input
            type="text"
            placeholder="Dhaka"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Condition
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600">
            <option>New</option>
            <option>Used</option>
          </select>
        </div>

        {/* Seller */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Seller Name
          </label>

          <input
            type="text"
            placeholder="DriveMart Premium"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Image Path
          </label>

          <input
            type="text"
            placeholder="/images/cars/bmw-m4.jpg"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Description
        </label>

        <textarea
          rows={6}
          placeholder="Write a detailed description..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <Button className="w-full">
        Publish Car
      </Button>

    </form>
  );
};

export default AddCarForm;