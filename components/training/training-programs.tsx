'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bot,
  Target,
  CalendarDays,
  CheckCircle,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Youtube,
} from "lucide-react"
import { GoogleCalendarModal } from "@/components/google-calendar-modal"

const programs = [
  {
    id: "ai-masterclass",
    icon: Bot,
    title: "AI-Powered Book Marketing Masterclass",
    duration: "8-week intensive program",
    format: "Live online sessions + recorded materials",
    investment: "$497",
    nextCohort: "Starting February 15, 2025",
    overview:
      "Master the complete ecosystem of AI-assisted book marketing through hands-on training that covers everything from content creation to campaign optimization. This comprehensive program transforms authors into confident marketers who can generate consistent sales and build sustainable author businesses.",
    curriculum: [
      {
        week: "Week 1: AI Marketing Foundation",
        topics: [
          "Understanding AI tools and their applications in book marketing",
          "Setting up your AI marketing toolkit (ChatGPT, Gemini, MidJourney)",
          "Creating your first AI-generated marketing materials",
          "Hands-on exercise: Generate complete book description using AI",
        ],
      },
      {
        week: "Week 2: Amazon Algorithm Mastery",
        topics: [
          "Deep dive into Amazon's A10 algorithm and ranking factors",
          "Keyword research using AI-powered tools",
          "Category optimization strategies",
          "Hands-on exercise: Optimize existing book listing for improved visibility",
        ],
      },
      {
        week: "Week 3: Advanced PPC Campaign Creation",
        topics: [
          "Campaign architecture and structure best practices",
          "Keyword targeting strategies and bid optimization",
          "Creating compelling ad copy that converts",
          "Hands-on exercise: Build and launch first PPC campaign",
        ],
      },
      {
        week: "Week 4: Content Marketing with AI",
        topics: [
          "AI-powered content creation for social media and blogs",
          "Developing content calendars and automation systems",
          "Cross-platform content distribution strategies",
          "Hands-on exercise: Create 30-day content calendar using AI tools",
        ],
      },
      {
        week: "Week 5: Email Marketing & Reader Relationship Building",
        topics: [
          "Building and nurturing email lists for long-term success",
          "Creating automated email sequences that sell",
          "Segmentation and personalization strategies",
          "Hands-on exercise: Set up complete email marketing funnel",
        ],
      },
      {
        week: "Week 6: Social Media Marketing Integration",
        topics: [
          "Platform-specific strategies for Facebook, Instagram, LinkedIn, TikTok",
          "Creating viral content and building engaged communities",
          "Influencer collaboration and partnership strategies",
          "Hands-on exercise: Launch coordinated social media campaign",
        ],
      },
      {
        week: "Week 7: Analytics, Optimization & Scaling",
        topics: [
          "Setting up comprehensive tracking and analytics systems",
          "Interpreting data to make informed optimization decisions",
          "Scaling successful campaigns and expanding reach",
          "Hands-on exercise: Analyze campaign performance and create optimization plan",
        ],
      },
      {
        week: "Week 8: Advanced Strategies & Long-term Planning",
        topics: [
          "Advanced AI applications and emerging technologies",
          "Building sustainable marketing systems",
          "Long-term author platform development",
          "Final project: Present comprehensive marketing strategy",
        ],
      },
    ],
    included: [
      "8 live weekly sessions (2 hours each) with Q&A",
      "Complete recorded library for lifetime access",
      "Private Facebook community for ongoing support",
      "Weekly assignments with personalized feedback",
      "AI tool templates and swipe files",
      "1-on-1 strategy session with Saqib",
      "Certificate of completion",
      "30-day money-back guarantee",
    ],
    outcomes: [
      "Create professional marketing materials using AI tools",
      "Launch and optimize profitable Amazon PPC campaigns",
      "Build automated email marketing systems that generate sales",
      "Develop content strategies that build engaged audiences",
      "Analyze performance data to make informed decisions",
      "Scale successful campaigns for maximum ROI",
    ],
    buttonText: "Enroll Now",
    highlight: true,
  },
  {
    id: "ppc-workshop",
    icon: Target,
    title: "Amazon PPC Intensive Workshop",
    duration: "3-day intensive",
    format: "Live online workshop",
    investment: "$297",
    nextCohort: "March 10-12, 2025",
    overview:
      "Master Amazon PPC advertising through intensive, hands-on training that covers everything from basic campaign setup to advanced optimization strategies. This workshop is perfect for authors who want to focus specifically on paid advertising success.",
    curriculum: [
      {
        week: "Day 1: Foundation & Setup",
        topics: [
          "Amazon advertising ecosystem overview",
          "Account setup and campaign architecture",
          "Keyword research and competitive analysis",
          "Creating your first campaigns (Auto, Manual Exact, Phrase, Broad)",
        ],
      },
      {
        week: "Day 2: Optimization & Scaling",
        topics: [
          "Performance analysis and data interpretation",
          "Bid optimization and budget management",
          "Negative keyword strategies and campaign refinement",
          "Advanced targeting and audience development",
        ],
      },
      {
        week: "Day 3: Advanced Strategies & Automation",
        topics: [
          "Sponsored Brands and Sponsored Display campaigns",
          "Cross-campaign optimization and portfolio management",
          "Automation tools and efficiency systems",
          "Long-term scaling and growth strategies",
        ],
      },
    ],
    included: [
      "3 intensive training days (4 hours each)",
      "Live campaign building and optimization",
      "PPC templates and optimization checklists",
      "Private workshop community access",
      "30 days of post-workshop email support",
      "Recorded sessions for review",
    ],
    buttonText: "Register Now",
    highlight: false,
  },
  {
    id: "webinar-series",
    icon: CalendarDays,
    title: "Free Monthly Webinar Series",
    duration: "Live online presentations",
    format: "Free",
    investment: "Free",
    nextCohort: "First Tuesday of every month, 2:00 PM EST",
    overview:
      "Stay current with the latest trends and strategies in book marketing through our free monthly webinar series.",
    ctaUrl: "https://www.youtube.com/watch?v=HBSFFRLZVmI",
    buttonText: "Watch Free Webinar",
    curriculum: [
      {
        week: "February 2025: 'AI Content Creation for Authors'",
        topics: [
          "Learn how to use ChatGPT, Gemini, and other AI tools to create compelling marketing content that drives book sales.",
        ],
      },
      {
        week: "March 2025: 'Amazon Algorithm Updates & Optimization'",
        topics: [
          "Stay current with the latest Amazon algorithm changes and learn how to adapt your marketing strategies for continued success.",
        ],
      },
      {
        week: "April 2025: 'Building Your Author Platform with Social Media'",
        topics: [
          "Discover platform-specific strategies for building engaged audiences that become loyal book buyers.",
        ],
      },
      {
        week: "May 2025: 'Email Marketing for Authors'",
        topics: [
          "Master the highest-ROI marketing channel by building and nurturing email lists that generate consistent sales.",
        ],
      },
    ],
    included: [
      "60-minute live presentation",
      "Interactive Q&A session",
      "Downloadable resources and templates",
      "Recording access for 30 days",
      "Special offers for paid programs",
    ],
    buttonText: "Register for Free",
    highlight: false,
  },
]

