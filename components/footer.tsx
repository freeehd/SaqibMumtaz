import Link from "next/link"

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Syed", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Book Publishing", href: "/services/book-publishing" },
  { label: "Book Marketing", href: "/services/book-marketing" },
  { label: "Workshops & Training", href: "/training" },
]

const connectLinks = [
  { label: "Book a Free Consultation", href: "/contact" },
  { label: "Email Saqib", href: "mailto:saqib@a2zpublishing.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing/" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <img src="/images/head-h1.png" alt="Logo" className="w-16 h-16 rounded-md" />
                <div>
                  <p className="text-lg font-semibold">Syed Saqib Mumtaz</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Helping authors transform their books into bestsellers with data-driven marketing, publishing, and sales systems.
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Join 7,500+ authors who have accelerated their book launches with proven frameworks and hands-on consultancy.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {primaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-300 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-slate-300 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Connect</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {connectLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-300 transition-colors hover:text-white"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
            <p>Copyright {year} Syed Saqib Mumtaz. All rights reserved.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white sm:mt-0">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
