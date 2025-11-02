import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
//test
//test2
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Football Connect Morocco - Connecte joueurs et coachs',
  description: 'Plateforme pour connecter les joueurs de football avec les coachs au Maroc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}