import { Metadata } from "next"
import { BookMarketingHero } from "@/components/services/book-marketing/hero"

export const metadata: Metadata = {
  title: "Book Marketing Services | Best Seller Strategy",
  description:
    "Comprehensive book marketing services including Amazon Ads, social media promotion, and launch strategies to make your book a bestseller.",
}
import { BookMarketingContent } from "@/components/services/book-marketing/content-section"
import { MarketingStrategies } from "@/components/services/book-marketing/marketing-strategies"
import { MarketingCaseStudies } from "@/components/services/book-marketing/case-studies"
import { MarketingPerformanceMetrics } from "@/components/services/book-marketing/performance-metrics"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing the generic CTA

export default function BookMarketingPage() {
  return (
    <main className="min-h-screen">
      <BookMarketingHero />
      <BookMarketingContent />
      <MarketingStrategies />
      <MarketingCaseStudies />
      <MarketingPerformanceMetrics />
      <CtaSection />
    </main>
  )
}
