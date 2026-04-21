"use client"

import Image from "next/image"
import { siteConfig } from "@/lib/siteConfig"
import { motion } from "framer-motion"

export function ProfileSection() {
  return (
    <section id="profile" className="relative py-12 sm:py-20">

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
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Profile</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 sm:order-1 space-y-5"
          >
            {/* <p className="text-lg leading-relaxed text-muted-foreground">
              I am a dedicated Software Developer with a strong passion for
              building innovative web solutions. With expertise in{" "}
              <span className="font-semibold text-foreground">TypeScript</span>,{" "}
              <span className="font-semibold text-foreground">React</span>, and{" "}
              <span className="font-semibold text-foreground">Next.js</span>, I
              specialize in creating responsive, user-friendly applications that
              deliver exceptional digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond web development, I have hands-on experience with{" "}
              <span className="font-semibold text-foreground">Laravel</span> for
              backend development,{" "}
              <span className="font-semibold text-foreground">Unity</span> for
              game and interactive application development, and database
              management with{" "}
              <span className="font-semibold text-foreground">MySQL</span>. I
              believe in continuous learning and leveraging modern technologies
              to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a Software Engineering graduate with a strong foundation in web development.
              I am highly motivated, adaptable, fast learner, and responsible with a passion for building scalable and
              efficient applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I enjoy building functional and user-friendly applications, and I am always eager to learn new
              technologies. Seeking a position in an IT related department, willing to learn new things and deepen the
              things i've learnt.
            </p> */}

            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a dedicated Software Developer with a strong foundation and more than <span className="font-semibold text-foreground">5 years</span> experience in web development.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am highly motivated, adaptable, fast learner, and responsible with a passion for building scalable and efficient applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I enjoy building functional and user-friendly applications, and I am always eager to learn new technologies, willing to learn new things and deepen the things i{"`"}ve learnt.
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 sm:order-2 flex justify-center"
          >
            <div className="relative w-full sm:w-fit">
              <div className="gradient-bg absolute inset-0 rounded-2xl opacity-20 blur-2xl" />
              <div className="relative w-full overflow-hidden rounded-2xl border bg-card p-2 shadow-lg hover:rotate-5 transition-all">
                <div className="relative h-72 w-full rounded-xl overflow-hidden bg-linear-to-br from-violet-100 to-pink-100 dark:from-violet-500/10 dark:to-pink-500/10 md:h-80 md:w-72">
                  <Image
                    src="/images/profile-ori-1.jpg"
                    alt={siteConfig.developer}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
              </div>
              <span className="mt-2 text-sm text-center block text-pink-500 dark:text-pink-400"> August 25, 1998 ~ Virgo </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
