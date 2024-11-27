import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type ButtonProps = {
  disabled?: boolean;
} & VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const button = cva(
  "py-3 px-4 rounded-xs flex disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-neutral-disabled align-middle items-center gap-2",
  {
    variants: {
      intent: {
        primary:
          "bg-brand-standard text-static-primary disabled:bg-brand-disabled",
        secondary: "bg-brand-light text-neutral-primary",
      },
    },
  }
);

export default function Button({
  onClick,
  intent,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ intent, className })}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      {...props}
    >
      {children}
    </button>
  );
}
