import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;