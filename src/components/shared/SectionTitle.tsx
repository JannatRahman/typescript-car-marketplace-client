interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionTitle = ({
  badge,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-12 ${
        center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      <p
        className={`mt-5 text-lg leading-8 text-gray-600 ${
          center ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;