"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface DashboardData {
  totalCars: number;
  averagePrice: number;
  totalValue: number;

  recentCars: {
    _id: string;
    title: string;
    brand: string;
    price: number;
    image: string;
    location: string;
    year: number;
  }[];
}

interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}

export const getDashboard = async (): Promise<DashboardResponse> => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/dashboard`, {
    credentials: "include",
    cache: "no-store",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (!res.ok) {
    throw new Error("Failed to load dashboard");
  }

  return res.json();
};