"use client";

import Link from "next/link";

import {
  Car,
  Eye,
  Heart,
  Plus,
} from "lucide-react";



import { useAuth } from "@/hooks/useAuth";
import DashboardStatCard from "./DashboardStatCard";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>

      <section>

        <h1 className="text-5xl font-bold">
          Welcome back,
          <span className="text-[var(--primary)]">
            {" "}
            {user?.name}
          </span>
          👋
        </h1>

        <p className="mt-3 text-gray-500">
          Here's what's happening with your marketplace today.
        </p>

      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">

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

      </section>

      <section className="mt-12">

        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 mt-6 md:grid-cols-3">

          <Link
            href="/dashboard/add-car"
            className="rounded-2xl border p-6 hover:shadow-lg transition"
          >
            <Plus className="mb-4 text-[var(--primary)]" />

            <h3 className="text-xl font-semibold">
              Add New Car
            </h3>

            <p className="mt-2 text-gray-500">
              Create a brand new listing.
            </p>
          </Link>

          <Link
            href="/manage-cars"
            className="rounded-2xl border p-6 hover:shadow-lg transition"
          >
            <Car className="mb-4 text-[var(--primary)]" />

            <h3 className="text-xl font-semibold">
              Manage Cars
            </h3>

            <p className="mt-2 text-gray-500">
              Edit or delete listings.
            </p>
          </Link>

          <Link
            href="/"
            className="rounded-2xl border p-6 hover:shadow-lg transition"
          >
            🏠

            <h3 className="mt-4 text-xl font-semibold">
              Visit Marketplace
            </h3>

            <p className="mt-2 text-gray-500">
              Browse cars like a customer.
            </p>
          </Link>

        </div>

      </section>

    </div>
  );
}