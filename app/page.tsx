import { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Home | Saqib Mumtaz",
  description:
    "Transform your book into a bestseller with expert marketing strategies. Join thousands of successful authors.",
}
import { StatsSection } from "@/components/stats-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { FeaturedSuccess } from "@/components/featured-success"
import { GlobalPresence } from "@/components/global-presence"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Boxes, Rocket, Sparkles, Wrench } from "lucide-react"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

function SectionDivider() {
  return (
    <div className="w-full py-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  )
}

function SignaturePlaybooks() {
  const playbooks = [
    {
      icon: Sparkles,
      title: "Authority Engine",
      desc: "A repeatable content-to-demand system that builds trust, expands reach, and drives consistent engagement.",
      color: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: Rocket,
      title: "#1 Launch Framework",
      desc: "Positioning, offer design, and an Amazon-first rollout built to hit bestseller status in your category.",
      color: "from-emerald-500/10 to-teal-500/10",
    },
    {
      icon: Boxes,
      title: "Book-to-Business",
      desc: "Transform your book into a revenue engine with funnels, lead magnets, and automated nurture campaigns.",
      color: "from-amber-500/10 to-pink-500/10",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Signature playbooks
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Proven systems to help you sell more books, grow your audience, and scale your business.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {playbooks.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-50 pointer-events-none`} />
              <div className="relative space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur flex items-center justify-center shadow-sm">
                  <p.icon className="w-5 h-5 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolsStack() {
  const tools = [
    "Amazon Ads", "Meta Ads", "Google Ads", "GA4", "Looker Studio", "HubSpot",
    "Klaviyo", "Mailchimp", "Notion", "Airtable", "Figma", "Canva",
    "ChatGPT", "Midjourney", "Zapier", "Make", "Stripe", "Typeform",
  ]
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Tools & stack</h3>
              <p className="text-slate-600 text-sm">A practical toolkit I use daily to ship and scale</p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="bg-transparent">Discuss your setup</Button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-white">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold">Let&apos;s build something you&apos;re proud to promote</h3>
              <p className="text-blue-100 mt-2 text-lg">I&apos;ll help you pick the shortest path to meaningful results.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Book a free consult <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  See case studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectionDivider />
      <AboutPreview />
      <SectionDivider />
      <ServicesPreview />
      <SectionDivider />
      {/* <FeaturedSuccess /> */}
      <TestimonialsCarousel />
      <SectionDivider />
      <StatsSection />
      <SignaturePlaybooks />
      <ToolsStack />
      <GlobalPresence />
      <FinalCTA />
    </main>
  )
}
