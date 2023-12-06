"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "./button";

export const SignInButton = () => {
    const { data, status } = useSession();

    return <Button onClick={() => signIn("microsoft")}>SignIn</Button>
}