import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";


export default function AddCarPage() {
  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Sell Your Car"
          title="Add Your Vehicle"
          subtitle="List your car and connect with thousands of potential buyers."
        />

        <AddCarForm />
      </Container>
    </main>
  );
}