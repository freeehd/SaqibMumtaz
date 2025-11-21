"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Youtube, Award, Globe, TrendingUp, Zap } from 'lucide-react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HeroSection() {
  const words = [
    { text: "Hi," },
    { text: "I'm" },
    {
      text: "Syed",
      className: "bg-white bg-clip-text text-transparent",
    },
    {
      text: "Saqib",
      className: "bg-white bg-clip-text text-transparent",
    },
    {
      text: "Mumtaz",
      className: "bg-white bg-clip-text text-transparent",
    },


  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden pt-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Sparkles Overlay */}
      <SparklesCore
        minSize={0.5}
        maxSize={1.5}
        particleDensity={100}
        className="absolute inset-0 z-0"
        colors={["#FFFFFF", "#8888FF", "#FF88FF", "#AAAAFF"]}
      />

      <div className="relative container mx-auto px-4 pt-6 pb-12 sm:pt-8 sm:pb-8 z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm font-medium"
            >
              <Zap className="w-4 h-4" />
              Syed Saqib Mumtaz • Growth Marketer • Publishing Strategist • Trainer
            </motion.div>
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <TypewriterEffect words={words} className="inline-flex" />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Digital marketer, publisher, best seller maker and keynote speaker — I craft AI-driven strategies that transform books into best sellers with marketing strategies that work. and brands into powerful growth engines, , entrepreneurs, and teams launch, scale, and thrive.
              </motion.p>
            </div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                    View Portfolio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            {/* Social + Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="flex flex-col gap-6 pt-8"
            >
              <div className="flex items-center gap-4 text-slate-300">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://www.linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing/" target="_blank" className="hover:text-white transition-colors">
                    <span className="inline-flex items-center gap-2"><Linkedin className="w-5 h-5" /> LinkedIn</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://www.amazonkdp101.com" target="_blank" className="hover:text-white transition-colors">
                    <span className="inline-flex items-center gap-2"><Youtube className="w-5 h-5" /> YouTube</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="mailto:ceo@a2zpublishing.com" className="hover:text-white transition-colors">
                    <span className="inline-flex items-center gap-2"><Mail className="w-5 h-5" /> Email</span>
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center gap-8">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-slate-400">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Clients in 91+ countries</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-slate-400">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">30+ #1 bestsellers</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-slate-400">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm">$1M+ sales influenced</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl max-w-xs sm:max-w-md md:max-w-xl mx-auto w-full">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <Image
                    src="/images/headshot2-hq.jpg"
                    width={840}
                    height={840}
                    alt="Saqib Mumtaz headshot"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </motion.div>
                <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4">
                  {[{ label: "Years", value: "20+" }, { label: "Bestsellers", value: "30+" }, { label: "Authors", value: "7,500+" }].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(30,41,59,0.7)" }}
                      transition={{ duration: 0.2 }}
                      className="bg-slate-900/50 rounded-lg p-4 text-center cursor-pointer"
                    >
                      <div className="text-2xl font-bold text-white">{item.value}</div>
                      <div className="text-slate-400 text-xs">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
