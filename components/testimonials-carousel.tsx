"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { testimonials } from "@/components/testimonials-data"


export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover how we've helped authors and businesses achieve remarkable success through strategic marketing and
            expert guidance.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-slate-600"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-300 text-xs font-medium mb-4">
                        {currentTestimonial.service}
                      </div>
                      <blockquote className="text-xl text-slate-300 italic mb-6 leading-relaxed">
                        {currentTestimonial.testimonial}
                      </blockquote>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                        unoptimized
                      />
                      <div>
                        <p className="font-semibold text-white text-lg">{currentTestimonial.name}</p>
                        <p className="text-slate-400 text-sm mb-2 max-w-md">{currentTestimonial.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-slate-400 text-sm">• {currentTestimonial.date}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                    >
                      <a
                        href={currentTestimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <motion.div
                className="bg-blue-500 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-slate-400 text-sm mt-2">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
