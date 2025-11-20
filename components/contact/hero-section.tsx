"use client";
import { GoogleCalendar } from "@/components/google-calendar";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Calendar, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-gradient-radial from-sky-900 to-slate-900 bg-cover bg-center opacity-10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let's Work Together
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Ready to transform your book into a business asset? Schedule a free consultation to discuss your goals
                and create a custom strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span>Free 60-minute session</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MessageSquare className="h-5 w-5 text-blue-400" />
                <span>Custom action plan</span>
              </div>
            </div>
          </div>

          {/* Right: Calendly Embed */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">Schedule a Consultation</h2>
                <p className="text-slate-300">Choose a time that works for you from the calendar below.</p>
              </div>
              <GoogleCalendar className="h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
