import { Metadata } from "next"
import { DigitalMarketingHero } from "@/components/services/digital-marketing/hero"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Grow Your Brand",
  description:
    "Data-driven digital marketing services to grow your author brand and business. SEO, PPC, social media, and content marketing.",
}
import { CoreDigitalMarketingServices } from "@/components/services/digital-marketing/core-services"
import { MarketingProcessWorkflow } from "@/components/services/digital-marketing/marketing-process-workflow"
import { ToolsTech } from "@/components/services/digital-marketing/tools-tech"
import { PricingPackages } from "@/components/services/digital-marketing/pricing-packages" // Re-added import
import { CtaSection } from "@/components/services/digital-marketing/cta-section"

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <DigitalMarketingHero />
      <CoreDigitalMarketingServices />
      <MarketingProcessWorkflow />
      <ToolsTech />
      <PricingPackages /> {/* Re-added section */}
      <CtaSection />
    </main>
  )
}
