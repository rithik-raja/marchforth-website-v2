import { type Metadata } from 'next'

import '@/styles/tailwind.css'
import { ToasterProvider } from '@/components/ToasterProvider'

export const metadata: Metadata = {
  title: {
    template: '%s - MarchForth',
    default: 'MarchForth - Software consultancy based in Tampa, FL',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <ToasterProvider />
      </body>
    </html>
  )
}
