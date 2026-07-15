import CarForm from "@/components/forms/CarForm";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  BadgeCheck,
  CarFront,
  ShieldCheck,
  Users,
} from "lucide-react";

const AddCarPage = () => {
  return (
    <main className="bg-[var(--background)] py-20">
      <Container>
        <SectionTitle
          badge="Sell Your Car"
          title="List Your Vehicle"
          subtitle="Complete the form below to publish your vehicle on DriveMart and reach thousands of potential buyers."
        />

        {/* Info Card */}

        <div
          className="
            mx-auto
            mt-12
            max-w-6xl

            rounded-3xl

            border
            border-[var(--border)]

            bg-[var(--surface)]

            p-8

            shadow-[var(--shadow-md)]
          "
        >
          <div className="grid gap-6 md:grid-cols-3">

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <ShieldCheck size={26} />
              </div>

              <div>
                <h3 className="font-bold">
                  Verified Listings
                </h3>

                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  Every listing is reviewed to keep the marketplace safe and trustworthy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <Users size={26} />
              </div>

              <div>
                <h3 className="font-bold">
                  Reach Buyers
                </h3>

                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  Connect with thousands of active buyers across Bangladesh.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <CarFront size={26} />
              </div>

              <div>
                <h3 className="font-bold">
                  Sell Faster
                </h3>

                <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                  Professional listings receive more views and inquiries.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}

        <div
          className="
            mx-auto
            mt-10
            max-w-6xl

            rounded-3xl

            border
            border-[var(--border)]

            bg-[var(--surface)]

            p-8
            md:p-10
            lg:p-12

            shadow-[var(--shadow-lg)]
          "
        >
          <CarForm mode="create" />
        </div>
      </Container>
    </main>
  );
};

export default AddCarPage;