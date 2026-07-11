import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarCard from "@/components/cards/CarCard";
import CarFilters from "@/components/filters/CarFilters";
import EmptyState from "@/components/shared/EmptyState";

import { getCars } from "@/services/car";
import { Car } from "@/types/car";
import Pagination from "@/components/shared/Pagination";

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
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Inventory"
          title="Explore All Cars"
          subtitle="Browse premium cars from trusted dealers."
        />

        <CarFilters />

        {cars.length === 0 ? (
          <div className="mt-14">
            <EmptyState />
          </div>
        ) : (
          <>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cars.map((car) => (
                <CarCard
                  key={car._id}
                  car={car}
                />
              ))}
            </div>

            {/* Pagination will go here */}
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          </>
        )}
      </Container>
    </main>
  );
}