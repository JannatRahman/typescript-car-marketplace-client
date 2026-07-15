import clsx from "clsx";

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
      className={clsx(
        "mb-14",
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      )}
    >
      {badge && (
        <div
          className={clsx(
            center ? "justify-center" : "justify-start",
            "mb-5 flex"
          )}
        >
          <span
            className="
            inline-flex
            items-center

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--surface-secondary)]

            px-4
            py-1.5

            text-xs
            font-bold
            uppercase
            tracking-[0.2em]

            text-[var(--primary)]
          "
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className="
        text-4xl
        font-extrabold
        leading-tight
        tracking-tight

        text-[var(--foreground)]

        md:text-5xl
        lg:text-6xl
      "
      >
        {title}
      </h2>

      <p
        className={clsx(
          center ? "mx-auto" : "",
          `
          mt-6

          max-w-2xl

          text-lg
          leading-8

          text-[var(--foreground-muted)]

          md:text-xl
          `
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;