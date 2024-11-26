import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

type RadioButtonProps = {
  question: string;
  id: string;
  value: string;
  label: string;
  className?: string;
} & VariantProps<typeof radioButton>;

const radioButton = cva(
  "flex items-center w-full border rounded-lg px-3 py-[10px]",
  {
    variants: {
      intent: {
        primary:
          "bg-radio-neutral border-neutral border-1 hover:opacity-80 hover:opacity-80 active:ring-2 active:ring-brand active:ring-offset-2",
        warning: "bg-radio-warning",
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
}: RadioButtonProps) {
  return (
    <li className={cn(radioButton({ intent, size }), className)}>
      <input
        type="radio"
        name={question}
        id={id}
        value={value}
        className="w-5 h-5 text-blue-600 border-gray-300 active:ring-brand"
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </li>
  );
}
