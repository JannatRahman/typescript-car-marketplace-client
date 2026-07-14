"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "@/components/auth/AuthLayout";
import Button from "@/components/shared/Button";


import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    setLoading(true);

    const success = await login(data);

    setLoading(false);

    if (!success) {
      toast.error("Invalid email or password.");
      return;
    }

    toast.success("Welcome back!");

    router.push("/");
  };

 

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to your DriveMart account."
      
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            {...register("email")}
            className="w-full rounded-xl border px-4 py-3"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              {...register("password")}
              className="w-full rounded-xl border px-4 py-3 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login"}
        </Button>

        

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}