"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMyCars = async () => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/my-cars`, {
    cache: "no-store",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.json();
};