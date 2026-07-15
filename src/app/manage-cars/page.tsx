import ManageCarCard from "@/components/cards/ManageCarCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { getMyCars } from "@/services/server/car";


import { Car } from "@/types/car";
import Link from "next/link";

const ManageCarsPage = async () => {
  const response = await getMyCars();

  const cars: Car[] = response.data ?? [];

  return (
    <main className="min-h-screen bg-[var(--background)] py-20">
      <Container>

        <SectionTitle
          badge="Dashboard"
          title="Manage Cars"
          subtitle="Edit or remove your listed vehicles."
        />

        <div className="">

          {cars.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-16 text-center  shadow-sm">
              ...
            </div>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {cars.map((car) => (
                <ManageCarCard
                  key={car._id}
                  car={car}
                />
              ))}
            </div>
          )}

        </div>

      </Container>
    </main>
  );
};

export default ManageCarsPage;