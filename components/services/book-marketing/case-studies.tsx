"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    client: "Brenda Bence",
    title: "Global Leadership Expert",
    image:
      "/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg",
    challenge:
      "Established leadership coach needed to expand book sales and reach new audiences through digital marketing.",
    strategy: [
      "Comprehensive Amazon PPC campaign optimization",
      "LinkedIn thought leadership content strategy",
      "Email marketing automation for lead nurturing",
      "Cross-platform social media integration",
    ],
    results: [
      "Multiple #1 Amazon Bestseller rankings",
      "300% increase in monthly book sales",
      "150% growth in email subscriber base",
      "Expanded speaking opportunities and consulting inquiries",
    ],
    timeline: "12-month comprehensive marketing campaign",
    successFactors: [
      "Consistent content creation that demonstrated expertise",
      "Strategic keyword targeting that reached ideal readers",
      "Integration of book marketing with broader business goals",
      "Long-term commitment to building author platform",
    ],
    testimonial:
      '"I have worked with Syed for the past year, as he helped me advertise one of our books on Amazon. Syed was devoted to doing what he could to help the book achieve good sales. In terms of actual sales revenues, there were ups and downs throughout the year - and Syed had warned me that would likely be the case. But now, the year of focus and attention has paid off, and the book has achieved strong sales and multiple bestseller status. I am grateful to Syed for his attention and suggestions!"',
  },
  {
    client: "Michael Ehiginwa (PMP, CBAP, ITIL)",
    title: "Author | Business Consultant | Senior Business Analyst | Empowering Individuals to Achieve Their Goals",
    image:
      "/images/testimonials/michael-ehiginwa--pmp--cbap--itil-.jpg",
    challenge:
      "New author needed to establish credibility and achieve bestseller status in competitive personal development market.",
    strategy: [
      "Strategic book launch campaign with coordinated timing",
      "Influencer outreach and collaboration strategy",
      "Amazon algorithm optimization for sustained rankings",
      "Content marketing that built thought leadership",
    ],
    results: [
      "#1 Amazon Bestseller in multiple categories",
      "Featured in major podcasts and media outlets",
      "Built engaged social media following of 10,000+ readers",
      "Developed speaking career based on book success",
    ],
    timeline: "5-month intensive launch and growth campaign",
    successFactors: [
      "Pre-launch audience building that created immediate momentum",
      "Strategic partnerships that expanded reach",
      "High-quality content that encouraged organic sharing",
      "Consistent engagement with reader community",
    ],
    testimonial:
      "I worked with Syed for about five months on my book. He was very professional and brought deep insights into book marketing. His experience is profound and his objectivity refreshing. I will definitely want to work with Syed again.",
  },
]

export function MarketingCaseStudies() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-600">
            <Star className="h-4 w-4" />
            Client Success Stories
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Real-World Results:
            <span className="text-green-600"> Transforming Authors into Bestsellers</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Explore detailed breakdowns of how our strategic book marketing campaigns have propelled authors to the top
            of their categories and built sustainable author businesses.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              {/* Left Content - Client Info & Testimonial */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Client Header */}
                      <div className="flex items-start gap-4">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.client}
                          width={80}
                          height={80}
                          className="rounded-full"
                          unoptimized
                        />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                          <p className="text-slate-600">{study.title}</p>
                          <div className="mt-2 flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="relative">
                        <Quote className="mb-4 h-8 w-8 text-blue-500" />
                        <blockquote className="text-lg italic leading-relaxed text-slate-700">
                          {study.testimonial}
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content - Strategy & Results */}
              <div className="space-y-8">
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-8">
                  <h4 className="mb-6 text-2xl font-bold text-slate-900">Challenge & Strategy</h4>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>
                  <h5 className="mb-3 text-lg font-semibold text-slate-800">Strategy Implemented:</h5>
                  <ul className="space-y-2">
                    {study.strategy.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-900 p-8 text-white">
                  <h4 className="mb-6 text-xl font-bold">Results Achieved</h4>
                  <ul className="mb-6 space-y-3">
                    {study.results.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <div className="font-semibold">Timeline:</div>
                    <div className="text-sm text-slate-300">{study.timeline}</div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="font-semibold">Key Success Factors:</div>
                    <ul className="space-y-2">
                      {study.successFactors.map((factor, factorIndex) => (
                        <li key={factorIndex} className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                          <span className="text-slate-300">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            View All Testimonials
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
