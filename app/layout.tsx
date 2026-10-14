import type { Metadata } from 'next'
import { Geist, Geist_Mono, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider'
import { Toaster } from 'react-hot-toast'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const robotoTest = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--custom-roboto-font',
})

export const metadata: Metadata = {
  title: 'My App',
  description: 'Generated my app',
  openGraph: {
    title: 'My App',
    description: 'Generated my app',
  },
  twitter: {
    title: 'Twitter MY APP !!!!',
  },
}

export default function RootLayout({ children, preview }: LayoutProps<'/'>) {
  return (
    <>
      <Toaster />
      <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <body className={robotoTest.variable}>
            <Header />
            <hr />
            <hr />
            <main>{children}</main>
            <div>{preview}</div>
          </body>
        </TanStackProvider>
      </html>
    </>
  )
}
