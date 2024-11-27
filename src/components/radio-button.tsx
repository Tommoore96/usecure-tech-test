import { cva, VariantProps } from "class-variance-authority";
import Tick from "../assets/icons/tick.svg?react";
import Cross from "../assets/icons/cross.svg?react";
import Warning from "../assets/icons/warning.svg?react";
import React from "react";

type RadioButtonProps = {
  question: string;
  label: string;
} & VariantProps<typeof radioButton> &
  React.InputHTMLAttributes<HTMLInputElement>;

const radioButton = cva(
  "flex items-center w-full border-1 rounded-xs px-3 py-[10px] disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary:
          "bg-neutral border-neutral-default hover:opacity-80 hover:opacity-80 focus-within:ring-2 focus-within:ring-brand-standard focus-within:ring-offset-2",
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
  ...props
}: RadioButtonProps) {
  let Icon;

  if (intent === "correct") {
    Icon = Tick;
  } else if (intent === "warning") {
    Icon = Warning;
  } else if (intent === "danger") {
    Icon = Cross;
  }

  return (
    <li className={radioButton({ intent, size, className })}>
      {intent === "primary" ? (
        <input
          onChange={(e) => !disabled && onChange?.(e)}
          type="radio"
          id={id}
          value={value}
          className="min-w-3.5 min-h-3.5 text-blue-600 border-neutral-elevated focus:ring-brand-standard border-1.5"
          disabled={disabled}
          {...props}
        />
      ) : (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}
      <label htmlFor={id} className="ml-2 text-lg w-full">
        {label}
      </label>
    </li>
  );
}
