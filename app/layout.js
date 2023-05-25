import React from 'react';
import Navigation from '../components/navigation'
import '../styles/globals.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrea Hernandez',
  description: 'Front End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

