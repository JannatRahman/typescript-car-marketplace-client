import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";
import Button from "../shared/Button";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative overflow-hidden">

        <Image
          src={car.image}
          alt={car.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Condition Badge */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            car.condition === "New"
              ? "bg-green-600"
              : "bg-amber-500"
          }`}
        >
          {car.condition}
        </span>

      </div>

      {/* Content */}
      <div className="space-y-5 p-6">

        {/* Brand + Model */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {car.brand}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            {car.model}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {car.title}
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">

          <div>
            <p className="font-medium text-gray-900">{car.year}</p>
            <p>Year</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">{car.fuel}</p>
            <p>Fuel</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">
              {car.mileage.toLocaleString()} km
            </p>
            <p>Mileage</p>
          </div>

          <div>
            <p className="font-medium text-gray-900">
              {car.transmission}
            </p>
            <p>Transmission</p>
          </div>

        </div>

        {/* Location */}
        <div className="flex items-center justify-between border-t pt-4">

          <div>
            <p className="text-sm text-gray-500">Location</p>

            <p className="font-semibold">
              📍 {car.location}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Price</p>

            <h2 className="text-2xl font-bold text-blue-600">
              ৳ {car.price.toLocaleString()}
            </h2>
          </div>

        </div>

        {/* Button */}
        <Link href={`/cars/${car._id}`} className="block">
          <Button className="w-full">
            View Details
          </Button>
        </Link>

      </div>

    </div>
  );
};

export default CarCard;