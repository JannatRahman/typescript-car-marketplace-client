"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "@/components/auth/AuthLayout";
import Button from "@/components/shared/Button";

import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Please enter a valid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const { register: registerUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    setLoading(true);

    const success = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (!success) {
      toast.error("Registration failed.");
      return;
    }

    toast.success("Welcome to DriveMart!");

    router.push("/");
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join thousands of buyers and sellers on DriveMart."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              {...register("name")}
              placeholder="John Doe"
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-[var(--primary)]
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              {...register("email")}
              placeholder="john@email.com"
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-[var(--primary)]
                focus:ring-4
                focus:ring-blue-100
              "
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                py-3
                pl-12
                pr-12
                outline-none
                transition-all
                focus:border-[var(--primary)]
                focus:ring-4
                focus:ring-blue-100
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] hover:text-[var(--primary)]"
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

        {/* Confirm Password */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              {...register("confirmPassword")}
              placeholder="••••••••"
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                py-3
                pl-12
                pr-12
                outline-none
                transition-all
                focus:border-[var(--primary)]
                focus:ring-4
                focus:ring-blue-100
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] hover:text-[var(--primary)]"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </Button>

        <div className="text-center text-sm text-[var(--foreground-muted)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[var(--primary)] hover:underline"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}