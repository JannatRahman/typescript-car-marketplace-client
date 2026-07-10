import Image from "next/image";



import audi from "@/assets/brands/audi.png";
import bmw from "@/assets/brands/bmw.png";
import mercedes from "@/assets/brands/mercedes.png";
import tesla from "@/assets/brands/tesla.png";
import toyota from "@/assets/brands/toyota.png";
import honda from "@/assets/brands/honda.png";
import hyundai from "@/assets/brands/hyundai.png";
import nissan from "@/assets/brands/nissan.png";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const brands = [
  { name: "BMW", logo: bmw },
  { name: "Mercedes", logo: mercedes },
  { name: "Audi", logo: audi },
  { name: "Tesla", logo: tesla },
  { name: "Toyota", logo: toyota },
  { name: "Honda", logo: honda },
  { name: "Hyundai", logo: hyundai },
  { name: "Nissan", logo: nissan },
];

const TrustedBrands = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          badge="Brands"
          title="Trusted Automotive Brands"
          subtitle="Browse vehicles from the world's most reliable and premium manufacturers."
        />

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-36 items-center justify-center rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default TrustedBrands;