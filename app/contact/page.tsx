import { Metadata } from "next"
import { HeroSection } from "@/components/contact/hero-section"

export const metadata: Metadata = {
  title: "Contact Us | Book Marketing Consultation",
  description:
    "Get in touch with Saqib Mumtaz for a free consultation on your book marketing strategy. Let's discuss how to make your book a bestseller.",
}
import { FreeConsultationDetails } from "@/components/contact/free-consultation-details"
import { ConsultationProcess } from "@/components/contact/consultation-process"
import { ContactMethods } from "@/components/contact/contact-methods"
import { FAQSection } from "@/components/contact/faq-section"
import { PartnershipOpportunities } from "@/components/contact/partnership-opportunities"
import { NextSteps } from "@/components/contact/next-steps"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FreeConsultationDetails />
      <ConsultationProcess />
      <ContactMethods />
      <FAQSection />
      <PartnershipOpportunities />
      <NextSteps />
    </main>
  )
}
