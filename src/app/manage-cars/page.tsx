import ManageCarCard from "@/components/cards/ManageCarCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { getMyCars } from "@/services/car";

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

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cars.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-16 text-center shadow-sm">

              <h2 className="text-3xl font-bold">
                No Cars Listed Yet 🚗
              </h2>

              <p className="mt-3 text-[var(--muted)]">
                You haven't added any cars yet.
              </p>

              <Link
                href="/dashboard/add-car"
                className="mt-8 inline-flex rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Add Your First Car
              </Link>

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