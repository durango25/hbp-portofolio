"use client"


import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { TimelineEducation, TimelineExperience, TimelineEducationItem, TimelineExperienceItem } from "@/components/sections/timeline"
import { motion } from "framer-motion"

const education: TimelineEducationItem[] = [
  {
    title: "Information System",
    institution: "Universitas Riau",
    period: "2016 - 2020",
    gpa: "3.84 / 4",
    description:
      "Studied information system design procedures, programming, management, and business process analysis.",
  },
  {
    title: "Software Engineering",
    institution: "SMK Negeri 7 Pekanbaru",
    period: "2013 - 2016",
    gpa: "8.1 / 100",
    description:
      "Learned the fundamentals of software development, including programming, databases, and building desktop and web-based applications.",
  },
]

const experience: TimelineExperienceItem[] = [
  {
    title: "Tenaga Ahli Pemrograman dan Database",
    company: "Dinas Komunikasi Informatika Statistik dan Persandian Pekanbaru",
    period: "Nov 2020 - Mar 2026",
    description: [
      'Create and develop information systems to support electronic-based governance systems, and smart madani government in pekanbaru city.',
      'Collaborate to develop applications for the needs of organizations within the Pekanbaru city government environment.'
    ]
  },
  {
    title: "Internship",
    company: "PT. Awal Bros Pekanbaru",
    period: "Aug 2020 - Oct 2020",
    description: [
      'Internships, create several applications such as employee data collection and Asset Inventory. Application development is created with web-based application codeigniter framework.'
    ]
  },
  {
    title: "Programmer Assistant",
    company: "Biyan Soft Pekanbaru",
    period: "Jul 2017 - Sep 2020",
    description: [
      'Create and develop application requested.',
      'Open teaching classes on basic programming.'
    ]
  },
  {
    title: "Internship",
    company: "Grand Central Hotel Pekanbaru",
    period: "Jan 2015 - Mar 2015",
    description: [
      'SMK internship program. Working in accounting, checking CCTV files, and general duties as an intern.'
    ]
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 sm:py-20">

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
            My Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education & Experience</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Education */}
          <div className="col-span-full md:col-span-2">
            <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <FaGraduationCap className="text-violet-600" />
              Education
            </h4>
            <TimelineEducation items={education} icon={<FaGraduationCap className="size-3.5" />} />
          </div>

          {/* Work */}
          <div className="col-span-full md:col-span-3">
            <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <FaBriefcase className="text-pink-500" />
              Work Experience
            </h4>
            <TimelineExperience items={experience} icon={<FaBriefcase className="size-3.5" />} />
          </div>
        </div>
      </div>
    </section>
  )
}
