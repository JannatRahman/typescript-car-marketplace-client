"use client";

import Link from "next/link";
import {
  ArrowRight,
  Car,
  Eye,
  Heart,
  Plus,
  Sparkles,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import DashboardStatCard from "./DashboardStatCard";
import Button from "@/components/shared/Button";


export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-12">
      {/* ================= Hero ================= */}

      <section className="overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 text-white shadow-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={16} />
              Seller Dashboard
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight">
              Welcome back,
              <br />
              {user?.name} 👋
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-blue-100">
              Manage your listings, monitor your performance and publish new
              vehicles from one beautiful dashboard.
            </p>

            <div className="mt-8">
              <Link href="/dashboard/add-car">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  <Plus size={18} />
                  Add New Car
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <h3 className="text-lg font-bold">
              Seller Tips
            </h3>

            <ul className="mt-5 space-y-4 text-blue-100">
              <li>✅ Add high-quality images.</li>
              <li>✅ Write detailed descriptions.</li>
              <li>✅ Keep prices competitive.</li>
              <li>✅ Update sold vehicles quickly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Stats ================= */}

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-black">
            Overview
          </h2>

          <p className="mt-2 text-[var(--foreground-muted)]">
            A quick summary of your marketplace activity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <DashboardStatCard
            title="Total Cars"
            value="12"
            icon={<Car />}
          />

          <DashboardStatCard
            title="Profile Views"
            value="245"
            icon={<Eye />}
          />

          <DashboardStatCard
            title="Wishlist Adds"
            value="37"
            icon={<Heart />}
          />
        </div>
      </section>

      {/* ================= Quick Actions ================= */}

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-black">
            Quick Actions
          </h2>

          <p className="mt-2 text-[var(--foreground-muted)]">
            Jump straight into the most common tasks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/dashboard/add-car"
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Plus size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Add New Car
            </h3>

            <p className="mt-3 text-[var(--foreground-muted)]">
              Publish a brand-new vehicle listing for buyers.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[var(--primary)]">
              Get Started
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          <Link
            href="/manage-cars"
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Car size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Manage Cars
            </h3>

            <p className="mt-3 text-[var(--foreground-muted)]">
              Update pricing, edit information or remove listings.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[var(--primary)]">
              Manage Now
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>

          <Link
            href="/"
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 text-2xl">
              🏠
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Marketplace
            </h3>

            <p className="mt-3 text-[var(--foreground-muted)]">
              Browse your marketplace just like your customers do.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-[var(--primary)]">
              Visit
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}