import { authOptions } from "@/options/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { AuthBarrier } from "./authBarrier";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Helper',
  description: 'AI generated cv',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthBarrier session={session}>
          {children}
        </AuthBarrier>
      </body>
    </html>
  )
}
