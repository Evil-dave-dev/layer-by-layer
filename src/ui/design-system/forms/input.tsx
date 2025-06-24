import clsx from "clsx";
import Typography from "../typography/typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMessage?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}
const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMessage = "ce champs est requis",
  id,
  required = true,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "text-[var(--alert-danger)] placeholder-[var(--alert-danger)] border-[var(--alert-danger)] focus:ring-[var(--alert-danger)]"
            : "placeholder-gray-600 focus:ring-primary",
          "w-full p-4 font-light border border-gray-300 rounded focus:outline-none focus:ring-1 "
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMessage,
          },
        })}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typography variant="caption3" component="span" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};

export default Input;
