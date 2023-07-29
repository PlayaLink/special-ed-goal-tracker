'use client'
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// ***This can't be on a client side components
// export const metadata = {
//   title: 'IEP Goal Tracker',
//   description: 'Tool for educators to create, track and visual ',
// }


import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body className={inter.className}>
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
    </body>
    </html>
  )
}
