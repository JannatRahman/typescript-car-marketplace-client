import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Fuel,
  Gauge,
  MapPin,
  Settings2,
  ArrowRight,
} from "lucide-react";

import { Car } from "@/types/car";

import Button from "../shared/Button";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <article
      className="
        group

        overflow-hidden

        rounded-[28px]

        border
        border-[var(--border)]

        bg-[var(--surface)]

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={car.image}
          alt={car.title}
          width={700}
          height={450}
          className="
            h-64
            w-full
            object-cover

            transition-transform
            duration-500

            group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Condition */}

        <span
          className={`
            absolute
            left-5
            top-5

            rounded-full

            px-4
            py-1.5

            text-xs
            font-bold

            text-white

            ${
              car.condition === "New"
                ? "bg-emerald-500"
                : "bg-amber-500"
            }
          `}
        >
          {car.condition}
        </span>

        {/* Price */}

        <div
          className="
            absolute
            bottom-5
            right-5

            rounded-2xl

            bg-white/95

            px-4
            py-2

            shadow-lg

            backdrop-blur
          "
        >
          <p className="text-xs text-slate-500">
            Starting From
          </p>

          <h2 className="text-xl font-black text-blue-600">
            ৳ {car.price.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Content */}

      <div className="space-y-6 p-6">
        {/* Brand */}

        <div>
          <span
            className="
              rounded-full

              bg-blue-50

              px-3
              py-1

              text-xs
              font-bold

              uppercase

              tracking-wider

              text-blue-600
            "
          >
            {car.brand}
          </span>

          <h2 className="mt-4 text-2xl font-black">
            {car.model}
          </h2>

          <p className="mt-1 text-[var(--foreground-muted)]">
            {car.title}
          </p>
        </div>

        {/* Specs */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
          "
        >
          <div className="rounded-2xl bg-[var(--surface-secondary)] p-4">
            <Calendar
              size={18}
              className="mb-2 text-blue-600"
            />

            <p className="text-xs text-[var(--foreground-muted)]">
              Year
            </p>

            <h3 className="font-bold">
              {car.year}
            </h3>
          </div>

          <div className="rounded-2xl bg-[var(--surface-secondary)] p-4">
            <Fuel
              size={18}
              className="mb-2 text-blue-600"
            />

            <p className="text-xs text-[var(--foreground-muted)]">
              Fuel
            </p>

            <h3 className="font-bold">
              {car.fuel}
            </h3>
          </div>

          <div className="rounded-2xl bg-[var(--surface-secondary)] p-4">
            <Gauge
              size={18}
              className="mb-2 text-blue-600"
            />

            <p className="text-xs text-[var(--foreground-muted)]">
              Mileage
            </p>

            <h3 className="font-bold">
              {car.mileage.toLocaleString()} km
            </h3>
          </div>

          <div className="rounded-2xl bg-[var(--surface-secondary)] p-4">
            <Settings2
              size={18}
              className="mb-2 text-blue-600"
            />

            <p className="text-xs text-[var(--foreground-muted)]">
              Gearbox
            </p>

            <h3 className="font-bold">
              {car.transmission}
            </h3>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between

            border-t
            border-[var(--border)]

            pt-5
          "
        >
          <div className="flex items-center gap-2">
            <MapPin
              size={18}
              className="text-blue-600"
            />

            <span className="font-medium">
              {car.location}
            </span>
          </div>

          <Link href={`/cars/${car._id}`}>
            <Button className="gap-2">
              Details
              <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CarCard;