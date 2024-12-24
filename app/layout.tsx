import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ModernSocial',
  description: 'A modern social networking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <main className="container mx-auto mt-4 px-4 max-w-2xl">
          {children}
        </main>
      </body>
    </html>
  )
}

