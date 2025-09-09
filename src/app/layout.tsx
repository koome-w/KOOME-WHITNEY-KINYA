import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koome Whitney - Frontend Developer & Ethical Hacker',
  description: 'Professional portfolio showcasing frontend development expertise and ethical hacking skills. Specializing in React, Node.js, and cybersecurity.',
  keywords: ['frontend developer', 'ethical hacker', 'cybersecurity', 'react', 'nodejs', 'portfolio'],
  authors: [{ name: 'Koome Whitney' }],
  creator: 'Koome Whitney',
  openGraph: {
    title: 'Koome Whitney - Frontend Developer & Ethical Hacker',
    description: 'Professional portfolio showcasing frontend development expertise and ethical hacking skills.',
    url: 'https://koomewhitney.com',
    siteName: 'Koome Whitney Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Koome Whitney Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koome Whitney - Frontend Developer & Ethical Hacker',
    description: 'Professional portfolio showcasing frontend development expertise and ethical hacking skills.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
