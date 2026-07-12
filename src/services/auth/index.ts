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
  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return res.json();
};

export const getCurrentUser = async (): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/me`, {
    credentials: "include",
    cache: "no-store",
  });

  return res.json();
};