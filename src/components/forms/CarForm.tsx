"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "@/components/shared/Button";
import { addCar, updateCar } from "@/services/car";
import { Car } from "@/types/car";


interface CarFormProps {
  mode: "create" | "edit";
  car?: Car;
}

const CarForm = ({
  mode,
  car,
}: CarFormProps) => {



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Car>({
    defaultValues: car,
  });
  useEffect(() => {
    if (mode === "edit" && car) {
      reset(car);
    }
  }, [car, mode, reset]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: Car) => {
    setLoading(true);

    try {
      if (mode === "create") {
        const result = await addCar(data);

        if (result.success) {
          toast.success("Car added successfully!");

          reset();

          router.push("/explore-cars");
          router.refresh();
        }
      } else {
        if (!car?._id) return;

        const { _id, ...updatedCar } = data;

        console.log("DATA:", data);
        console.log("UPDATED:", updatedCar);
        console.log("JSON:", JSON.stringify(updatedCar));

        const result = await updateCar(car._id, updatedCar);

        if (result.success) {
          toast.success("Car updated successfully!");

          router.push("/manage-cars");
          router.refresh();
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Car Title
          </label>
          <input
            type="text"
            placeholder="BMW M4 Competition"
            {...register("title", {
              required: "Car title is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Brand
          </label>

          <select
            {...register("brand", {
              required: "Brand is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Brand</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Tesla">Tesla</option>
            <option value="Audi">Audi</option>
          </select>

          {errors.brand && (
            <p className="mt-1 text-sm text-red-500">
              {errors.brand.message}
            </p>
          )}
        </div>

        {/* Model */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Model
          </label>

          <input
            type="text"
            placeholder="M4 Competition"
            {...register("model", {
              required: "Model is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.model && (
            <p className="mt-1 text-sm text-red-500">
              {errors.model.message}
            </p>
          )}
        </div>

        {/* Year */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Year
          </label>
          <input
            type="text"
            inputMode="numeric"

            {...register("year", {
              required: "Year is required",
              setValueAs: (value) => Number(value),
              min: {
                value: 1990,
                message: "Invalid year",
              },
              max: {
                value: new Date().getFullYear() + 1,
                message: "Invalid year",
              },
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.year && (
            <p className="mt-1 text-sm text-red-500">
              {errors.year.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Price (৳)
          </label>

          <input
            type="text"
            inputMode="numeric"

            {...register("price", {
              required: "Price is required",
              setValueAs: (value) => Number(value),
              min: {
                value: 1,
                message: "Price must be greater than 0",
              },
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.price && (
            <p className="mt-1 text-sm text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* Mileage */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mileage (km)
          </label>

          <input
            type="text"
            inputMode="numeric"

            {...register("mileage", {
              required: "Mileage is required",
              setValueAs: (value) => Number(value),
              min: {
                value: 0,
                message: "Mileage can't be negative",
              },
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.mileage && (
            <p className="mt-1 text-sm text-red-500">
              {errors.mileage.message}
            </p>
          )}
        </div>

        {/* Fuel */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Fuel
          </label>

          <select
            {...register("fuel", {
              required: "Fuel type is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>

          {errors.fuel && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fuel.message}
            </p>
          )}
        </div>

        {/* Transmission */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Transmission
          </label>

          <select
            {...register("transmission", {
              required: "Transmission is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          {errors.transmission && (
            <p className="mt-1 text-sm text-red-500">
              {errors.transmission.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Location
          </label>

          <input
            type="text"
            placeholder="Dhaka"
            {...register("location", {
              required: "Location is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.location && (
            <p className="mt-1 text-sm text-red-500">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Condition */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Condition
          </label>

          <select
            {...register("condition", {
              required: "Condition is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>

          {errors.condition && (
            <p className="mt-1 text-sm text-red-500">
              {errors.condition.message}
            </p>
          )}
        </div>

        {/* Seller */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Seller Name
          </label>

          <input
            type="text"
            placeholder="DriveMart Premium"
            {...register("sellerName", {
              required: "Seller name is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.sellerName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.sellerName.message}
            </p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Image Path
          </label>

          <input
            type="text"
            placeholder="/images/cars/bmw-m4.jpg"
            {...register("image", {
              required: "Image path is required",
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.image && (
            <p className="mt-1 text-sm text-red-500">
              {errors.image.message}
            </p>
          )}
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
          {...register("description", {
            required: "Description is required",
          })}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer"
      >
        {loading
          ? mode === "create"
            ? "Publishing..."
            : "Updating..."
          : mode === "create"
            ? "Publish Car"
            : "Update Car"}
      </Button>

    </form>
  );
};

export default CarForm;