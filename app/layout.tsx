import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

// MADE TOMMY font configuration
const madeTommy = localFont({
  src: [
    {
      path: './fonts/MADE TOMMY Thin_PERSONAL USE.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY Light_PERSONAL USE.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY Regular_PERSONAL USE.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY Medium_PERSONAL USE.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY Bold_PERSONAL USE.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY ExtraBold_PERSONAL USE.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/MADE TOMMY Black_PERSONAL USE.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-made-tommy',
  fallback: ['Inter', 'system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.nedapay.io'),
  title: 'NEDApay Documentation - East African Payment Protocol',
  description: 'Complete developer documentation for NEDApay - the decentralized payment routing protocol for East Africa. Integrate instant, secure, zero-fee payments.',
  keywords: 'NEDApay, East Africa, payments, API, documentation, Tanzania, Kenya, Uganda, mobile money, stablecoins',
  authors: [{ name: 'NEDApay Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'NEDApay Documentation',
    description: 'Developer documentation for East African payment protocol',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.nedapay.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${madeTommy.variable} ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          themes={["light", "dark"]}
          storageKey="nedapay-theme"
        >
          <div className="min-h-screen bg-background">
            <Header />
            <div className="flex pt-26">
              <Sidebar />
              <main className="flex-1 ml-64">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
