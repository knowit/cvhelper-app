import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/layout/Header'
import { Providers } from './providers'
import { container } from '@styled-system/patterns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/options/authOptions'


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
        <Providers session={session!}>
          <Header />
          <main className={container({ display: "flex", width: "full", paddingInline: "6", paddingTop: "5" })}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
