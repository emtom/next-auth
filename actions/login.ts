"use server"

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export async function login(values: z.infer<typeof LoginSchema>) {
  console.log('VALUES', values);

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields"
    }
  }

  return {
    success: "success"
  }
}