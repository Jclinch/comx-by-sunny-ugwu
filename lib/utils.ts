//path: lendsqr-fe-test\lib\utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    // sign-up fields (required only in sign-up form)
    userName:
      type === "login"
        ? z.string().optional()
        : z.string().min(1, "Username is required"),
    phoneNumber:
      type === "login"
        ? z.string().optional()
        : z.string().min(1, "Phone number is required"),
    organization:
      type === "login"
        ? z.string().optional()
        : z.string().min(1, "Organization is required"),

    // fields for both login and sign-up
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  });
