"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Romance Author",
    program: "AI Marketing Masterclass Graduate",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Before taking Saqib's course, I was spending hours creating social media content with minimal results. The AI tools and strategies I learned have transformed my marketing efficiency. I now create a month's worth of content in just 2 hours, and my engagement rates have increased by 200%.",
    results: "Achieved #1 bestseller status within 3 months of course completion",
  },
  {
    name: "David Chen",
    title: "Business Author",
    program: "Amazon PPC Intensive Graduate",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The PPC workshop was exactly what I needed. Saqib's step-by-step approach made Amazon advertising finally make sense. My ACOS improved from 85% to 35% within 6 weeks, and my sales have tripled.",
    results: "Generated $15,000 in additional revenue in first quarter after training",
  },
  {
    name: "Maria Rodriguez",
    title: "Self-Help Author",
    program: "Free Webinar Attendee → Full Program Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "I started by attending a free webinar and was so impressed with the value that I enrolled in the full masterclass. The community support and ongoing mentorship have been invaluable. I've gone from struggling to sell 10 books per month to consistently selling 300+.",
    results: "Built email list of 2,500 subscribers and launched successful book series",
  },
]

export function StudentSuccess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Student Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Workshop Graduate <span className="text-yellow-600">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our students' achievements speak for themselves. Discover how authors like you have transformed their
            marketing skills and achieved remarkable results.
          </p>
        </motion.div>

        {/* Testimonial Carousel (Simplified to a grid for now) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Client Header */}
                    <div className="flex items-start gap-4">
                      {/* <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                        unoptimized
                      /> */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{testimonial.name}</h3>
                        <p className="text-slate-600">{testimonial.title}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.program}</p>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-purple-500 mb-4" />
                      <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-slate-800">Results:</h4>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">{testimonial.results}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of authors who have transformed their book marketing with our proven AI-powered strategies.
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">
                Start Your Journey
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3 text-slate-700 font-semibold hover:bg-slate-100 transition-colors bg-white">
                Schedule Free Consultation
              </button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Prefer to chat? <a href="mailto:saqib@a2zpublishing.com" className="text-blue-600 hover:underline">email us</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
