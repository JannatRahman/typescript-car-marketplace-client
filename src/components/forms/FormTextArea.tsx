import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormTextarea = ({
  label,
  placeholder,
  register,
  error,
}: FormTextareaProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <textarea
        rows={6}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-200
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-blue-600"
        }`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;