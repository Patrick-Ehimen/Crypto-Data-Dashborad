import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This function combines class names using clsx
// and then merges them using tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
