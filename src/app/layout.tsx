import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../../components/Navbar";
import Navigation from "../../components/Navigation";


const inter = Inter ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ihsan Amanullah',
  description: 'This is my portofolio',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body className={inter.className}>
      <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  )
}

