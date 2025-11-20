"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    title: "The Art of Leadership",
    author: "Brenda Bence",
    category: "Business & Leadership",
    image: "/images/testimonials/brenda-bence--ranked-top-ten-coach-globally.jpg",
    description: "A comprehensive Amazon PPC and social media campaign that resulted in multiple #1 bestseller rankings.",
    link: "#",
  },
  {
    title: "Win-Win Selling",
    author: "Greg Stephens",
    category: "Personal Development",
    image: "/placeholder.svg?height=400&width=300",
    description: "A strategic launch campaign that established a new author as a thought leader in their niche.",
    link: "#",
  },
  {
    title: "The Futurist's Guide",
    author: "John Smith",
    category: "Technology & Futurism",
    image: "/placeholder.svg?height=400&width=300",
    description: "An integrated content marketing and PR strategy that secured features in major publications.",
    link: "#",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Portfolio of Success</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with authors to create marketing campaigns that don't just sell books—they build legacies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={`Book cover for ${project.title}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <Button variant="outline" className="w-full">
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
