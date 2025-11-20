'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  Calendar,
  CheckCircle,
  Lightbulb,
} from "lucide-react"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

const corporateTopics = [
  "AI Integration in Marketing Departments",
  "Content Marketing for B2B Lead Generation",
  "Personal Branding for Executive Teams",
  "Digital Marketing ROI Optimization",
]

const corporateClients = [
  {
    name: "Technology companies",
    description: "developing thought leadership programs",
  },
  {
    name: "Consulting firms",
    description: "building content marketing capabilities",
  },
  {
    name: "Educational institutions",
    description: "training faculty on digital presence",
  },
  {
    name: "Non-profit organizations",
    description: "expanding their reach through content",
  },
]

export function CorporateTraining() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Corporate Training & Custom Workshops
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Training <span className="text-blue-400">Solutions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We create tailored training programs for organizations looking to
            develop internal content marketing capabilities or train teams on
            AI-powered marketing strategies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Custom Workshop Development */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-300">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Custom Workshop Development
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We create tailored training programs for organizations looking
                  to develop internal content marketing capabilities or train
                  teams on AI-powered marketing strategies.
                </p>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Available Formats:
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Half-day intensive workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Multi-day comprehensive training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Ongoing mentorship and consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>Train-the-trainer programs for internal teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsOpen(true)}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Corporate Consultation
            </Button>
          </motion.div>

          {/* Right: Popular Topics & Clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Popular Corporate Topics
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {corporateTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-700 rounded-lg p-4 flex items-center gap-3"
                    >
                      <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-200">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Recent Corporate Clients
                </h3>
                <div className="space-y-4">
                  {corporateClients.map((client, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4 bg-slate-700 rounded-lg p-4"
                    >
                      <Briefcase className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">
                          {client.name}
                        </h4>
                        <p className="text-sm text-slate-300">
                          {client.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      {isClient && <GoogleCalendarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />}
    </section>
  )
}