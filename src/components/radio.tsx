import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

type RadioButtonProps = {
  question: string;
  id: string;
  value: string;
  label: string;
  className?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & VariantProps<typeof radioButton>;

const radioButton = cva(
  "flex items-center w-full border-1 rounded-lg px-3 py-[10px] disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary:
          "bg-radio-neutral border-neutral hover:opacity-80 hover:opacity-80 not-disabled:active:ring-2 not-disabled:active:ring-brand active:ring-offset-2",
        correct: "bg-radio-success border-success",
        warning: "bg-radio-warning border-warning",
        error: "bg-radio-danger border-danger",
      },
      size: {
        medium: "px-3 py-[10px]",
      },
    },
  }
);

export default function RadioButton({
  question,
  id,
  value,
  label,
  intent,
  size,
  className,
  disabled,
  onChange,
}: RadioButtonProps) {
  return (
    <li className={cn(radioButton({ intent, size }), className)}>
      <input
        onChange={(e) => !disabled && onChange?.(e)}
        type="radio"
        name={question}
        id={id}
        value={value}
        className="w-5 h-5 text-blue-600 border-gray-300 active:ring-brand"
        disabled={disabled}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </li>
  );
}
