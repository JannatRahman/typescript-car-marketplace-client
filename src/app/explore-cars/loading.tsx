import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarCardSkeleton from "@/components/skeletons/CarCardSkeleton";

export default function Loading() {
  return (
    <main className="bg-slate-50 py-20">
      <Container>

        <SectionTitle
          badge="Inventory"
          title="Explore All Cars"
          subtitle="Loading premium cars..."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarCardSkeleton key={index} />
          ))}
        </div>

      </Container>
    </main>
  );
}