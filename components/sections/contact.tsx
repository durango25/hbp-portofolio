"use client"

import { motion } from "framer-motion"
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHeart,
} from "react-icons/fa"
import { siteConfig } from "@/lib/siteConfig"
import { AvailabilityNoteSection } from "./availability-note"

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteConfig.contact.phone,
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: `${siteConfig.location.city}, ${siteConfig.location.province}`,
    href: undefined,
  },
]

const socialLinks = [
  { icon: FaFacebook, href: siteConfig.socmed.facebook, label: "Facebook" },
  { icon: FaInstagram, href: siteConfig.socmed.instagram, label: "Instagram" },
  { icon: FaLinkedin, href: siteConfig.socmed.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: siteConfig.socmed.github, label: "GitHub" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-20">

      {/* Background gradient decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-medium tracking-wider text-violet-600 uppercase dark:text-violet-400">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Contact Me</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Feel free to reach out to me for collaboration, freelance work, or
              just to say hello. I&apos;m always open to new opportunities and
              interesting projects.
            </p>
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg gradient-bg text-white">
                  <info.icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border p-2.5 text-muted-foreground transition-colors hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  <social.icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border shadow-sm"
          >
            <iframe
              src={siteConfig.location.embed_maps}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>


      <div className="mt-24 mx-auto max-w-4xl px-6">
        <AvailabilityNoteSection />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Developer Portfolio <FaHeart className="inline size-3 text-pink-500" /> by{" "}
          <span className="font-medium gradient-text">
            {siteConfig.developer}
          </span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.organization}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
