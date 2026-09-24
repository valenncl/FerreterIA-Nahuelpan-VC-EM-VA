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
      <a
        href="https://wa.me/5492804240468"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:brightness-105 text-white font-bold px-5 py-3 rounded-full text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
      >
        <span className="text-lg">💬</span> Contactarse
      </a>
    </div>
  )
}