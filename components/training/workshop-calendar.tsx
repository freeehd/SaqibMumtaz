"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

const upcomingEvents = [
  {
    date: "February 15, 2025",
    time: "10:00 AM EST",
    title: "AI-Powered Book Marketing Masterclass (Cohort 1)",
    location: "Online (Zoom)",
    description: "Kick-off session for the 8-week intensive masterclass.",
    type: "Masterclass",
  },
  {
    date: "March 4, 2025",
    time: "2:00 PM EST",
    title: "AI Content Creation for Authors",
    location: "Online Webinar",
    description: "Free monthly webinar on leveraging AI for compelling marketing content.",
    type: "Webinar",
  },
  {
    date: "March 10-12, 2025",
    time: "9:00 AM - 1:00 PM EST Daily",
    title: "Amazon PPC Intensive Workshop",
    location: "Online (Zoom)",
    description: "3-day hands-on workshop for mastering Amazon PPC advertising.",
    type: "Workshop",
  },
  {
    date: "April 1, 2025",
    time: "2:00 PM EST",
    title: "Amazon Algorithm Updates & Optimization",
    location: "Online Webinar",
    description: "Free monthly webinar on staying current with Amazon's algorithm changes.",
    type: "Webinar",
  },
]

export function WorkshopCalendar() {
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CalendarDays className="w-4 h-4" />
            Workshop Calendar
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Upcoming Events & <span className="text-purple-600">Training Schedule</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mark your calendars! Explore our upcoming workshops, masterclasses, and free webinars designed to elevate
            your book marketing skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Calendar Visualization with Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book Your Session</h3>
              <div className="relative bg-white rounded-lg shadow-md p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <CalendarDays className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Ready to Get Started?</h4>
                  <p className="text-slate-600 mb-4">Schedule a free consultation to discuss your training needs</p>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Calendar & Book Session
                  </button>
                </div>
              </div>
              <p className="text-center text-slate-600 text-sm mt-4">
                Or <a href="/contact" className="text-blue-600 hover:underline font-medium">contact us directly</a> for more options
              </p>
            </Card>
          </motion.div>

          {/* Right: Upcoming Events List */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${event.type === "Masterclass"
                        ? "bg-blue-100 text-blue-600"
                        : event.type === "Workshop"
                          ? "bg-green-100 text-green-600"
                          : "bg-purple-100 text-purple-600"
                        }`}
                    >
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{event.title}</h4>
                      <p className="text-sm font-medium text-slate-600">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
