"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import { siteConfig } from "@/lib/siteConfig"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Experiences", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifs", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(() => () => { }, () => true, () => false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // const words = siteConfig.developer.split(' ');
  // const firstLine = words.slice(0, 1).join(' ');
  // const secondLine = words.slice(1).join(' ');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "fixed top-4 sm:top-2 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-xl sm:rounded-full border px-6 py-3 transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background/70 dark:shadow-white/5 shadow-lg backdrop-blur-lg"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="size-9"
          />
          <span className="text-sm font-bold leading-tight gradient-text">
            {/* {firstLine}
            <br />
            {secondLine} */}
            {siteConfig.short_name.split(' ')[0]}
            <br />
            {siteConfig.short_name.split(' ')[1]}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Tooltip key={link.href}>
              <TooltipTrigger asChild>
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-2 rounded-full cursor-pointer"
                >
                  {theme === "dark" ? <FaSun /> : <FaMoon />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </TooltipContent>
            </Tooltip>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 flex flex-col gap-1 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
