import ManageCarCard from "@/components/cards/ManageCarCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { getCars } from "@/services/car";

import { Car } from "@/types/car";

const ManageCarsPage = async () => {
  const response = await getCars();

  const cars: Car[] = response.data;

  return (
    <main className="py-20 bg-slate-50 min-h-screen">
      <Container>

        <SectionTitle
          badge="Dashboard"
          title="Manage Cars"
          subtitle="Edit or remove your listed vehicles."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (
            <ManageCarCard
              key={car._id}
              car={car}
            />
          ))}

        </div>

      </Container>
    </main>
  );
};

export default ManageCarsPage;