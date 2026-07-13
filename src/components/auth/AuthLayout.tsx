import { ReactNode } from "react";
import Link from "next/link";
import { CarFront, ShieldCheck, Sparkles } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-16 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <CarFront size={34} />

              <span className="text-3xl font-black">
                DriveMart
              </span>
            </Link>

            <h1 className="mt-20 max-w-md text-5xl font-black leading-tight">
              Buy, Sell & Explore Premium Cars.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-blue-100">
              Bangladesh's trusted marketplace for discovering your dream car with confidence.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-green-300" />

              <span>Secure authentication</span>
            </div>

            <div className="flex items-center gap-4">
              <Sparkles className="text-yellow-300" />

              <span>Verified dealers & premium listings</span>
            </div>

            <div className="flex items-center gap-4">
              <CarFront className="text-white" />

              <span>Thousands of cars across Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
            <h2 className="text-4xl font-black">
              {title}
            </h2>

            <p className="mt-3 text-gray-500">
              {subtitle}
            </p>

            <div className="mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;