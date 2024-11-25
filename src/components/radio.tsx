import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type RadioButtonProps = {
  name: string;
  id: string;
  value: string;
  text: string;
} & VariantProps<typeof radioButton>;

const radioButton = cva("radioButton", {
  variants: {
    intent: {
      primary: "bg-radio-neutral border-neutral border-1 hover:opacity-80",
    },
    size: {
      medium: "px-3 py-[10px]",
    },
  },
});

export default function RadioButton({
  name,
  id,
  value,
  text,
  intent,
  size,
}: RadioButtonProps) {
  return;
}
