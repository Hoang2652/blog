import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense, lazy } from 'react'
const Header = lazy(() => import("@/components/header"));
import Container from '@mui/material/Container';
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
          <Container maxWidth="lg">
            {children}
          </Container>
        </body>
      </Suspense>
    </html>
  )
}