import Image from "next/image";
import Link from "next/link";

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
    <section className="mt-12">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Recent Listings
        </h2>

        <Link
          href="/manage-cars"
          className="text-sm font-semibold text-[var(--primary)] hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="space-y-4">

        {cars.length === 0 ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">

            <h3 className="text-lg font-semibold">
              No Cars Yet
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              Start by adding your first vehicle.
            </p>

          </div>
        ) : (
          cars.map((car) => (
            <div
              key={car._id}
              className="flex items-center gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition hover:shadow-lg"
            >
              <Image
                src={car.image}
                alt={car.title}
                width={100}
                height={70}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold">
                  {car.title}
                </h3>

                <p className="text-sm text-[var(--muted)]">
                  {car.brand} • {car.year}
                </p>

                <p className="text-sm text-[var(--muted)]">
                  📍 {car.location}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xl font-bold text-[var(--primary)]">
                  ৳ {car.price.toLocaleString()}
                </p>

              </div>

            </div>
          ))
        )}

      </div>

    </section>
  );
}