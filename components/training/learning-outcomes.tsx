"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Target, Mail, BarChart3, Users, TrendingUp, Lightbulb } from "lucide-react"

const learningOutcomes = [
  {
    icon: Bot,
    title: "AI Marketing Mastery",
    description: "Create professional marketing materials using cutting-edge AI tools and automation",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Target,
    title: "PPC Campaign Excellence",
    description: "Launch and optimize profitable Amazon PPC campaigns with advanced targeting strategies",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "Email Marketing Systems",
    description: "Build automated email marketing funnels that generate consistent sales and reader engagement",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    title: "Audience Development",
    description: "Develop content strategies that build engaged communities and loyal readerships",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Analyze performance metrics and make informed optimization decisions for maximum ROI",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: TrendingUp,
    title: "Campaign Scaling",
    description: "Scale successful marketing campaigns and expand your reach across multiple platforms",
    color: "bg-teal-100 text-teal-600",
  },
]

export function LearningOutcomes() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            Learning Outcomes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Skills You'll <span className="text-green-600">Master</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive training programs are designed to equip you with practical, actionable skills that deliver
            real results for your book marketing efforts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningOutcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${outcome.color}`}
                  >
                    <outcome.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{outcome.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{outcome.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the first step toward mastering AI-powered book marketing. Book a free consultation to discuss your specific goals and find the perfect training program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-white font-semibold hover:bg-green-700 transition-colors">
                Book Free Consultation
              </button>
            </a>
            <a href="mailto:ceo@a2zpublishing.com" className="inline-block">
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-8 py-3 text-slate-700 font-semibold hover:bg-slate-100 transition-colors bg-white">
                Call Now
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
