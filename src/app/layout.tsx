import './globals.css'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
const Header = dynamic(() => import("@/components/header"));
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read and write blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          <Header />
            {children}
        </body>
      </Suspense>
    </html>
  )
}