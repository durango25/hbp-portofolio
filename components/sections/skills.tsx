"use client"

import { motion } from "framer-motion"
import { FaStar, FaTrophy } from "react-icons/fa"
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiPhp,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiLumen,
  SiCodeigniter,
  SiPostgresql,
} from "react-icons/si"

const achievements = [
  "Highest GPA in Information System 2018/2019 period",
  "Graduated Cumlaude and Highest GPA of Riau University Faculty Math and Science",
  // "Built multiple production-ready web applications using modern frameworks",
  // "Contributed to open-source projects on GitHub",
  // "Developed interactive applications and games using Unity Engine",
  // "Successfully delivered freelance projects with high client satisfaction",
  // "Continuous learner with multiple online certifications in web development",
]

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Lumen", icon: SiLumen },
  { name: "CodeIgniter", icon: SiCodeigniter },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-12 sm:py-20">

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
            What I Bring
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Achievement & Skill</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Achievements */}
          <div className="col-span-full md:col-span-2">
            <h4 className="mb-6 text-xl font-bold flex items-center gap-2">
              <FaTrophy className="text-yellow-500" />
              Achievements
            </h4>
            <ul className="space-y-4">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full gradient-bg" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills grid */}
          <div className="col-span-full md:col-span-3">
            <h4 className="mb-6 text-xl font-bold flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              Tech Stack
            </h4>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 shadow-sm transition-colors duration-300 hover:shadow-md hover:border-violet-500/50"
                >
                  <skill.icon className="size-8 text-muted-foreground transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  <span className="text-xs font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
