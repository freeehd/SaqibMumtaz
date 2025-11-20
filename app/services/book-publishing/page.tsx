import { Metadata } from "next"
import { BookPublishingHero } from "@/components/services/book-publishing/hero"

export const metadata: Metadata = {
  title: "Book Publishing Services | Professional Publishing",
  description:
    "Professional book publishing services guiding you from manuscript to marketplace. Editing, formatting, cover design, and distribution.",
}
import { BookPublishingContent } from "@/components/services/book-publishing/content-section"
import { PublishingPricingPackages } from "@/components/services/book-publishing/pricing-packages"
import { PublishingProcessWorkflow } from "@/components/services/book-publishing/publishing-workflow"
import { QualityShowcase } from "@/components/services/book-publishing/quality-showcase"
import { PublishingPartners } from "@/components/services/book-publishing/publishing-partners"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing the generic CTA

export default function BookPublishingPage() {
  return (
    <main className="min-h-screen">
      <BookPublishingHero />
      <BookPublishingContent />
      <PublishingPricingPackages />
      <PublishingProcessWorkflow />
      {/* <QualityShowcase />
      <PublishingPartners /> */}
      <CtaSection />
    </main>
  )
}
