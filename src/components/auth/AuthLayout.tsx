import { ReactNode } from "react";
import Link from "next/link";
import {
  CarFront,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

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
    <main className="min-h-screen bg-[var(--background)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= Left Side ================= */}

        <div
          className="
            relative
            hidden
            overflow-hidden
            lg:flex
            lg:flex-col
            lg:justify-between

            bg-gradient-to-br
            from-blue-700
            via-blue-600
            to-indigo-700

            p-16
            text-white
          "
        >
          {/* Background circles */}

          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Logo */}

          <div className="relative z-10">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <CarFront size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-black">
                  DriveMart
                </h1>

                <p className="text-sm text-blue-100">
                  Premium Marketplace
                </p>
              </div>
            </Link>

            <h2 className="mt-24 max-w-lg text-6xl font-black leading-tight">
              Buy.
              <br />
              Sell.
              <br />
              Drive.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
              Discover verified vehicles, trusted
              sellers, and premium car buying
              experiences built for Bangladesh.
            </p>
          </div>

          {/* Bottom cards */}

          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <ShieldCheck
                className="text-green-300"
                size={28}
              />

              <div>
                <h3 className="font-semibold">
                  Secure Authentication
                </h3>

                <p className="text-sm text-blue-100">
                  Your account is always protected.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <BadgeCheck
                className="text-yellow-300"
                size={28}
              />

              <div>
                <h3 className="font-semibold">
                  Verified Dealers
                </h3>

                <p className="text-sm text-blue-100">
                  Browse trusted sellers only.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <Sparkles
                className="text-cyan-300"
                size={28}
              />

              <div>
                <h3 className="font-semibold">
                  Premium Experience
                </h3>

                <p className="text-sm text-blue-100">
                  Fast, modern and beautifully
                  designed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Right Side ================= */}

        <div className="flex items-center justify-center px-6 py-16">
          <div
            className="
              w-full
              max-w-md

              rounded-[32px]

              border
              border-[var(--border)]

              bg-[var(--surface)]

              p-10

              shadow-xl
            "
          >
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-black text-[var(--foreground)]">
                {title}
              </h2>

              <p className="mt-3 text-[var(--foreground-muted)]">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;