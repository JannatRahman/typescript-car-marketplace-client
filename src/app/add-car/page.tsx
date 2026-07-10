import AddCarForm from "@/components/forms/AddCarForm";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";


const AddCarPage = () => {
  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          badge="Sell Your Car"
          title="List Your Vehicle"
          subtitle="Fill in the details below to publish your car listing."
        />

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
         <AddCarForm/>
        </div>
      </Container>
    </main>
  );
};

export default AddCarPage;