'use client'

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "../ui/button";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, mode = "redirect", asChild = false }: LoginButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogin = () => {
    router.push('/auth/login');
  }

  return (
    <Button variant={'secondary'} size={'lg'} onClick={handleLogin} disabled={isPending} asChild={asChild}>
      {children}
    </Button>
  )
}