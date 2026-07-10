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
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Update"
          title="Edit Car"
          subtitle="Update your car information."
        />

        <CarForm
          mode="edit"
          car={car}
        />
      </Container>
    </main>
  );
};

export default EditCarPage;