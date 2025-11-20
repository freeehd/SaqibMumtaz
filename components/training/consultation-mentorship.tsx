'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Users,
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

const mentorshipPrograms = [
  {
    name: "1-on-1 Strategic Mentorship",
    duration: "3-month intensive program",
    investment: "$Book to Find out",
    format: "Weekly 1-hour sessions + email support",
    included: [
      "Comprehensive marketing audit and strategy development",
      "Weekly implementation sessions with direct feedback",
      "Access to all training materials and resources",
      "Priority email support between sessions",
      "Custom campaign development and optimization",
      "Long-term strategic planning and goal setting",
    ],
    buttonText: "Apply for 1-on-1 Mentorship",
    highlight: true,
  },
  // {
  //   name: "Group Mentorship Program",
  //   duration: "6-month program",
  //   investment: "$Book to Find out",
  //   format: "Bi-weekly group calls + private community",
  //   included: [
  //     "Bi-weekly group coaching calls (90 minutes each)",
  //     "Private mastermind community access",
  //     "Monthly guest expert sessions",
  //     "Peer accountability and support system",
  //     "Group challenges and implementation sprints",
  //     "Quarterly strategy review and planning sessions",
  //   ],
  //   buttonText: "Join Group Program",
  //   highlight: false,
  // },
]

export function ConsultationMentorship() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Consultation & Mentorship Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Personalized Guidance for{" "}
            <span className="text-blue-600">Accelerated Growth</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            For authors seeking dedicated support and strategic guidance, our
            mentorship programs provide direct access to expert insights and
            personalized action plans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 justify-center items-center place-items-center">
          {mentorshipPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full  flex flex-col align-middle justify-between border-0 shadow-lg transition-all duration-300 mx-auto ${program.highlight
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-white text-slate-900"
                  }`}
              >
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${program.highlight
                        ? "bg-white/20 text-white"
                        : "bg-blue-100 text-blue-600"
                        }`}
                    >
                      {index === 0 ? (
                        <Calendar className="w-8 h-8" />
                      ) : (
                        <MessageSquare className="w-8 h-8" />
                      )}
                    </div>
                    <h3
                      className={`text-2xl font-bold ${program.highlight
                        ? "text-white"
                        : "text-slate-900"
                        } mb-2`}
                    >
                      {program.name}
                    </h3>
                    <div className="text-center space-y-2">
                      <p
                        className={`text-sm ${program.highlight
                          ? "text-blue-100"
                          : "text-slate-600"
                          }`}
                      >
                        <span className="font-semibold">Duration:</span>{" "}
                        {program.duration}
                      </p>
                      <p
                        className={`text-sm ${program.highlight
                          ? "text-blue-100"
                          : "text-slate-600"
                          }`}
                      >
                        <span className="font-semibold">Investment:</span>{" "}
                        {program.investment}
                      </p>
                      <p
                        className={`text-sm ${program.highlight
                          ? "text-blue-100"
                          : "text-slate-600"
                          }`}
                      >
                        <span className="font-semibold">Format:</span>{" "}
                        {program.format}
                      </p>
                    </div>

                    <div className="text-left mt-6 space-y-4">
                      <h4
                        className={`text-lg font-semibold ${program.highlight
                          ? "text-white"
                          : "text-slate-800"
                          }`}
                      >
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {program.included.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle
                              className={`w-5 h-5 flex-shrink-0 ${program.highlight
                                ? "text-white"
                                : "text-green-600"
                                }`}
                            />
                            <span
                              className={`${program.highlight ? "text-blue-100" : "text-slate-700"}`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <div className="p-8 pt-0">
                  <Button
                    size="lg"
                    className={`w-full ${program.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    onClick={() => setIsOpen(true)}
                  >
                    {program.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {isClient && <GoogleCalendarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />}
    </section>
  )
}