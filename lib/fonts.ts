import { Poppins, Geist_Mono } from "next/font/google"
// import { Geist, Geist_Mono, Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})


// "antialiased",
// fontMono.variable,
// "font-sans",
// inter.variable