export function TrainingPrograms() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Comprehensive Training Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Skills with Our{" "}
            <span className="text-blue-600">Expert-Led Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From intensive masterclasses to free webinars, our programs are
            designed to equip you with the practical knowledge and tools to
            excel in digital book marketing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`border-0 shadow-lg transition-all duration-300 ${program.highlight
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-white text-slate-900"
                  }`}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${program.highlight
                        ? "bg-white/20 text-white"
                        : "bg-blue-100 text-blue-600"
                        }`}
                    >
                      <program.icon className="w-8 h-8" />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-center ${program.highlight
                        ? "text-white"
                        : "text-slate-900"
                        } mb-2`}
                    >
                      {program.title}
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
                        <span className="font-semibold">Format:</span>{" "}
                        {program.format}
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
                        <span className="font-semibold">Next Cohort:</span>{" "}
                        {program.nextCohort}
                      </p>
                    </div>

                    <p
                      className={`text-center ${program.highlight
                        ? "text-blue-100"
                        : "text-slate-700"
                        }`}
                    >
                      {program.overview}
                    </p>

                    {/* Expandable Content */}
                    <div className="space-y-4">
                      <Button
                        variant="ghost"
                        onClick={() => toggleCard(program.id)}
                        className={`w-full flex items-center justify-center gap-2 ${program.highlight
                          ? "text-white hover:bg-white/10"
                          : "text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        View Details
                        {expandedCard === program.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>

                      <AnimatePresence>
                        {expandedCard === program.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-6 pt-4 border-t border-slate-200/20">
                              {/* Curriculum */}
                              <div>
                                <h4
                                  className={`text-lg font-semibold mb-3 ${program.highlight
                                    ? "text-white"
                                    : "text-slate-800"
                                    }`}
                                >
                                  {program.id === "webinar-series"
                                    ? "Upcoming Topics:"
                                    : "Week-by-Week Curriculum:"}
                                </h4>
                                <div className="space-y-3">
                                  {program.curriculum.map(
                                    (item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="space-y-2"
                                      >
                                        <h5
                                          className={`font-semibold ${program.highlight
                                            ? "text-white"
                                            : "text-slate-700"
                                            }`}
                                        >
                                          {item.week}
                                        </h5>
                                        <ul className="space-y-1 ml-4">
                                          {item.topics.map(
                                            (topic, topicIndex) => (
                                              <li
                                                key={topicIndex}
                                                className="flex items-start gap-2"
                                              >
                                                <CheckCircle
                                                  className={`w-4 h-4 flex-shrink-0 mt-1 ${program.highlight
                                                    ? "text-white"
                                                    : "text-blue-600"
                                                    }`}
                                                />
                                                <span
                                                  className={`text-sm ${program.highlight
                                                    ? "text-blue-100"
                                                    : "text-slate-600"
                                                    }`}
                                                >
                                                  {topic}
                                                </span>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* What's Included */}
                              <div>
                                <h4
                                  className={`text-lg font-semibold mb-3 ${program.highlight
                                    ? "text-white"
                                    : "text-slate-800"
                                    }`}
                                >
                                  What's Included:
                                </h4>
                                <ul className="space-y-2">
                                  {program.included.map(
                                    (item, itemIndex) => (
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
                                          className={`text-sm ${program.highlight
                                            ? "text-blue-100"
                                            : "text-slate-700"
                                            }`}
                                        >
                                          {item}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Learning Outcomes (only for masterclass) */}
                              {program.outcomes && (
                                <div>
                                  <h4
                                    className={`text-lg font-semibold mb-3 ${program.highlight
                                      ? "text-white"
                                      : "text-slate-800"
                                      }`}
                                  >
                                    Learning Outcomes:
                                  </h4>
                                  <p
                                    className={`text-sm mb-3 ${program.highlight
                                      ? "text-blue-100"
                                      : "text-slate-600"
                                      }`}
                                  >
                                    By the end of this program, you'll be able
                                    to:
                                  </p>
                                  <ul className="space-y-2">
                                    {program.outcomes.map(
                                      (outcome, outcomeIndex) => (
                                        <li
                                          key={outcomeIndex}
                                          className="flex items-start gap-3"
                                        >
                                          <CheckCircle
                                            className={`w-5 h-5 flex-shrink-0 ${program.highlight
                                              ? "text-white"
                                              : "text-orange-600"
                                              }`}
                                          />
                                          <span
                                            className={`text-sm ${program.highlight
                                              ? "text-blue-100"
                                              : "text-slate-700"
                                              }`}
                                          >
                                            {outcome}
                                          </span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {program.ctaUrl ? (
                      <a
                        href={program.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className={`w-full ${program.highlight
                            ? "bg-white text-blue-600 hover:bg-blue-50"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                        >
                          {program.id === "webinar-series" ? (
                            <span className="inline-flex items-center justify-center gap-2">
                              <Youtube className="w-4 h-4" />{" "}
                              {program.buttonText || "Watch Free Webinar"}
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center gap-2">
                              {program.buttonText}
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          )}
                        </Button>
                      </a>
                    ) : (
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
                    )}

                    {program.id === "webinar-series" && (
                      <p className="text-xs text-slate-500 text-center mt-2">
                        Opens YouTube in a new tab
                      </p>
                    )}
                  </div>
                </CardContent>
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