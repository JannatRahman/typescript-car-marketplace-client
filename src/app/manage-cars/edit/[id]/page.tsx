import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

import { getSingleCar } from "@/services/car";
import { Car } from "@/types/car";
import CarForm from "@/components/forms/CarForm";

interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditCarPage = async ({ params }: EditPageProps) => {
  const { id } = await params;

  const response = await getSingleCar(id);
  const car: Car = response.data;

  return (
    <main className="bg-[var(--background)] py-20">
      <Container>
        <SectionTitle
          badge="Update Listing"
          title="Edit Your Car"
          subtitle="Update your vehicle information and save your changes."
        />

        <div className="mx-auto mt-12 max-w-7xl rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl lg:p-10">
          <CarForm
            mode="edit"
            car={car}
          />
        </div>
      </Container>
    </main>
  );
};

export default EditCarPage;