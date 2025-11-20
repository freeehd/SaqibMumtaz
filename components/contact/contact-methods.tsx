"use client"
import { Mail, Linkedin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

export function ContactMethods() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const methods = [
    {
      icon: Calendar,
      title: "Book Free Consultation",
      value: "Schedule instantly",
      meta: "60-min strategy session",
      primary: true,
      action: "calendar",
    },
    {
      icon: Mail,
      title: "Email",
      value: "saqib@a2zpublishing.com",
      meta: "Response within 24 hours",
      primary: false,
      href: "mailto:saqib@a2zpublishing.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      meta: "Professional networking",
      primary: false,
      href: "https://www.linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing/",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose your preferred way to connect. I'm here to help with your book marketing journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {methods.map((method, index) => {
            const CardComponent = (
              <Card
                className={`text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${method.primary ? "ring-2 ring-blue-200 bg-blue-50" : ""
                  } cursor-pointer h-full`}
                onClick={method.action === "calendar" ? () => setIsOpen(true) : undefined}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${method.primary ? "bg-blue-600" : "bg-slate-100"
                      }`}
                  >
                    <method.icon className={`w-6 h-6 ${method.primary ? "text-white" : "text-slate-600"}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h3>
                  <p className="font-medium text-slate-700 mb-1 break-words">{method.value}</p>
                  <p className="text-sm text-slate-500">{method.meta}</p>
                </CardContent>
              </Card>
            )

            if (method.href) {
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  {CardComponent}
                </a>
              )
            }

            return (
              <div key={index} className="block h-full">
                {CardComponent}
              </div>
            )
          })}
        </div>
      </div>
      {isClient && <GoogleCalendarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />}
    </section>
  )
}
