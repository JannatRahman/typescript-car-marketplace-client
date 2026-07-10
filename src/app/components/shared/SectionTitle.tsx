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
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 text-blue-600 px-4 py-1 text-sm font-semibold">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-gray-500 mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;