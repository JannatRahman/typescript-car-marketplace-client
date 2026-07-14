import Image from "next/image";
import car from "@/assets/images/car.png";

import Container from "../shared/Container";
import Button from "../shared/Button";
import Badge from "../shared/Badge";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_40%),radial-gradient(circle_at_bottom_left,#bfdbfe,transparent_40%)]"></div>

      <Container>
        <div className="grid min-h-[88vh] items-center gap-16 py-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div>
            <Badge>🚗 Bangladesh's Trusted Car Marketplace</Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl xl:text-7xl">
              Find Your
              <span className="block text-blue-600">
                Dream Car
              </span>
              Without The Guesswork.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explore thousands of verified vehicles from trusted dealers across
              Bangladesh. Compare prices, discover premium cars, and drive away
              with confidence.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Browse Cars</Button>

              <Link href="/dashboard/add-car">
                <Button>Sell Your Car</Button>
              </Link>
            </div>

            {/* Search Card */}

            <div className="mt-10 rounded-2xl bg-white p-4 shadow-2xl">
              <div className="grid gap-4 md:grid-cols-4">
                <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500">
                  <option>Brand</option>
                  <option>Toyota</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Honda</option>
                </select>

                <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500">
                  <option>Price</option>
                  <option>Under 20 Lakh</option>
                  <option>20-40 Lakh</option>
                  <option>40+ Lakh</option>
                </select>

                <select className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500">
                  <option>Fuel</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                </select>

                <Button className="w-full">
                  Search
                </Button>
              </div>
            </div>

            {/* Statistics */}

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-extrabold text-blue-600">
                  10K+
                </h2>

                <p className="mt-1 text-gray-500">
                  Cars Listed
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-extrabold text-blue-600">
                  500+
                </h2>

                <p className="mt-1 text-gray-500">
                  Trusted Dealers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-extrabold text-blue-600">
                  4.9★
                </h2>

                <p className="mt-1 text-gray-500">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex items-center justify-center">
            {/* Blue Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl"></div>

            {/* Glass Card */}

            <div className="relative z-10 w-full max-w-xl rounded-[32px] border border-white/50 bg-white/60 p-8 shadow-2xl backdrop-blur-xl">
              <Image
                src={car}
                alt="Luxury Car"
                priority
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Rating Card */}

            <div className="absolute left-0 top-16 z-20 rounded-3xl bg-white p-5 shadow-2xl">
              <div className="text-3xl">⭐</div>

              <h3 className="mt-2 text-lg font-bold">
                4.9 Rating
              </h3>

              <p className="text-sm text-gray-500">
                Customer Satisfaction
              </p>
            </div>

            {/* Dealer Card */}

            <div className="absolute bottom-10 right-0 z-20 rounded-3xl bg-white p-5 shadow-2xl">
              <div className="text-3xl">🏢</div>

              <h3 className="mt-2 text-lg font-bold">
                500+
              </h3>

              <p className="text-sm text-gray-500">
                Verified Dealers
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;