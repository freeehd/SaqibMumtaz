"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, CheckCircle } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    id: "brenda-bence",
    client: "Brenda Bence",
    title: "Global Leadership Coach & Keynote Speaker",
    genre: "Business Leadership",
    image: "/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg",

    resultsSummary: "Multiple #1 Bestseller Rankings",
    background:
      "Brenda Bence came to us as an established leadership coach and keynote speaker with a strong reputation in the corporate world. However, her books weren't achieving the sales levels that matched her expertise and speaking success. She needed a marketing partner who could translate her offline authority into online book sales.",
    challenge:
      "Despite having excellent content and a strong professional reputation, Brenda's books were struggling to gain traction on Amazon. Her previous marketing efforts had been inconsistent, and she lacked the time and expertise to manage complex digital marketing campaigns while maintaining her coaching and speaking commitments.",
    strategy: [
      "Amazon PPC Optimization: Complete restructuring of her advertising campaigns with advanced keyword targeting and bid optimization",
      "LinkedIn Integration: Leveraged her professional network to drive book awareness and sales",
      "Content Marketing: Developed a content calendar that showcased her expertise while promoting her books",
      "Email Marketing: Built and nurtured an email list of potential readers and clients",
      "Speaking Integration: Connected her speaking engagements with book promotion strategies",
    ],
    testimonial:
      '"I have worked with Syed for the past year, as he helped me advertise one of our books on Amazon. Syed was devoted to doing what he could to help the book achieve good sales. In terms of actual sales revenues, there were ups and downs throughout the year - and Syed had warned me that would likely be the case. But now, the year of focus and attention has paid off, and the book has achieved strong sales and multiple bestseller status. I am grateful to Syed for his attention and suggestions!"',
    quantifiedResults: [
      "Achieved multiple #1 Amazon Bestseller rankings",
      "300% increase in monthly book sales",
      "150% growth in email subscriber base",
      "Expanded speaking opportunities directly attributed to book success",
      "Generated over $50,000 in additional coaching revenue from book readers",
    ],
    timeline: "12 months of comprehensive marketing support",
    successFactors: [
      "Integration of book marketing with existing professional platform",
      "Consistent, long-term approach rather than quick-fix tactics",
      "Regular communication and strategy adjustments based on performance data",
      "Realistic expectation setting and patience during optimization periods",
    ],
  },
  {
    id: "gavin-coyle",
    client: "Gavin Coyle",
    title: "CEO & Safety Expert",
    genre: "Business/Safety",
    image: "/images/testimonials/gavin-coyle-cmiosh-i-mbs.jpg",
    resultsSummary: "#1 Category Bestseller",
    background:
      "Gavin Coyle, CEO of A&G Coyle Group Ltd, needed to establish thought leadership in the safety industry while generating leads for his consulting business through book marketing.",
    challenge:
      "As a busy CEO, Gavin had limited time to dedicate to book marketing but needed consistent results that would build his authority and generate business opportunities.",
    strategy: [
      "Hands-Off Campaign Management: Complete management of all marketing activities",
      "Industry-Specific Targeting: Focused campaigns targeting safety professionals and business leaders",
      "Authority Building: Positioned the book as essential reading for industry professionals",
      "Lead Generation Integration: Connected book readers to consulting opportunities",
    ],
    testimonial:
      '"Syed is amazing, he is a true expert in his field. He is always available and makes great recommendations to help make your book No 1 in its category. He also plays a vital role in managing how your book receives traffic to amazon. Highly recommended"',
    quantifiedResults: [
      "Achieved #1 ranking in Safety category",
      "Generated 200+ qualified leads for consulting business",
      "Increased industry recognition and speaking opportunities",
      "400% return on marketing investment through new business",
    ],
    timeline: "6-month intensive launch and growth campaign",
    successFactors: [
      "Pre-launch audience building that created immediate momentum",
      "Strategic partnerships that expanded reach",
      "High-quality content that encouraged organic sharing",
      "Consistent engagement with reader community",
    ],
  },
  {
    id: "albert-griesmayr",
    client: "Albert Griesmayr",
    title: "Publishing Industry Expert",
    genre: "Publishing/Business",
    image: "/images/testimonials/albert-griesmayr.jpg",
    resultsSummary: "Sustained Long-term Success",
    background:
      "Albert Griesmayr, CEO of Scribando, needed ongoing marketing support for multiple book projects and wanted to work with a trusted partner who understood the publishing industry.",
    challenge:
      "As a publishing industry insider, Albert needed marketing strategies that would work consistently across multiple books and authors while maintaining cost-effectiveness.",
    strategy: [
      "Multi-Book Campaign Management: Coordinated marketing across multiple titles",
      "Industry Expertise Integration: Leveraged Albert's publishing knowledge with marketing expertise",
      "Data-Driven Optimization: Continuous testing and refinement based on performance analytics",
      "Scalable Systems: Developed repeatable processes for ongoing success",
    ],
    testimonial:
      '"I got to know and value Syed as a trusted provider of Amazon Ads and Amazon SEO data over the last few years. I have consulted with him on multiple occasions on Amazon Advertising campaigns and his input was always valuable. He has lots of experience working on book marketing projects and a strong understanding of data and a passion for making books successful."',
    quantifiedResults: [
      "Consistent bestseller rankings across multiple titles",
      "250% improvement in advertising efficiency",
      "Reduced marketing costs while increasing sales volume",
      "Established long-term partnership spanning multiple years",
    ],
    timeline: "Ongoing partnership over multiple years",
    successFactors: [
      "Deep understanding of publishing industry nuances",
      "Flexibility to adapt strategies for different book types",
      "Focus on long-term ROI and sustainable growth",
      "Strong collaborative relationship built on trust",
    ],
  },
  {
    id: "uma-vanka",
    client: "Uma Vanka",
    title: "Management Consulting Expert",
    genre: "Business/Consulting",
    image: "/images/testimonials/uma-vanka.jpg",
    resultsSummary: "Complete Marketing Management",
    background:
      "Uma Vanka, a partner at TCS Management Consulting, needed comprehensive marketing support that she could trust to handle independently while she focused on her consulting work.",
    challenge:
      "Required a marketing partner who could take complete ownership of book marketing activities while providing transparent communication about performance and challenges.",
    strategy: [
      "End-to-End Management: Complete handling of all marketing activities",
      "Transparent Communication: Regular reporting and honest assessment of campaign performance",
      "Strategic Planning: Long-term marketing strategy aligned with business goals",
      "Reliable Execution: Consistent delivery of promised results and timelines",
    ],
    testimonial:
      '"Reliability, Ownership and Attention to Detail are the 3 qualities you get from Syed. You can leave your marketing activities to him and he will take care of them end-to-end. He will tell you when things go well and he will also tell you when he doesn\'t believe he cannot deliver. I have been working with him for years and besides ownership, this one quality keeps pushing me towards Syed again and again."',
    quantifiedResults: [
      "Achieved consistent monthly sales targets",
      "Built sustainable marketing systems requiring minimal oversight",
      "Generated qualified leads for consulting business",
      "Maintained profitable advertising campaigns over multiple years",
    ],
    timeline: "Ongoing partnership over multiple years",
    successFactors: [
      "High level of trust and autonomy given to the marketing partner",
      "Clear communication channels for updates and adjustments",
      "Focus on business outcomes beyond just book sales",
      "Proactive problem-solving and strategic guidance",
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Detailed Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            In-Depth Look at Client <span className="text-green-600">Transformations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dive into the challenges, strategies, and remarkable results achieved by our clients through tailored
            digital marketing and publishing solutions.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem value={study.id} className="mb-4 border-b-0">
                <AccordionTrigger className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl shadow-sm hover:bg-slate-200 transition-all duration-300 text-left">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.client}
                    width={60}
                    height={60}
                    className="rounded-full object-cover flex-shrink-0"
                    unoptimized
                  />
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                    <p className="text-sm text-slate-600">
                      {study.title} - <span className="font-semibold text-blue-600">{study.resultsSummary}</span>
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 mt-4">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Background & Challenge */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-xl font-semibold text-slate-800 mb-3">Background:</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">{study.background}</p>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-slate-800 mb-3">Challenge:</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>

                        {/* Strategy & Testimonial */}
                        <div className="space-y-8 bg-white rounded-xl p-8 shadow-md border border-slate-200">
                          <div>
                            <h4 className="text-xl font-semibold text-slate-800 mb-4">Strategy Implemented:</h4>
                            <ul className="space-y-3">
                              {study.strategy.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                  <span className="text-slate-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="relative">
                            <Quote className="w-8 h-8 text-purple-500 mb-4" />
                            <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                              {study.testimonial}
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Quantified Results & Success Factors */}
                      <div className="mt-12 grid lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200">
                          <h4 className="text-xl font-semibold text-slate-800 mb-4">Quantified Results:</h4>
                          <ul className="space-y-3">
                            {study.quantifiedResults.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span className="text-slate-700 font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200">
                          <h4 className="text-xl font-semibold text-slate-800 mb-4">Key Success Factors:</h4>
                          <ul className="space-y-3">
                            {study.successFactors.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 text-sm text-slate-500">
                            <span className="font-semibold">Timeline:</span> {study.timeline}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
