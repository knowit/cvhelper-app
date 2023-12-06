'use client'
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export type ProvidersProps = {
  children: ReactNode
  session: Session
}

const queryClient = new QueryClient();

export const Providers: FC<ProvidersProps> = ({ children, session }) => (
  <SessionProvider session={session} refetchInterval={3000}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" storageKey="theme" enableSystem={true} disableTransitionOnChange defaultTheme="dark">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  </SessionProvider>
)