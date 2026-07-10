import Image from "next/image";
import Container from "@/components/shared/Container";
import { getSingleCar } from "@/services/car";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CarDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const response = await getSingleCar(id);
  const car = response.data;

  return (
    <main className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <Image
              src={car.image}
              alt={car.title}
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              {car.condition}
            </span>

            <h1 className="mt-5 text-5xl font-black">
              {car.title}
            </h1>

            <p className="mt-2 text-lg text-gray-500">
              {car.brand} • {car.model}
            </p>

            <h2 className="mt-8 text-4xl font-bold text-blue-600">
              ৳ {car.price.toLocaleString()}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-lg">

              <div>
                <p className="text-gray-500">Year</p>
                <h3 className="font-semibold">{car.year}</h3>
              </div>

              <div>
                <p className="text-gray-500">Fuel</p>
                <h3 className="font-semibold">{car.fuel}</h3>
              </div>

              <div>
                <p className="text-gray-500">Transmission</p>
                <h3 className="font-semibold">{car.transmission}</h3>
              </div>

              <div>
                <p className="text-gray-500">Mileage</p>
                <h3 className="font-semibold">
                  {car.mileage.toLocaleString()} km
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <h3 className="font-semibold">{car.location}</h3>
              </div>

              <div>
                <p className="text-gray-500">Seller</p>
                <h3 className="font-semibold">{car.sellerName}</h3>
              </div>

            </div>

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

              <h3 className="text-2xl font-bold">
                Description
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {car.description}
              </p>

            </div>

          </div>

        </div>
      </Container>
    </main>
  );
};

export default CarDetailsPage;