"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Quote, Star, TrendingUp, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Star,
    value: "30+ Best Sellers",
    label: "Bestseller Rankings",
    color: "text-yellow-500",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Sales Increase",
    color: "text-green-500",
  },
  {
    icon: Globe,
    value: "Worldwide reach",
    label: "",
    color: "text-blue-500",
  },
]

export function FeaturedSuccess() {
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
            Featured work & testimonial
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Selected results from recent collaborations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real projects, measurable outcomes, and client relationships I&apos;m proud of.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Client Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Client Header */}
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg"
                      alt="Brenda Bence"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Brenda Bence</h3>
                      <p className="text-slate-600">Global Leadership Coach & Keynote Speaker</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                      "I have worked with Syed for the past year, as he helped me advertise one of our books on Amazon.
                      Syed was devoted to doing what he could to help the book achieve good sales. In terms of actual
                      sales revenues, there were ups and downs throughout the year - and Syed had warned me that would
                      likely be the case. But now, the year of focus and attention has paid off, and the book has
                      achieved strong sales and multiple bestseller status. I am grateful to Syed for his attention and
                      suggestions!"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="w-full">
              <a href="/success-stories">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  View full portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Results achieved</h4>

              <div className="grid gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center ${achievement.color}`}
                    >
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${achievement.color}`}>{achievement.value}</div>
                      <div className="text-slate-600">{achievement.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Campaign Timeline</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Month 1-3: Foundation</div>
                    <div className="text-slate-300 text-sm">Strategy development and campaign setup</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Month 4-8: Optimization</div>
                    <div className="text-slate-300 text-sm">Performance tuning and scaling</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Month 9-12: Success</div>
                    <div className="text-slate-300 text-sm">Multiple bestseller achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
