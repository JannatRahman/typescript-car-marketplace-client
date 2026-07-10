
import CarCard from "@/components/cards/CarCard";
import { getCars } from "@/services/car";
import { Car } from "@/types/car";

const CarsGrid = async () => {
  const response = await getCars();
  const cars: Car[] = response.data;

  return (
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default CarsGrid;