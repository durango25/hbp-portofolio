import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export interface TimelineEducationItem {
  title: string
  institution: string
  period: string
  gpa?: string
  description: string
}

export interface TimelineExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

export interface TimelineEducationProps {
  items: TimelineEducationItem[]
  icon: React.ReactNode
  className?: string
}

export interface TimelineExperienceProps {
  items: TimelineExperienceItem[]
  icon: React.ReactNode
  className?: string
}

export function TimelineEducation({ items, icon, className }: TimelineEducationProps) {
  return (
    <div className={cn("relative flex flex-col gap-6", className)}>
      {/* Continuous timeline line */}
      <div className="absolute top-0 left-3.75 h-full w-px bg-linear-to-b from-violet-500 to-pink-500 opacity-30" />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pl-10"
        >
          {/* Dot */}
          <div className="absolute top-0 left-0 z-10 flex size-8 items-center justify-center rounded-full gradient-bg transition-colors duration-300 text-white">
            {icon}
          </div>
          {/* <div className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold">{item.title}</h4>
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {item.institution}
                </p>
              </div>
              <span className="md:whitespace-nowrap inline-block rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                {item.period}
              </span>
            </div>
            {item.gpa && (
              <p className="text-xs text-muted-foreground mt-1">GPA {item.gpa}</p>
            )}
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div> */}
          {/* <Card className="transition-shadow hover:shadow-md gap-0 p-5"> */}

          <Card className="transition-colors gap-0 p-5 duration-300 hover:shadow-md border hover:border-violet-500">
            <CardHeader className="p-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base font-semibold">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {item.institution}
                  </p>
                </div>

                <span className="inline-block rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 md:whitespace-nowrap dark:bg-violet-500/20 dark:text-violet-300">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {item.gpa && (
                <p className="mt-1 text-xs text-muted-foreground">
                  GPA {item.gpa}
                </p>
              )}

              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function TimelineExperience({ items, icon, className }: TimelineExperienceProps) {
  return (
    <div className={cn("relative flex flex-col gap-6", className)}>
      {/* Continuous timeline line */}
      <div className="absolute top-0 left-3.75 h-full w-px bg-linear-to-b from-violet-500 to-pink-500 opacity-30" />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pl-10"
        >
          {/* Dot */}
          <div className="absolute top-0 left-0 z-10 flex size-8 items-center justify-center rounded-full gradient-bg transition-colors duration-300 text-white">
            {icon}
          </div>
          {/* <div className="rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold">{item.title}</h4>
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {item.company}
                </p>
              </div>
              <span className="md:whitespace-nowrap inline-block rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                {item.period}
              </span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div> */}

          <Card className="transition-colors gap-0 p-5 duration-300 hover:shadow-md border hover:border-violet-500">
            <CardHeader className="p-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base font-semibold">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {item.company}
                  </p>
                </div>

                <span className="inline-block rounded-full bg-violet-100 px-3 py-0.5 text-xs font-medium text-violet-700 md:whitespace-nowrap dark:bg-violet-500/20 dark:text-violet-300">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
