'use client'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Calendar, Award, Globe, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

const quickStats = [
  {
    icon: Award,
    value: "20+",
    label: "Years Experience",
    color: "text-blue-500",
  },
  {
    icon: Users,
    value: "200+",
    label: "Authors Served",
    color: "text-green-500",
  },
  {
    icon: Globe,
    value: "91+",
    label: "Countries",
    color: "text-purple-500",
  },
]

export function AboutHero() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Meet Your Strategic Partner
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Helping Authors and Experts Build Powerful Brands Through Book
                Marketing & Digital Excellence.
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Your Brand. Your Book. Your Market Leadership — Powered by
                Strategic Digital Marketing.”
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I know that for most authors, the hardest part isn’t
                writing the book — it’s getting it noticed. I’ve helped many
                authors break through the noise with Amazon PPC ads that
                actually convert, strategic positioning, and proven bestseller
                campaigns. By turning books into Amazon bestsellers, I’ve not
                only boosted sales but also expanded my clients’ readership,
                clientele, and long-term opportunities.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                But my work doesn’t stop at books. As a LinkedIn Branding
                Expert, LinkedIn Ads Certified Professional, Google Ads and
                Facebook Ads Strategist, and Email Marketing Specialist, I help
                both authors and brands generate qualified leads, build strong
                digital identities, and dominate their niches. With over 20
                years of experience in technology and marketing, I combine
                data-driven precision with creative strategy, ensuring that
                every campaign — whether on LinkedIn, Google, Facebook, or
                through email — is results-focused, cost-effective, and
                designed for measurable growth.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-200"
                >
                  <div
                    className={`w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center ${stat.color}`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div
                    className={`text-2xl font-bold ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsOpen(true)}
              >
                <Calendar className="mr-2 w-4 h-4" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Professional Image & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 round Hashmied-full blur-2xl"></div>

                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <Image
                    src="/images/headshot9.jpg?height=500&width=400"
                    alt="Syed Saqib Mumtaz - Digital Marketing Expert"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              {/* Floating Achievement Cards */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    $1M+
                  </div>
                  <div className="text-xs text-slate-600">
                    Revenue Generated
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -left-8 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    30+
                  </div>
                  <div className="text-xs text-slate-600">
                    #1 Bestsellers
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {isClient && (
        <GoogleCalendarModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  )
}