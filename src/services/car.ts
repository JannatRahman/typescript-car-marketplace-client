import { Car } from "@/types/car";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface GetCarsParams {
  search?: string;
  brand?: string;
  fuel?: string;
  condition?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

interface CarsResponse {
  success: boolean;
  message: string;
  data: Car[];
  pagination: {
    totalCars: number;
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
  };
}

export const getCars = async ({
  search = "",
  brand = "",
  fuel = "",
  condition = "",
  sort = "",
  page = 1,
  limit = 12,
}: GetCarsParams = {}): Promise<CarsResponse> => {

  const query = new URLSearchParams();

  if (search) query.set("search", search);

  if (brand) query.set("brand", brand);

  if (fuel) query.set("fuel", fuel);

  if (condition) query.set("condition", condition);

  if (sort) query.set("sort", sort);

  query.set("page", page.toString());
  query.set("limit", limit.toString());

  const res = await fetch(`${API_URL}/cars?${query.toString()}`, {
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
    credentials: "include",
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
    credentials: "include",
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
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete car");
  }

  return res.json();
};