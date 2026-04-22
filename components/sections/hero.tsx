"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa"
import { siteConfig } from "@/lib/siteConfig"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const socialLinks = [
  { icon: FaWhatsapp, href: `https://wa.me/${siteConfig.contact.whatsapp}`, label: "WhatsApp" },
  { icon: FaFacebook, href: siteConfig.socmed.facebook, label: "Facebook" },
  { icon: FaInstagram, href: siteConfig.socmed.instagram, label: "Instagram" },
  { icon: FaLinkedin, href: siteConfig.socmed.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: siteConfig.socmed.github, label: "GitHub" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-12 sm:py-24 pt-24"
    >

      {/* GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(139,92,246,0.25) 1px, transparent 200px),
        linear-gradient(to bottom, rgba(236,72,153,0.25) 1px, transparent 200px)
      `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Blur semua sisi (atas, bawah, kiri, kanan) */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />

      {/* Background gradient decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" /> */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="z-20 mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="mb-2 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.developer}</span>
          </h1>
          {/* <p className="mb-6 text-xl font-semibold text-violet-600 dark:text-violet-400 md:text-2xl">
            Web Developer & Programmer
          </p> */}
          <p className="mb-6 text-xl font-semibold md:text-2xl bg-linear-to-r from-violet-500 to-violet-950 dark:to-white bg-clip-text text-transparent">
            Web Developer & Programmer
          </p>

          <p className="mb-6 max-w-lg text-base text-muted-foreground">
            Passionate about building modern, performant web applications with
            clean code and great user experiences. Specializing in React,
            Next.js, PHP, Laravel and full-stack development.
            <br />
            <span className="mt-2 block text-sm italic text-muted-foreground/70">
              ~ Light Mode Developer
            </span>
          </p>

          {/* Social icons */}
          <div className="mb-8 flex items-center gap-3">
            {socialLinks.map((social) => (
              <Tooltip
                key={social.label}
              >
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg p-2.5 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    <social.icon className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  {social.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-5 py-5 text-md"
                  asChild
                >
                  <a href="/CV ATS Hanggara Bima Pramesti (11-04-2026).pdf" download>
                    <FaDownload className="mr-1 size-4" />
                    Download CV
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Download CV
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto gradient-bg transition-colors duration-300 border-0 text-white hover:opacity-90 rounded-full px-5 py-5 text-md"
                >
                  <a href="#contact">
                    <FaEnvelope className="mr-1 size-4" />
                    Contact Me
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Contact Me
              </TooltipContent>
            </Tooltip>
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="gradient-bg absolute inset-0 rounded-full opacity-20 blur-2xl" />
            <div className="relative size-72 md:size-128 scale-x-[-1]">
              <Image
                src="/images/hero-1.png"
                alt={siteConfig.developer}
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}