import CarCard from "@/components/cards/CarCard";
import { getCars } from "@/services/car";
import { Car } from "@/types/car";
import { CarFront } from "lucide-react";

const CarsGrid = async () => {
  const response = await getCars();

  const cars: Car[] = response.data ?? [];

  if (cars.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center rounded-[32px] border border-[var(--border)] bg-[var(--surface)] px-8 py-20 text-center shadow-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--surface-secondary)]">
          <CarFront
            size={40}
            className="text-[var(--primary)]"
          />
        </div>

        <h2 className="mt-8 text-3xl font-black">
          No Cars Found
        </h2>

        <p className="mt-3 max-w-md text-[var(--foreground-muted)]">
          There are currently no vehicles available.
          Please check back later or try changing your
          search filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Available Cars
          </h2>

          <p className="mt-2 text-[var(--foreground-muted)]">
            Showing{" "}
            <span className="font-bold text-[var(--primary)]">
              {cars.length}
            </span>{" "}
            available vehicles.
          </p>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
          />
        ))}
      </div>
    </>
  );
};

export default CarsGrid;