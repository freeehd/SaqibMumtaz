import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function OfficeInformation() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600 text-lg">Multiple ways to connect with us</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600">
              123 Business Ave
              <br />
              Suite 100
              <br />
              City, State 12345
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-600">
              <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                (123) 456-7890
              </a>
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600">
              <a href="mailto:ceo@a2zpublishing.com" className="hover:text-blue-600 transition-colors">
                hello@example.com
              </a>
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours</h3>
            <p className="text-slate-600">
              Mon - Fri: 9AM - 6PM
              <br />
              Weekend: By appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
