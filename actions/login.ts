"use server"

import { AuthError } from "next-auth";
import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";

export async function login(values: z.infer<typeof LoginSchema>) {
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
      redirect: false
    });

    return {
      success: "Sign in successful"
    } 
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Sign in failed" }
        default:
          return { error: "Something went wronng" }
      }
    }
    
    throw error;
  } 
}