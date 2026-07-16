"use server";

import { cookies } from "next/headers";
import {
  AuthResponse,
  LoginData,
  RegisterData,
} from "@/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const registerUser = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  return res.json();
};


export const loginUser = async (
  userData: LoginData
): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });

  return res.json();
};

export const logoutUser = async (): Promise<AuthResponse> => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.json();
};

export const getCurrentUser = async (): Promise<AuthResponse> => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/me`, {
    credentials: "include",
    cache: "no-store",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.json();
};