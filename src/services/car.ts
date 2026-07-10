const API = process.env.NEXT_PUBLIC_API_URL;

export const getCars = async () => {
  const res = await fetch(`${API}/cars`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars.");
  }

  return res.json();
};

export const getSingleCar = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch car.");
  }

  return res.json();
};