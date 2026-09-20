import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutPublicoProps {
  children: ReactNode
}

export function LayoutPublico({ children }: LayoutPublicoProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}