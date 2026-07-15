"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

import AuthLayout from "@/components/auth/AuthLayout";
import Button from "@/components/shared/Button";
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
        {/* Email */}

        <div>

          <label className="mb-2 block font-semibold">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="
                w-full

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface-secondary)]

                py-3
                pl-11
                pr-4

                outline-none

                transition

                focus:border-[var(--primary)]
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

          <label className="mb-2 block font-semibold">
            Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              {...register("password")}
              className="
                w-full

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface-secondary)]

                py-3
                pl-11
                pr-12

                outline-none

                transition

                focus:border-[var(--primary)]
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2

                text-[var(--foreground-muted)]

                transition

                hover:text-[var(--primary)]
              "
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>

          </div>

          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

        </div>

        {/* Login Button */}

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Login"}
        </Button>

        {/* Footer */}

        <p className="text-center text-sm text-[var(--foreground-muted)]">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[var(--primary)] transition hover:underline"
          >
            Create one
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}