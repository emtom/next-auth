'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { BackButton } from "./back-button";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  heading: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({ children, heading, backButtonLabel, backButtonHref }: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <Social />
      </CardFooter>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}