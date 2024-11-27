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
  "flex items-center w-full border-1 rounded-xs px-3 py-[10px] disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary:
          "bg-neutral border-neutral hover:opacity-80 hover:opacity-80 not-disabled:active:ring-2 not-disabled:active:ring-brand-standard active:ring-offset-2",
        correct: "bg-success border-success",
        warning: "bg-warning border-warning",
        danger: "bg-danger border-danger",
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
    <li className={radioButton({ intent, size, className })}>
      <input
        onChange={(e) => !disabled && onChange?.(e)}
        type="radio"
        name={question}
        id={id}
        value={value}
        className="min-w-3.5 min-h-3.5 text-blue-600 border-neutral-elevated active:ring-brand-standard border-1.5"
        disabled={disabled}
      />
      <label htmlFor={id} className="ml-2 text-lg w-full">
        {label}
      </label>
    </li>
  );
}
