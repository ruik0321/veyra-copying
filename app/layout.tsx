import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const libreCaslon = localFont({
  src: [
    {
      path: "../public/fonts/LibreCaslonCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LibreCaslonCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
  path: "../public/fonts/LibreCaslonCondensed-Italic.ttf",
  weight: "400",
  style: "italic",
},
  ],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Veyra",
  description: "Business and SaaS Landing Page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${geist.variable} ${geistMono.variable} ${libreCaslon.variable}`}>
        <div id="viewport-wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}