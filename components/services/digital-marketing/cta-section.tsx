'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

export function CtaSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Author Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join our community of successful authors and unlock the secrets to
            AI-powered book marketing.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 font-semibold text-lg px-8 py-3 rounded-full shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      {isClient && <GoogleCalendarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />}
    </section>
  )
}