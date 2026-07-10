import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarCard from "@/components/cards/CarCard";
import { getCars } from "@/services/car";
import { Car } from "@/types/car";

const FeaturedCars = async () => {
  const response = await getCars();

  const cars: Car[] = response.data;

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Featured"
          title="Explore Premium Cars"
          subtitle="Handpicked vehicles from trusted dealers across Bangladesh."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.slice(0, 8).map((car) => (
            <CarCard
              key={car._id}
              car={car}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCars;