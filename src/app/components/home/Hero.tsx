import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

import car from "@/assets/images/car.png";
import Button from "../shared/Button";
import Container from "../shared/Container";
import Badge from "../shared/Badge";



const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>

      <Container>
        <div className="grid min-h-[85vh] items-center gap-16 py-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div>
            <Badge>🚗 Bangladesh's Trusted Car Marketplace</Badge>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[var(--secondary)] md:text-6xl">
              Find Your
              <span className="text-[var(--primary)]"> Dream Car </span>
              With Confidence
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explore thousands of verified cars from trusted dealers across
              Bangladesh. Compare prices, discover premium vehicles, and drive
              away with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button>
                Browse Cars
              </Button>

              <Button variant="secondary">
                Sell Your Car
              </Button>
            </div>

            {/* Search Card */}
            <div className="mt-10 rounded-2xl border bg-white p-4 shadow-xl">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Search by brand, model..."
                    className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                  />
                </div>

                <Button>
                  Search
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <h2 className="text-3xl font-bold text-[var(--secondary)]">
                  10K+
                </h2>
                <p className="text-gray-500">Cars Listed</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--secondary)]">
                  500+
                </h2>
                <p className="text-gray-500">Trusted Dealers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--secondary)]">
                  4.9★
                </h2>
                <p className="text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-100 blur-3xl opacity-70"></div>

            {/* Car */}
            <Image
              src={car}
              alt="Luxury Car"
              priority
              className="relative z-10 w-full max-w-2xl object-contain"
            />

            {/* Rating Card */}
            <div className="absolute left-0 top-16 z-20 rounded-2xl border bg-white p-5 shadow-xl">
              <p className="text-lg font-bold text-yellow-500">
                ⭐ 4.9 Rating
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Trusted by thousands
              </p>
            </div>

            {/* Dealer Card */}
            <div className="absolute bottom-12 right-0 z-20 rounded-2xl border bg-white p-5 shadow-xl">
              <h3 className="font-semibold">
                Verified Dealers
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                500+ Professional Sellers
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute right-16 top-4 z-20 rounded-full bg-[var(--primary)] px-5 py-3 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <ArrowRight size={18} />
                <span className="font-semibold">New Listings Daily</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;