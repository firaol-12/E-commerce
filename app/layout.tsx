import type { Metadata } from "next"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "MyShop",
  description: "My ecommerce website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}

        <main>
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  )
}