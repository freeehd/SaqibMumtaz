"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Star, Quote } from "lucide-react"
import Image from "next/image"

const projectResults = {
  title: "The Art of Leadership: A Case Study",
  client: "Brenda Bence",
  image: "/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg",
  testimonial:
    "Their strategic approach to Amazon marketing was a complete game-changer. We didn't just see a spike in sales; we built a sustainable platform that continues to grow. The results speak for themselves.",
  metrics: [
    { value: "300%", label: "Increase in Sales" },
    { value: "#1", label: "Bestseller Rank" },
    { value: "150%", label: "Email List Growth" },
    { value: "50+", label: "Media Mentions" },
  ],
}

export function ResultsTestimonials() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-300 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Client Results
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Results, Real Impact</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We measure our success by the success of our authors. Explore the tangible results of our partnership with
            leadership expert Brenda Bence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800 border-slate-700 overflow-hidden">
              <Image
                src={projectResults.image}
                alt={`Book cover for ${projectResults.title}`}
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </Card>
          </motion.div>

          {/* Right Side - Testimonial & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Testimonial */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <blockquote className="text-xl text-slate-300 italic mb-4">
                  {projectResults.testimonial}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg"
                    alt={projectResults.client}
                    width={50}
                    height={50}
                    className="rounded-full"
                    unoptimized
                  />
                  <div>
                    <p className="font-semibold text-white">{projectResults.client}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 text-center">
              {projectResults.metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <p className="text-4xl font-bold text-blue-400 mb-1">{metric.value}</p>
                  <p className="text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}