import {
  BadgeCheck,
  Car,
  HandCoins,
  ShieldCheck,
} from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import FeatureCard from "../cards/FeatureCards";


const features = [
  {
    icon: BadgeCheck,
    title: "Verified Dealers",
    description:
      "Every dealer is verified to ensure trust and authenticity.",
  },
  {
    icon: Car,
    title: "Huge Collection",
    description:
      "Browse thousands of premium new and used vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "Your purchases are protected with secure transactions.",
  },
  {
    icon: HandCoins,
    title: "Best Prices",
    description:
      "Compare listings and find the best deals across Bangladesh.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Why DriveMart"
          title="Why Choose DriveMart?"
          subtitle="We make buying and selling cars easy, transparent, and secure."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;