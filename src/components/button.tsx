import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type ButtonProps = {
  className?: string;
  disabled?: boolean;
} & VariantProps<typeof button> &
  React.HTMLAttributes<HTMLButtonElement>;

const button = cva("py-2 px-4 rounded-xs flex", {
  variants: {
    intent: {
      primary: "bg-brand-standard text-static-primary",
      secondary: "bg-brand-light text-neutral-primary",
    },
  },
});

export default function Button({
  onClick,
  intent,
  disabled,
  children,
  className,
}: ButtonProps) {
  return (
    <button className={button({ intent, className })} disabled={disabled}>
      {children}
    </button>
  );
}
