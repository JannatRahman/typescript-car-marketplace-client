import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import car from "@/assets/images/car.png";

import Badge from "../shared/Badge";
import Button from "../shared/Button";
import Container from "../shared/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative grid min-h-[88vh] items-center gap-20 py-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <Badge>
              Bangladesh's Premium Car Marketplace
            </Badge>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight lg:text-7xl">
              Buy & Sell
              <span className="block text-[var(--primary)]">
                Cars With
              </span>
              Confidence.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--foreground-muted)]">
              Discover verified vehicles from trusted sellers across Bangladesh.
              Compare prices, explore premium listings, and find your next car
              with complete peace of mind.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/explore-cars">
                <Button className="gap-2 px-7">
                  Browse Cars
                  <ArrowRight size={18} />
                </Button>
              </Link>

              <Link href="/dashboard/add-car">
                <Button variant="secondary">
                  Sell Your Car
                </Button>
              </Link>
            </div>

            {/* Features */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="text-[var(--primary)]"
                  size={22}
                />

                <span className="font-medium">
                  Verified Sellers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[var(--primary)]"
                  size={22}
                />

                <span className="font-medium">
                  Secure Transactions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[var(--primary)]"
                  size={22}
                />

                <span className="font-medium">
                  Trusted Dealers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[var(--primary)]"
                  size={22}
                />

                <span className="font-medium">
                  Nationwide Listings
                </span>
              </div>
            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-black text-[var(--primary)]">
                  10K+
                </h2>

                <p className="mt-2 text-[var(--foreground-muted)]">
                  Cars Listed
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-[var(--primary)]">
                  500+
                </h2>

                <p className="mt-2 text-[var(--foreground-muted)]">
                  Dealers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-[var(--primary)]">
                  4.9★
                </h2>

                <p className="mt-2 text-[var(--foreground-muted)]">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            {/* Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Image Card */}

            <div
              className="
                relative

                rounded-[36px]

                border
                border-[var(--border)]

                bg-[var(--surface)]

                p-10

                shadow-2xl
              "
            >
              <Image
                src={car}
                alt="Luxury Car"
                priority
                className="w-full object-contain"
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute

                -left-4
                top-10

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface)]

                px-5
                py-4

                shadow-xl
              "
            >
              <p className="text-sm text-[var(--foreground-muted)]">
                Trusted Dealers
              </p>

              <h3 className="mt-1 text-2xl font-black">
                500+
              </h3>
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute

                -right-4
                bottom-10

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface)]

                px-5
                py-4

                shadow-xl
              "
            >
              <p className="text-sm text-[var(--foreground-muted)]">
                Customer Rating
              </p>

              <h3 className="mt-1 text-2xl font-black">
                ⭐ 4.9
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;