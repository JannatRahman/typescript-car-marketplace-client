import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";

interface RecentCar {
  _id: string;
  title: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  location: string;
}

interface Props {
  cars: RecentCar[];
}

export default function RecentCars({ cars }: Props) {
  return (
    <section className="mt-14">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Recent Listings
          </h2>

          <p className="mt-2 text-[var(--foreground-muted)]">
            Your latest published vehicles.
          </p>
        </div>

        <Link
          href="/manage-cars"
          className="flex items-center gap-2 font-semibold text-[var(--primary)] transition hover:gap-3"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Empty */}

      {cars.length === 0 ? (
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] py-20 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <CarFront size={38} />
          </div>

          <h3 className="mt-8 text-2xl font-bold">
            No Cars Listed Yet
          </h3>

          <p className="mx-auto mt-3 max-w-md text-[var(--foreground-muted)]">
            Start growing your marketplace by adding your first
            vehicle listing.
          </p>

          <Link href="/dashboard/add-car">
            <button className="mt-8 rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:scale-105">
              Add Your First Car
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {cars.map((car) => (
            <div
              key={car._id}
              className="group flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center"
            >
              {/* Image */}

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={170}
                  height={120}
                  className="h-28 w-44 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}

              <div className="flex-1">
                <h3 className="text-xl font-bold">
                  {car.title}
                </h3>

                <p className="mt-2 text-[var(--foreground-muted)]">
                  {car.brand} • {car.year}
                </p>

                <p className="mt-1 text-[var(--foreground-muted)]">
                  📍 {car.location}
                </p>
              </div>

              {/* Right */}

              <div className="flex flex-col items-start gap-4 md:items-end">
                <span className="rounded-full bg-blue-100 px-5 py-2 text-lg font-bold text-blue-600">
                  ৳ {car.price.toLocaleString()}
                </span>

                <Link
                  href={`/cars/${car._id}`}
                  className="font-semibold text-[var(--primary)] transition hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}