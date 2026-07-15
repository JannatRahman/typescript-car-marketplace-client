"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import {
  Calendar,
  Fuel,
  Gauge,
  Settings2,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

import { Car } from "@/types/car";
import { deleteCar } from "@/services/car";

import Button from "../shared/Button";
import ConfirmModal from "../shared/ConfirmModal";

interface ManageCarCardProps {
  car: Car;
}

const ManageCarCard = ({
  car,
}: ManageCarCardProps) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const handleDelete = async () => {
    try {
      const result = await deleteCar(car._id);

      if (result.success) {
        toast.success("Car deleted successfully!");

        setIsModalOpen(false);

        router.refresh();
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete car.");

      setIsModalOpen(false);
    }
  };

  return (
    <>
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
        {/* IMAGE */}

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
            "
          >
            <p className="text-xs text-slate-500">
              Price
            </p>

            <h3 className="text-xl font-black text-blue-600">
              ৳ {car.price.toLocaleString()}
            </h3>
          </div>
        </div>

        {/* CONTENT */}

        <div className="space-y-6 p-6">
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

          <div className="grid grid-cols-2 gap-3">
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

          {/* Location */}

          <div className="flex items-center gap-2 text-[var(--foreground-muted)]">
            <MapPin
              size={18}
              className="text-blue-600"
            />

            <span>{car.location}</span>
          </div>

          {/* Buttons */}

          <div className="flex gap-3 pt-2">
            <Link
              href={`/manage-cars/edit/${car._id}`}
              className="flex-1"
            >
              <Button className="w-full gap-2">
                <Pencil size={17} />
                Edit
              </Button>
            </Link>

            <Button
              variant="secondary"
              onClick={() =>
                setIsModalOpen(true)
              }
              className="
                flex-1

                gap-2

                border-red-200

                text-red-600

                hover:border-red-500
                hover:bg-red-50
              "
            >
              <Trash2 size={17} />
              Delete
            </Button>
          </div>
        </div>
      </article>

      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete Car"
        message="Are you sure you want to delete this listing? This action cannot be undone."
        onCancel={() =>
          setIsModalOpen(false)
        }
        onConfirm={handleDelete}
      />
    </>
  );
};

export default ManageCarCard;