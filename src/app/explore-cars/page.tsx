import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import CarsGrid from "../cars/CarsGrid";



const CarsPage = () => {
  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Inventory"
          title="Explore All Cars"
          subtitle="Browse our collection of premium vehicles from trusted dealers."
        />

        <CarsGrid />
      </Container>
    </main>
  );
};

export default CarsPage;