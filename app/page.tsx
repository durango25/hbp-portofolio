import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ProfileSection } from "@/components/sections/profile"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { CertificatesSection } from "@/components/sections/certificates"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection, Footer } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
