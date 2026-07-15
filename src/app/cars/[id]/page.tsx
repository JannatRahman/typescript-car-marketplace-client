import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  MapPin,
  Settings2,
  ShieldCheck,
  User,
} from "lucide-react";

import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import { getSingleCar } from "@/services/car";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CarDetailsPage = async ({
  params,
}: PageProps) => {
  const { id } = await params;

  const response = await getSingleCar(id);

  const car = response.data;

  return (
    <main className="bg-[var(--background)] py-16">
      <Container>
        {/* Back */}

        <Link
          href="/explore-cars"
          className="mb-8 inline-block"
        >
          <Button className="gap-2">
            <ArrowLeft size={18} />
            Back to Cars
          </Button>
        </Link>

        <div className="grid gap-14 xl:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}

          <div>
            {/* Hero Image */}

            <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-lg">
              <Image
                src={car.image}
                alt={car.title}
                width={1200}
                height={800}
                priority
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Description */}

            <div className="mt-10 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
              <h2 className="text-3xl font-black">
                Description
              </h2>

              <p className="mt-6 leading-8 text-[var(--foreground-muted)]">
                {car.description}
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <span
              className={`
                inline-flex
                rounded-full
                px-4
                py-2
                text-sm
                font-bold
                text-white

                ${car.condition === "New"
                  ? "bg-emerald-500"
                  : "bg-amber-500"
                }
              `}
            >
              {car.condition}
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight">
              {car.title}
            </h1>

            <p className="mt-3 text-xl text-[var(--foreground-muted)]">
              {car.brand} • {car.model}
            </p>

            <h2 className="mt-8 text-5xl font-black text-[var(--primary)]">
              ৳ {car.price.toLocaleString()}
            </h2>

            {/* Specs */}

            <div className="mt-10 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">

              <h2 className="mb-8 text-2xl font-black">
                Vehicle Specifications
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <Calendar
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Year</span>
                  </div>

                  <strong>{car.year}</strong>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <Fuel
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Fuel</span>
                  </div>

                  <strong>{car.fuel}</strong>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <Gauge
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Mileage</span>
                  </div>

                  <strong>
                    {car.mileage.toLocaleString()} km
                  </strong>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <Settings2
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Transmission</span>
                  </div>

                  <strong>{car.transmission}</strong>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Location</span>
                  </div>

                  <strong>{car.location}</strong>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-secondary)] p-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck
                      size={20}
                      className="text-[var(--primary)]"
                    />

                    <span>Condition</span>
                  </div>

                  <strong>{car.condition}</strong>
                </div>

              </div>

            </div>

            {/* Seller Card */}

            <div className="mt-10 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                  <User size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {car.sellerName}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-emerald-600">
                    <ShieldCheck size={16} />

                    Verified Seller
                  </div>
                </div>
              </div>

              <div className="my-8 h-px bg-[var(--border)]" />

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={20}
                    className="text-[var(--primary)]"
                  />

                  <span>{car.location}</span>
                </div>

                <Button className="w-full">
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CarDetailsPage;