"use client"

import { isNull, isUndefined } from "lodash-es"
import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import { redirect, useSearchParams } from "next/navigation"
import { FC, ReactNode } from "react"

export type AuthBarrierProps = {
  children: ReactNode
  session: Session | null
}

export const AuthBarrier: FC<AuthBarrierProps> = ({ children, session }) => {
  const searchParams = useSearchParams();
  if (typeof window === "undefined") return null;

  const callbackUrl = searchParams.get("callbackUrl") ?? "";
  if (isNull(session)) signIn("microsoft", { callbackUrl });
  else redirect(callbackUrl);
  
  return null;
} 