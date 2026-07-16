"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import AuthLayout from "@/components/auth/AuthLayout";
import Button from "@/components/shared/Button";
import { authClient } from "@/lib/auth-client";


const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"), // Fixed typo: z.string().email()
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });


  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      const { data:user, error } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/", 
      });
      console.log(user, data)

      if (error) {
        toast.error(error.message || "Registration failed.");
        return;
      }

      toast.success("Welcome to DriveMart!");
      router.push("/");
      router.refresh();
    } catch (err: any) {
      toast.error("Something went wrong. Please try again.");
      console.error("Registration Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Google Social Sign Up/Sign In via Better Auth
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
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
      title="Create Your Account"
      subtitle="Join thousands of buyers and sellers on DriveMart."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Full Name</label>
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              {...register("name")}
              placeholder="John Doe"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-12 pr-4 outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-blue-100"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Email Address</label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              {...register("email")}
              placeholder="john@email.com"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-12 pr-4 outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-blue-100"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Password</label>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-12 pr-12 outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] hover:text-[var(--primary)]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Confirm Password</label>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-3 pl-12 pr-12 outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)] hover:text-[var(--primary)]"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Register Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={loading || googleLoading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute w-full border-t border-[var(--border)]"></div>
          <span className="relative bg-white px-3 text-xs uppercase text-[var(--foreground-muted)] dark:bg-[var(--background)]">
            Or register with
          </span>
        </div>

        {/* Google Authentication Button */}
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
              Sign up with Google
            </>
          )}
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