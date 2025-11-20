'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Mail,
  Download,
  BookOpen,
  Lightbulb,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

// A single, unified data structure makes mapping and styling easier

export function NextSteps() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextStepsData = [
    {
      icon: Calendar,
      title: "Schedule your consultation",
      desc: "Book a free, no-obligation strategy session to discuss your goals.",
      cta: "Book now",
      isPrimary: true, // Flag for special styling
      action: () => setIsOpen(true),
    },
    {
      icon: Mail,
      title: "Join the newsletter",
      desc: "Get weekly tips and industry insights delivered straight to your inbox.",
      href: "#",
      cta: "Subscribe",
      isPrimary: true, // Flag for special styling
    },
    {
      icon: BookOpen,
      title: "Browse success stories",
      desc: "Explore detailed case studies and see the results we've achieved.",
      href: "/success-stories",
      cta: "View stories",
    },
    {
      icon: Lightbulb,
      title: "Explore training",
      desc: "Discover our hands-on programs and workshops to upskill your team.",
      href: "/training",
      cta: "Learn more",
    },
    {
      icon: MessageSquare,
      title: "Read testimonials",
      desc: "Find out what our satisfied clients are saying about their experience.",
      href: "/success-stories#testimonials",
      cta: "Read reviews",
    },
    {
      icon: Download,
      title: "Free resources",
      desc: "Access our library of helpful templates, checklists, and guides.",
      href: "#",
      cta: "Get resources",
    },
  ]
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're ready to dive in or still exploring, we have a next
            step for you.
          </p>
        </div>

        {/* A single, balanced grid for all items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nextStepsData.map((step, i) => (
            <div
              key={i}
              className={`
                group p-8 rounded-2xl border flex flex-col transition-all duration-300
                ${step.isPrimary
                  ? "bg-slate-900 border-slate-700 shadow-2xl shadow-slate-900/10"
                  : "bg-white border-slate-200 hover:shadow-xl hover:border-slate-300 hover:-translate-y-2"
                }
              `}
            >
              {/* Icon with background */}
              <div
                className={`mb-5 w-14 h-14 rounded-xl flex items-center justify-center
                ${step.isPrimary ? "bg-slate-800" : "bg-blue-50"}
              `}
              >
                <step.icon
                  className={`h-7 w-7 ${step.isPrimary ? "text-white" : "text-blue-600"
                    }`}
                />
              </div>

              {/* Text content with flex-grow to push button to the bottom */}
              <div className="flex-grow">
                <h3
                  className={`text-xl font-bold ${step.isPrimary ? "text-white" : "text-slate-900"
                    }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${step.isPrimary ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                  {step.desc}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                asChild={!!step.href}
                onClick={step.action}
                variant={step.isPrimary ? "default" : "secondary"}
                className="mt-6 w-full"
              >
                {step.href ? (
                  <Link href={step.href}>
                    {step.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <>
                    {step.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
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
