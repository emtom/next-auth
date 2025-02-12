"use server"

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export async function register(values: z.infer<typeof RegisterSchema>) {
  console.log('VALUES', values);

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields"
    }
  }

  return {
    success: "success"
  }
}