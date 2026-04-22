import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/siteConfig"
import { fontSans, fontMono } from "@/lib/fonts"
import { TooltipProvider } from "@/components/ui/tooltip"
import { GoogleAnalytics } from "@next/third-parties/google"

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
        url: siteUrl + "/images/banner.png",
        width: 1600,
        height: 1600,
        type: "image/png",
        alt: siteConfig?.site_name
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSV || "",
  }
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
