import classNames from "classnames";
import { twMerge } from "tailwind-merge";

/**
 * Helper function to combine classnames and tailwind-merge.
 * @param args - Class strings, conditionally applied classes, or arrays of classes.
 * @returns A resolved class string with conflicts handled.
 */
export function cn(...args: Parameters<typeof classNames>) {
  return twMerge(classNames(...args));
}
