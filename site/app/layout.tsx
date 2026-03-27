import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import MobileNav from "./MobileNav";
import "./globals.css";

const siteUrl = "https://matariki-massage-wellness.vercel.app";
const businessName = "Matariki Massage & Wellness";
const defaultTitle = "Matariki Massage & Wellness | Therapeutic Massage Mount Maunganui";
const defaultDescription =
  "Boutique therapeutic massage in Mount Maunganui for deep tissue relief, pregnancy massage, hot stone therapy, and thoughtful wellness treatments.";
const seoKeywords = [
  "massage Mount Maunganui",
  "therapeutic massage Mount Maunganui",
  "deep tissue massage Mount Maunganui",
  "pregnancy massage Mount Maunganui",
  "hot stone massage Mount Maunganui",
  "wellness studio Mount Maunganui",
  "massage Tauranga",
  "massage Papamoa",
  "gift vouchers massage Mount Maunganui",
  "boutique massage studio New Zealand",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessName,
  image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&h=900&fit=crop",
  description: defaultDescription,
  url: siteUrl,
  telephone: "+64 21 555 0182",
  email: "hello@matarikiwellness.co.nz",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mount Maunganui",
    addressRegion: "Bay of Plenty",
    addressCountry: "NZ",
  },
  areaServed: [
    { "@type": "City", name: "Mount Maunganui" },
    { "@type": "City", name: "Tauranga" },
    { "@type": "City", name: "Papamoa" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  appointmentOnly: true,
  serviceType: [
    "Therapeutic massage",
    "Deep tissue massage",
    "Pregnancy massage",
    "Hot stone massage",
    "Wellness treatments",
    "Gift vouchers",
  ],
};

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: businessName,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&h=900&fit=crop",
        width: 1600,
        height: 900,
        alt: "Therapeutic massage studio in Mount Maunganui with calm linen and candlelight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&h=900&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/gift-vouchers/", label: "Gift Vouchers" },
  { href: "/contact/", label: "Contact" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="inline-flex items-center" aria-label="Matariki Massage & Wellness home">
      <svg viewBox="0 0 200 48" className="h-10 w-[168px]" role="img" aria-hidden="true">
        <g transform="translate(4 8)">
          <circle cx="12" cy="16" r="2.2" fill="#C8A96B" />
          <circle cx="22" cy="9" r="1.8" fill="#C8A96B" />
          <circle cx="27" cy="18" r="1.8" fill="#C8A96B" />
          <circle cx="17" cy="24" r="1.7" fill="#C8A96B" />
          <circle cx="7" cy="24" r="1.6" fill="#C8A96B" />
          <circle cx="4" cy="13" r="1.4" fill="#C8A96B" />
          <circle cx="18" cy="3" r="1.4" fill="#C8A96B" />
          <path
            d="M12 16L22 9L27 18L17 24L7 24L4 13L18 3"
            stroke="#667A6E"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </g>
        <text
          x="46"
          y="22"
          fill={light ? "#EEE7E0" : "#1F2430"}
          fontFamily="Cormorant Garamond, serif"
          fontSize="20"
          letterSpacing="0.08em"
        >
          MATARIKI
        </text>
        <text
          x="46"
          y="38"
          fill={light ? "#D9C7B8" : "#667A6E"}
          fontFamily="Manrope, sans-serif"
          fontSize="9.5"
          letterSpacing="0.22em"
        >
          MASSAGE &amp; WELLNESS
        </text>
      </svg>
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[var(--mist)] text-[var(--night)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(238,231,224,0.86)] backdrop-blur-xl">
          <div className="section-shell flex items-center justify-between gap-6 py-4">
            <Logo />
            <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--night)] min-[960px]:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-[var(--moss)]">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="/contact/" className="hidden rounded-full bg-[var(--moss)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(31,36,48,0.16)] min-[960px]:inline-flex">
                Book a Session
              </a>
              <MobileNav />
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-[var(--night)] py-16 text-[var(--mist)]">
          <div className="section-shell grid gap-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <Logo light />
              <p className="mt-5 max-w-xs text-sm leading-7 text-[rgba(238,231,224,0.78)]">
                Tailored bodywork for rest, release, and renewal.
              </p>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-[0.24em] text-[var(--sand)]">Navigate</h2>
              <ul className="mt-5 space-y-3 text-sm text-[rgba(238,231,224,0.84)]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-[0.24em] text-[var(--sand)]">Visit</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[rgba(238,231,224,0.84)]">
                <li>Mount Maunganui, New Zealand</li>
                <li>Tue–Sat, 9am–6pm</li>
                <li>
                  <a href="mailto:hello@matarikiwellness.co.nz">hello@matarikiwellness.co.nz</a>
                </li>
                <li>
                  <a href="tel:+64215550182">+64 21 555 0182</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
