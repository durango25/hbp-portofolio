"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FaExternalLinkAlt, FaChevronDown, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    type: "Competence",
    name: "Certificate of Competence Software Development - Programmer",
    issuer: "Lembaga Sertifikasi Profesi Informatika",
    date: "Sep 2019",
    expiry: "Sep 2022",
    image: "/images/certificates/1.jpg",
    link: null,
  },
  {
    type: "Training",
    name: "Secure Web Programming",
    issuer: "Inixindo Jogja",
    date: "Mar 2023",
    expiry: null,
    image: "/images/certificates/2.jpg",
    link: "https://www.inixindo.id/my-account/verifikasi-sertifikat/38042",
  },
  {
    type: "Training",
    name: "Cyber Security Specialist",
    issuer: "Inixindo Jogja",
    date: "Mar 2023",
    expiry: "Mar 2026",
    image: "/images/certificates/3.jpg",
    link: "https://eduparx.id/others/verifyCertificate?number=Ic2022000377",
  },
  {
    type: "Training",
    name: "Sistem Manajemen Layanan Teknologi Informasi Government Transformation Academy Digital Talent Scholarship 2025",
    issuer: "BBPSDMP Medan Komdigi",
    date: "Feb 2025",
    expiry: null,
    image: "/images/certificates/4.png",
    link: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19998491040-5",
  },
  {
    type: "Training",
    name: "Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE) Micro Skill Digital Talent Scholarship 2025",
    issuer: "Pusat Pengembangan Aparatur Komdigi",
    date: "Feb 2025",
    expiry: null,
    image: "/images/certificates/5.png",
    link: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22998231320-684",
  },
  {
    type: "Training",
    name: "Dasar-dasar Mobile Programming Android dan Kotlin untuk Pemula",
    issuer: "Skill Academy by Ruangguru",
    date: "Mar 2021",
    expiry: null,
    image: "/images/certificates/6.jpg",
    link: "https://skillacademy.com/sertifikat/25ES2GJB23MR4I",
  },
  {
    type: "Training",
    name: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026",
    expiry: "Apr 2029",
    image: "/images/certificates/7.png",
    link: "http://dicoding.com/certificates/RVZK0R53QZD5",
  },
  {
    type: "Workshop",
    name: "Audit Keamanan Informasi dengan Center for Internet Security (CIS v8)",
    issuer: "Inixindo Jogja",
    date: "Mar 2023",
    expiry: null,
    image: "/images/certificates/8.jpg",
    link: "https://eduparx.id/others/verifyCertificate?number=d581ce8f-795e-483b-b901-74e496cc7eea",
  },
  {
    type: "Workshop",
    name: "Mengamankan Aplikasi Web dari Ancaman Peretasan yang Paling Sering Terjadi",
    issuer: "Inixindo Jogja",
    date: "May 2023",
    expiry: null,
    image: "/images/certificates/9.jpg",
    link: "https://eduparx.id/others/verifyCertificate?number=ff44a81f-6064-4cbf-a9be-9444c2f76bc1",
  },
  {
    type: "Workshop",
    name: "Bimbingan Teknis Kesiapan Implementasi Pelindungan Data Pribadi Bagi Badan Publik",
    issuer: "Kementerian Komunikasi dan Informatika Republik Indonesia",
    date: "Sept 2022",
    expiry: null,
    image: "/images/certificates/10.png",
    link: null,
  },
  {
    type: "Workshop",
    name: "Pengelolaan CSIRT Pemerintah Provinsi Riau (RIAUPROV-CSIRT]",
    issuer: "Diskominfo Provinsi Riau",
    date: "Sept 2022",
    expiry: null,
    image: "/images/certificates/11.png",
    link: null,
  },
  {
    type: "Training",
    name: "Bimbingan Teknis Administrasi Server dan Pengujian Keamanan Aplikasi Web",
    issuer: "Diskominfo Kota Pekanbaru",
    date: "Aug 2022",
    expiry: null,
    image: "/images/certificates/12.jpg",
    link: null,
  },
  {
    type: "Competence",
    name: "Kompetensi Keahlian Rekayasa Perangkat Lunak (UKK SMK)",
    issuer: "CV. REGISTRA MITRA SUKSES",
    date: "Mei 2016",
    expiry: null,
    image: "/images/certificates/13.jpg",
    link: null,
  },
]

const typeColors: Record<string, string> = {
  Competence:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  Training:
    "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  Workshop:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
}

export function CertificatesSection() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [prevCount, setPrevCount] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const visibleCerts = certificates.slice(0, visibleCount)
  const hasMore = visibleCount < certificates.length

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + certificates.length) % certificates.length))
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % certificates.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "ArrowRight") goNext()
      else if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIndex, goPrev, goNext])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  function handleShowMore(e: React.MouseEvent<HTMLButtonElement>) {
    const scrollY = window.scrollY
    e.currentTarget.blur()
    setPrevCount(visibleCount)
    setVisibleCount((prev) => prev + 3)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" })
      })
    })
  }

  const activeCert = lightboxIndex !== null ? certificates[lightboxIndex] : null

  return (
    <>
      <section id="certificates" className="relative py-12 sm:py-20">

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
              Credentials
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Training & Certificate</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCerts.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.max(0, i - prevCount) * 0.1 }}
                className=""
              >
                <Card className="h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  {/* Certificate image — clickable */}
                  <button
                    type="button"
                    className="relative aspect-video w-full overflow-hidden block cursor-zoom-in focus:outline-none"
                    onClick={() => {
                      const globalIdx = certificates.findIndex((c) => c.image === cert.image && c.name === cert.name)
                      openLightbox(globalIdx)
                    }}
                    aria-label={`Preview ${cert.name}`}
                  >
                    <Image
                      src={`/images/certificates/${cert.image.split("/").pop()}`}
                      alt={cert.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/20">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100">
                        Click to preview
                      </span>
                    </div>
                  </button>

                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        className={`border-0 ${typeColors[cert.type] || ""}`}
                      >
                        {cert.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-base">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span>{cert.date}</span>
                      {cert.expiry && (
                        <span className="ml-1 text-pink-500">
                          · Exp: {cert.expiry}
                        </span>
                      )}
                    </div>
                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                      >
                        <FaExternalLinkAlt className="size-3.5" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 flex justify-center"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-400"
              >
                Show More
                <FaChevronDown className="size-3.5" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeCert && lightboxIndex !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
              aria-label="Close preview"
            >
              <FaTimes className="size-4" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-xs text-white">
              {lightboxIndex + 1} / {certificates.length}
            </div>

            {/* Prev arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:left-6"
              aria-label="Previous"
            >
              <FaChevronLeft className="size-4" />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:right-6"
              aria-label="Next"
            >
              <FaChevronRight className="size-4" />
            </button>
            {/* Image + description overlay */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative mx-14 w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl md:mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={`/images/certificates/${activeCert.image.split("/").pop()}`}
                  alt={activeCert.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />

                {/* Description overlay — bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-5 py-5">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <Badge className={`border-0 text-xs ${typeColors[activeCert.type] || ""}`}>
                      {activeCert.type}
                    </Badge>
                    <span className="text-xs text-white/70">
                      {activeCert.date}{activeCert.expiry && ` · Exp: ${activeCert.expiry}`}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold leading-snug text-white md:text-base">{activeCert.name}</h4>
                  <p className="mt-0.5 text-xs text-white/60 md:text-sm">{activeCert.issuer}</p>
                  {activeCert.link && (
                    <a
                      href={activeCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 hover:underline"
                    >
                      View Certificate <FaExternalLinkAlt className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
