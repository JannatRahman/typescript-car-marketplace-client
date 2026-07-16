"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import AuthLayout from "@/components/auth/AuthLayout";
import Button from "@/components/shared/Button";
import { authClient } from "@/lib/auth-client";


const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDemo, setIsDemo] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Handle Demo Mode autofill
  const handleDemoToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsDemo(checked);

    if (checked) {
      setValue("email", "demo@drivemart.com");
      setValue("password", "password123");
      clearErrors(["email", "password"]);
    } else {
      setValue("email", "");
      setValue("password", "");
    }
  };

  // Credentials Sign In using Better Auth
  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const { error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/", 
      });

      if (error) {
        toast.error(error.message || "Invalid email or password.");
        return;
      }

      toast.success("Welcome back!");
      router.push("/");
      router.refresh();
    } catch (err: any) {
      toast.error("Something went wrong. Please try again.");
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In using Better Auth
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // Redirect after successful social auth
      });

      if (error) {
        toast.error(error.message || "Google authentication failed.");
      }
    } catch (err: any) {
      toast.error("Could not connect to Google.");
      console.error("Google Auth Error:", err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to your DriveMart account."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="mb-2 block font-semibold">Email Address</label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] py-3 pl-11 pr-4 outline-none transition focus:border-[var(--primary)]"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block font-semibold">Password</label>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] py-3 pl-11 pr-12 outline-none transition focus:border-[var(--primary)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] transition hover:text-[var(--primary)]"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Demo Credentials Check Button */}
        <div className="flex items-center space-x-2 rounded-xl bg-[var(--surface-secondary)] p-3 border border-dashed border-[var(--border)]">
          <input
            type="checkbox"
            id="demo-mode"
            checked={isDemo}
            onChange={handleDemoToggle}
            className="h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
          />
          <label
            htmlFor="demo-mode"
            className="text-sm font-medium cursor-pointer select-none text-[var(--foreground-muted)]"
          >
            Use Demo Credentials <span className="text-[var(--primary)] font-semibold">(Quick Fill)</span>
          </label>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={loading || googleLoading}
        >
          {loading ? "Signing In..." : "Login"}
        </Button>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute w-full border-t border-[var(--border)]"></div>
          <span className="relative bg-white px-3 text-xs uppercase text-[var(--foreground-muted)] dark:bg-[var(--background)]">
            Or continue with
          </span>
        </div>

        {/* Google Sign In Button */}
        <Button
          type="button"
          variant="secondary" 
          onClick={handleGoogleSignIn}
          disabled={loading || googleLoading}
          className="w-full flex items-center justify-center gap-2 border border-[var(--border)]"
        >
          {googleLoading ? (
            "Connecting to Google..."
          ) : (
            <>
              {/* Simple inline Google G SVG vector */}
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.65 0 3.14.57 4.31 1.69l3.22-3.22C17.58 1.63 14.98 1 12 1 7.37 1 3.42 3.66 1.49 7.55l3.77 2.92C6.18 7.14 8.84 5.04 12 5.04z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-1.99 3.41-4.92 3.41-8.6z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.26 14.77C4.99 13.97 4.84 13.1 4.84 12s.15-1.97.42-2.77L1.49 6.31C.54 8.21 0 10.04 0 12s.54 3.79 1.49 5.69l3.77-2.92z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.7-2.87c-1.03.69-2.34 1.1-3.92 1.1-3.16 0-5.82-2.1-6.78-5.43l-3.77 2.92C3.42 20.34 7.37 23 12 23z"
                />
              </svg>
              Sign in with Google
            </>
          )}
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