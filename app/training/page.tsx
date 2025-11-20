import { Metadata } from "next"
import { HeroSection } from "@/components/training/hero-section"

export const metadata: Metadata = {
  title: "Training & Workshops | Master Book Marketing",
  description:
    "Join our training programs and workshops to master the art of book marketing. Learn directly from industry experts.",
}
import { TrainingContent } from "@/components/training/content-section"
import { TrainingPrograms } from "@/components/training/training-programs"
import { WorkshopCalendar } from "@/components/training/workshop-calendar"
import { LearningOutcomes } from "@/components/training/learning-outcomes"
import { StudentSuccess } from "@/components/training/student-success"
import { CertificationPrograms } from "@/components/training/certification-programs"
import { CorporateTraining } from "@/components/training/corporate-training"
import { ConsultationMentorship } from "@/components/training/consultation-mentorship"
import { SpeakingEngagements } from "@/components/training/speaking-engagements"
import { CtaSection } from "@/components/services/digital-marketing/cta-section"

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrainingContent />
      <TrainingPrograms />
      <WorkshopCalendar />
      <LearningOutcomes />
      <StudentSuccess />
      <CertificationPrograms />
      <CorporateTraining />
      <ConsultationMentorship />
      <SpeakingEngagements />
      <CtaSection />
    </main>
  )
}
