import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"

export const metadata: Metadata = {
  title: "About Saqib Mumtaz | Expert Book Marketer",
  description:
    "Learn about Saqib Mumtaz, a leading book marketing expert helping authors achieve bestseller status through data-driven strategies.",
}
import { JourneyTimeline } from "@/components/about/journey-timeline"
import { CredentialsSection } from "@/components/about/credentials-section"
import { PersonalMission } from "@/components/about/personal-mission"
import { ExpertiseShowcase } from "@/components/about/expertise-showcase"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ExpertiseShowcase />
      <JourneyTimeline />
      <CredentialsSection />
      <PersonalMission />
    </main>
  )
}
