import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormSelectProps {
  label: string;
  options: string[];
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormSelect = ({
  label,
  options,
  register,
  error,
}: FormSelectProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select
        {...register}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-200
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-blue-600"
        }`}
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormSelect;