import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/siteConfig"
import { fontSans, fontMono } from "@/lib/fonts"
import { TooltipProvider } from "@/components/ui/tooltip"

const siteUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s - ${siteConfig?.site_name}`,
    default: siteConfig?.site_name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Hanggara Bima Pramesti' }],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig?.site_name,
    title: siteConfig?.site_name,
    description: siteConfig?.description,
    url: siteUrl,
    images: [
      {
        url: "/images/banner.png",
        // width: 500,
        // height: 500,
        type: "image/png",
        alt: siteConfig?.site_name
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
