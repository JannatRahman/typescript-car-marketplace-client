import Link from "next/link";

import ManageCarCard from "@/components/cards/ManageCarCard";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

import { getMyCars } from "@/services/server/car";
import { Car } from "@/types/car";

const ManageCarsPage = async () => {
  const response = await getMyCars();

  const cars: Car[] = response.data ?? [];

  return (
    <main className="min-h-screen bg-[var(--background)] py-20">
      <Container>
        <SectionTitle
          badge="Dashboard"
          title="Manage Your Cars"
          subtitle="Edit, update, or remove your vehicle listings anytime."
        />

        {cars.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--surface-secondary)] text-4xl">
              🚗
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[var(--foreground)]">
              No Cars Listed Yet
            </h2>

            <p className="mx-auto mt-4 max-w-md leading-7 text-[var(--muted)]">
              You haven't listed any vehicles yet. Start selling by adding your
              first car to the marketplace.
            </p>

            <Link href="/add-car" className="mt-8 inline-block">
              <Button>Add Your First Car</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <ManageCarCard
                key={car._id}
                car={car}
              />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
};

export default ManageCarsPage;