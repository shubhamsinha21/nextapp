import Link from 'next/link'
import type {ReactNode} from 'react'
import "./globals.css"

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 App Router</title>
      </head>
      <body>
        <header style={{padding: 6, background:"lightblue"}}> 
          My App Navbar
          <nav style={{display:"flex", gap: 6,}}>
            <a href="/">Home</a>
            <Link href="/about">About</Link>
            <a href="/contact">Contact</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/blog">Blog</a>
            <a href="/products">Products</a>

          </nav>
        </header>
        {children}
        <footer style={{padding: 6, background:"lightgray"}}> My Footer </footer>
      </body>
    </html>
  )
}
