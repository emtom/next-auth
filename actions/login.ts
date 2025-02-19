"use server"

import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";

export async function login(values: z.infer<typeof LoginSchema>) {
  console.log('VALUES', values);

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields"
    }
  }

  const { email, password } = validatedFields.data;
  
  try {
    const result = await signIn("credentials", {
      email,
      password,
    });

    return {
      success: "success"
    } 
  } catch (error) {
    return {
      error: "Invalid credentials"
    }
  } 
}