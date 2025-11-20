import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.syedsaqibmumtaz.com"),
  title: {
    default: "Saqib Mumtaz - Transform Your Book Into a Bestseller",
    template: "%s | Saqib Mumtaz",
  },
  description:
    "Join 7,500+ authors who have achieved bestseller status through our proven AI-powered digital marketing strategies. Expert book publishing and marketing services.",
  keywords: [
    "Book Marketing",
    "Amazon KDP",
    "Bestseller Strategy",
    "Digital Marketing",
    "Author Branding",
    "Book Publishing",
    "Saqib Mumtaz",
  ],
  authors: [{ name: "Saqib Mumtaz" }],
  creator: "Saqib Mumtaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Saqib Mumtaz - Transform Your Book Into a Bestseller",
    description:
      "Join 7,500+ authors who have achieved bestseller status through our proven AI-powered digital marketing strategies.",
    siteName: "Saqib Mumtaz",
    images: [
      {
        url: "/og-image.jpg", // We should ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Saqib Mumtaz - Book Marketing Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saqib Mumtaz - Transform Your Book Into a Bestseller",
    description:
      "Join 7,500+ authors who have achieved bestseller status through our proven AI-powered digital marketing strategies.",
    creator: "@saqibmumtaz", // Placeholder handle, should be updated if known
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZJKJD43');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X045FHLES4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X045FHLES4');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZJKJD43"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navigation />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
