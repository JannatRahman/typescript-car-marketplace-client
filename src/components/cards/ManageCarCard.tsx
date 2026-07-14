"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Car } from "@/types/car";
import { deleteCar } from "@/services/car";

import Button from "../shared/Button";
import ConfirmModal from "../shared/ConfirmModal";

interface ManageCarCardProps {
  car: Car;
}

const ManageCarCard = ({ car }: ManageCarCardProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]shadow-sm transition hover:shadow-xl">

      {/* Image */}
      <div className="relative h-60">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            {car.title}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${car.condition === "New"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
              }`}
          >
            {car.condition}
          </span>

        </div>

        <p className="text-[var(--muted)]">
          {car.brand} • {car.model}
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">

          <p>📅 {car.year}</p>

          <p>📍 {car.location}</p>

          <p>⛽ {car.fuel}</p>

          <p>⚙️ {car.transmission}</p>

        </div>

        <h3 className="text-3xl font-bold text-[var(--primary)]">
          ৳ {car.price.toLocaleString()}
        </h3>

        <div className="flex gap-4">

          <Link
            href={`/manage-cars/edit/${car._id}`}
            className="flex-1"
          >
            <Button className="cursor-pointer w-full">
              ✏️ Edit
            </Button>
          </Link>

          <Button
            variant="secondary"
            className="cursor-pointer flex-1"
            onClick={() => setIsModalOpen(true)}
          >
            🗑 Delete
          </Button>

        </div>

      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete Car"
        message="Are you sure you want to delete this car? This action cannot be undone."
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />

    </div>
  );
};

export default ManageCarCard;