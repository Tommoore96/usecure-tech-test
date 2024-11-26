import React, { ReactElement, ReactHTMLElement } from "react";
import { cn } from "../utils/cn";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-neutral text-xs px-2 py-1 text-neutral-primary border-1 border-neutral rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
}
