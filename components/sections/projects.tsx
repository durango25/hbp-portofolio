"use client"

import { motion } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const projects = [
  {
    title: "Beauty Clinic Management System",
    organization: "Mische Aesthetic Clinic",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "ExpressJS", "TypeScript", "HeroUI", "Tailwind CSS", "Framer Motion", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/durango25",
    demo: [
      "https://app.mischeaesthetic.com",
      "https://mischeaesthetic.com",
    ],
  },
  {
    title: "Sistem Retribusi Pemotongan Hewan (Sitri Rupawan)",
    organization: "Dinas Pertanian dan Perikanan Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "TypeScript", "HeroUI", "Tailwind CSS", "Framer Motion", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Pekanbaru AMAN (SuperApp) (Backend)",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: [
      "https://superapp.pekanbaru.go.id",
      "https://play.google.com/store/apps/details?id=com.diskominfo.aman_superapp"
    ],
  },
  {
    title: "Single Sign-On (SSO) Pekanbaru",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://sso.pekanbaru.go.id",
  },
  {
    title: "Portal Jaringan Dokumentasi dan Informasi Hukum (JDIH)",
    organization: "Bagian Hukum Sekretariat Daerah Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "JSX", "MaterialUI", "PHP", "Lumen", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://jdih.pekanbaru.go.id",
  },
  {
    title: "Aplikasi Bahas Legislasi Ditangan Sekarang (BALADANG)",
    organization: "Bagian Hukum Sekretariat Daerah Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "JSX", "MaterialUI", "PHP", "Lumen", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://baladang.pekanbaru.go.id",
  },
  {
    title: "Portal Satu Data Pekanbaru",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "TypeScript", "HeroUI", "Tailwind CSS", "Framer Motion", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://satudata.pekanbaru.go.id",
  },
  {
    title: "Dashboard Keong Emas Disnaker",
    organization: "Dinas Tenaga Kerja Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["ReactJS", "NextJS", "JSX", "MaterialUI", "PHP", "Laravel", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://dashboard-disnaker.pekanbaru.go.id",
  },
  {
    title: "Pendaftaran Lomba Lari Maraton FunRun Pekanbaru",
    organization: "Kota Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Sistem Informasi Belanja (SIBEL)",
    organization: "Dinas Pekerjaan Umum dan Perumahan Rakyat Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://sibel-pupr.pekanbaru.go.id",
  },
  {
    title: "Pekanbaru Investment Center (PIC)",
    organization: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://pic.pekanbaru.go.id",
  },
  {
    title: "Portal Sinona Kepang",
    organization: "Dinas Ketahanan Pangan Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://sinonakepang.pekanbaru.go.id",
  },
  {
    title: "Portal Sipuan Penari",
    organization: "Dinas Pertanian dan Perikanan Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://sipuanpenari.pekanbaru.go.id",
  },
  {
    title: "Penjadwalan Muballigh IKMI Pekanbaru",
    organization: "Idaroh Kemakmuran Masjid Indonesia Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://ikmi.pekanbaru.go.id",
  },
  {
    title: "Pendaftaran Kerjasama Media MitraKominfo",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://mitrakominfo.pekanbaru.go.id",
  },
  {
    title: "Evaluasi Tenaga Kerja Bidang SPBE Diskominfo",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Portal Smart Tourism",
    organization: "Dinas Kebudayaan dan Pariwisata Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://smarttourism.pekanbaru.go.id",
  },
  {
    title: "Pekanbaru Dalam Genggaman App (API pekanbaru.go.id)",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://play.google.com/store/apps/details?id=com.kominfopk.pkugoid",
  },
  {
    title: "Sisfo Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM)",
    organization: "Kota Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Whistleblowing System (WBS)",
    organization: "Inspektorat Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://wbs.pekanbaru.go.id",
  },
  {
    title: "Vaksinasi Covid-19 (VCP)",
    organization: "Dinas Kesehatan Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Geographic Information System for Aplikasi Data Rumah",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "PostgreSQL", "ArcGIS"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Website Portal Resmi Pemerintah Kota Pekanbaru - Pekanbaru.go.id",
    organization: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Laravel", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://www.pekanbaru.go.id",
  },
  {
    title: "Sisfo Pendataan Karyawan dan Inventaris Aset",
    organization: "PT. Awal Bros Pekanbaru",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "CodeIgniter", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Sistem Akuntansi Keuangan Desa",
    organization: "Lecturer Research Project, Case Study: Kabupaten Pelalawan",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "CodeIgniter", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "#",
  },
  {
    title: "Portal Kerja Praktek FMIPA UNRI",
    organization: "Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Riau",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://aplikasifmipa.unri.ac.id/emag",
  },
  {
    title: "Sisfo Pendamping Akademik FH UNRI",
    organization: "Fakultas Hukum Universitas Riau",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "CodeIgniter", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://aplikasifmipa.unri.ac.id/emag",
  },
  {
    title: "Sistem Informasi Repositori Tugas Akhir (SIRTA) FMIPA UNRI",
    organization: "Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Riau",
    description: "No Description (Coming Soon)",
    tech: ["PHP", "Bootstrap CSS", "MySQL"],
    github: "https://github.com/durango25",
    demo: "https://aplikasifmipa.unri.ac.id/sirta",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12 sm:py-20">

      {/* Background gradient decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
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
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Project Experience</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm italic leading-relaxed text-muted-foreground">
            *Most of my projects are maintained in private repositories. Below are a few selected works that represent the kind of solutions I have built and contributed to. <br />
            *Please note that some links may be outdated or no longer accessible due to updates or changes in the applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full">
                <CardHeader className="gap-2">
                  <CardTitle>
                    <h4>{project.title}</h4>
                    {project.organization && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.organization}</span>
                    )}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        className="bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border-0"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </Button>
                  {project.demo !== "#" &&
                    (Array.isArray(project.demo) ? project.demo : [project.demo]).map(
                      (link, i) => (
                        <Button
                          key={i}
                          size="icon"
                          asChild
                          className="gradient-bg transition-colors duration-300 border-0 text-white hover:opacity-90"
                        >
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="size-3" />
                          </a>
                        </Button>
                      )
                    )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
