import { Car } from "@/types/car";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCars = async () => {
  const res = await fetch(`${API_URL}/cars`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
};

export const getSingleCar = async (id: string) => {
  const res = await fetch(`${API_URL}/cars/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch car");
  }

  return res.json();
};

export const addCar = async (car: Omit<Car, "_id">) => {
  const res = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });

  if (!res.ok) {
    throw new Error("Failed to add car");
  }

  return res.json();
};

export const updateCar = async (
  id: string,
  car: Partial<Omit<Car, "_id">>
) => {
  const res = await fetch(`${API_URL}/cars/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });

  if (!res.ok) {
    throw new Error("Failed to update car");
  }

  return res.json();
};

export const deleteCar = async (id: string) => {
  const res = await fetch(`${API_URL}/cars/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete car");
  }

  return res.json();
};