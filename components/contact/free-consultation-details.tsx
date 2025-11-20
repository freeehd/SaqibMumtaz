"use client";
import { useEffect, useState } from "react";
import { GoogleCalendarModal } from "@/components/google-calendar-modal";
import { Calendar, Clock, ListChecks, CheckCircle2 } from "lucide-react"

export function FreeConsultationDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Free Strategy Consultation</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            A focused 60-minute session to assess where you are, uncover opportunities, and map the shortest path to
            results. Zero pressure. Real value.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Card 1 */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">What to expect</h3>
            </div>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>60 minutes via Zoom or phone</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Completely free, no strings attached</p>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                <p>Weekdays, 9 AM – 6 PM (your time zone accommodated)</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Agenda</h3>
            </div>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Snapshot: goals, current efforts, quick wins</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Strategy sketch: positioning, channels, priorities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Action plan: next steps and timelines</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">What you’ll get</h3>
            </div>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Mini strategy doc tailored to your goals</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Prioritized tasks you can execute immediately</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <p>Tooling recommendations and resources</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">
            Book your free consult
          </button>
          <a href="/success-stories" className="inline-block">
            <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-100 transition-colors bg-white">
              See case studies
            </button>
          </a>
        </div>
      </div>
      {isClient && <GoogleCalendarModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />}
    </section>
  )
}
