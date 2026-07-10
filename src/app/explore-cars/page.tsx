import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarCard from "@/components/cards/CarCard";
import { getCars } from "@/services/car";
import { Car } from "@/types/car";

export default async function CarsPage() {
  const response = await getCars();

  const cars: Car[] = response.data;

  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Inventory"
          title="Explore All Cars"
          subtitle="Browse premium cars from trusted dealers."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}