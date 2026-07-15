import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarCard from "@/components/cards/CarCard";
import CarFilters from "@/components/filters/CarFilters";
import EmptyState from "@/components/shared/EmptyState";
import Pagination from "@/components/shared/Pagination";

import { getCars } from "@/services/car";
import { Car } from "@/types/car";

interface CarsPageProps {
  searchParams: Promise<{
    search?: string;
    brand?: string;
    fuel?: string;
    condition?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function CarsPage({
  searchParams,
}: CarsPageProps) {
  const {
    search = "",
    brand = "",
    fuel = "",
    condition = "",
    sort = "",
    page = "1",
  } = await searchParams;

  const response = await getCars({
    search,
    brand,
    fuel,
    condition,
    sort,
    page: Number(page),
  });

  const cars: Car[] = response.data;

  const pagination = response.pagination;

  return (
    <main className="bg-[var(--background)] py-16">
      <Container>
        <SectionTitle
          badge="Premium Inventory"
          title="Explore Cars"
          subtitle="Browse verified vehicles from trusted sellers across Bangladesh."
        />

        {/* Filters */}

       <div className="mb-12 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <CarFilters />
        </div>

        {/* Results */}

        {cars.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Header */}

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-black">
                  Available Cars
                </h2>

                <p className="mt-2 text-[var(--foreground-muted)]">
                  Showing{" "}
                  <span className="font-bold text-[var(--primary)]">
                    {cars.length}
                  </span>{" "}
                  vehicles
                </p>
              </div>

              <div className="rounded-full bg-[var(--surface-secondary)] px-5 py-2 text-sm font-semibold text-[var(--foreground-muted)]">
                Page {pagination.currentPage} of{" "}
                {pagination.totalPages}
              </div>
            </div>

            {/* Grid */}

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {cars.map((car) => (
                <CarCard
                  key={car._id}
                  car={car}
                />
              ))}
            </div>

            {/* Pagination */}

            <div className="mt-16 flex justify-center">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            </div>
          </>
        )}
      </Container>
    </main>
  );
}