import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book a Massage Mount Maunganui",
  description:
    "Book a massage in Mount Maunganui or enquire about therapeutic massage, pregnancy massage, gift vouchers, and personalised wellness treatments.",
  keywords: [
    "book massage Mount Maunganui",
    "contact massage studio Mount Maunganui",
    "pregnancy massage Mount Maunganui booking",
    "massage gift voucher enquiry Mount Maunganui",
  ],
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Book a Massage in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Get in touch to book therapeutic massage in Mount Maunganui or ask about treatments, gift vouchers, and appointment options.",
    url: "https://matariki-massage-wellness.vercel.app/contact/",
    siteName: "Matariki Massage & Wellness",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Massage in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Get in touch to book therapeutic massage in Mount Maunganui or ask about treatments, gift vouchers, and appointment options.",
  },
};

const contactDetails = [
  "Mount Maunganui, New Zealand",
  "Tue–Sat, 9am–6pm",
  "hello@matarikiwellness.co.nz",
  "+64 21 555 0182",
  "By appointment only",
];

const bookingMethods = [
  {
    title: "Email the studio",
    detail: "hello@matarikiwellness.co.nz",
    copy:
      "Reach out with your preferred treatment, ideal session length, and a little about what your body needs right now. We’ll reply during studio hours with the next step.",
    href: "mailto:hello@matarikiwellness.co.nz",
    label: "Email hello@matarikiwellness.co.nz",
  },
  {
    title: "Call or text",
    detail: "+64 21 555 0182",
    copy:
      "If you would rather talk through timings, pregnancy-safe support, or voucher options, call or send a message and we’ll help you choose well.",
    href: "tel:+64215550182",
    label: "Call +64 21 555 0182",
  },
  {
    title: "Book by appointment",
    detail: "Tuesday to Saturday · 9am–6pm",
    copy:
      "Sessions are arranged by appointment only, keeping arrival times calm, private, and tailored to each guest.",
    href: "/treatments/",
    label: "Explore treatments before booking",
  },
];

const preparationNotes = [
  "arrive 5 minutes early",
  "hydrate well after treatment",
  "note pregnancy or injuries in your enquiry",
  "gift vouchers welcome",
];

const visitNotes = [
  "A calm private studio in Mount Maunganui with appointment-only arrivals.",
  "Street parking is available nearby, with a short easy walk to the studio entrance.",
  "Your confirmation email includes the full address and arrival details before your session.",
];

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Contact / Book</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Book your session or get in touch.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              If you’re unsure what to choose, we can help. Share what your body has been carrying lately and we’ll guide you toward the right treatment length, approach, or voucher option.
            </p>
            <div className="mt-8 space-y-3 text-lg leading-8 text-[rgba(31,36,48,0.78)]">
              {contactDetails.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>
          <div className="card-surface soft-shadow rounded-[28px] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--clay)]">Booking methods and hours</p>
            <h2 className="mt-4 text-4xl">Choose the contact style that feels easiest.</h2>
            <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">
              The studio books directly by email or phone, so you can ask questions, mention injuries or pregnancy, and choose the right session without a rushed checkout flow.
            </p>
            <div className="mt-8 grid gap-4">
              {bookingMethods.map((method) => (
                <article key={method.title} className="rounded-[22px] border border-[rgba(31,36,48,0.08)] bg-white p-6 soft-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--moss)]">{method.title}</p>
                      <h3 className="mt-3 text-2xl text-[var(--night)]">{method.detail}</h3>
                      <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{method.copy}</p>
                    </div>
                    <a
                      href={method.href}
                      className="inline-flex rounded-full bg-[var(--moss)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      {method.label}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-[18px] bg-[var(--sand)] px-5 py-4 text-sm leading-7 text-[rgba(31,36,48,0.76)]">
              Prefer to start with a simple note? Email hello@matarikiwellness.co.nz with your preferred days, ideal treatment, and any relevant injuries, pregnancy notes, or voucher questions.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&h=800&fit=crop"
              alt="Mount Maunganui massage studio room with warm neutrals, seating, and natural light"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Studio location</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Easy to arrive, easy to settle.</h2>
            <p className="mt-5 text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              The studio is based in Mount Maunganui and operates by appointment only. You’ll receive the full address with your booking confirmation, along with arrival details so your visit feels calm from the outset.
            </p>
            <div className="mt-6 rounded-[18px] bg-[var(--mist)] p-6 soft-shadow">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--clay)]">Arrival notes</p>
              <p className="mt-3 leading-8 text-[rgba(31,36,48,0.74)]">
                Street parking is available nearby. Please arrive a few minutes early to settle in, and avoid heavy meals immediately before your session if possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Visit panel</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A map-style overview before you arrive.</h2>
            <div className="mt-8 space-y-4">
              {visitNotes.map((note) => (
                <div key={note} className="rounded-[18px] bg-white px-5 py-4 soft-shadow">
                  <p className="leading-8 text-[rgba(31,36,48,0.74)]">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[rgba(31,36,48,0.1)] bg-[linear-gradient(135deg,#1F2430_0%,#667A6E_48%,#D9C7B8_100%)] p-6 text-white shadow-[0_20px_50px_rgba(31,36,48,0.14)]">
            <div className="rounded-[24px] border border-white/20 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-[rgba(255,255,255,0.74)]">Mount Maunganui</p>
              <h3 className="mt-3 text-3xl">Private studio arrival guide</h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] bg-white/12 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,255,255,0.72)]">Neighbourhood</p>
                  <p className="mt-3 text-lg leading-8">Calm residential setting close to central Mount Maunganui.</p>
                </div>
                <div className="rounded-[18px] bg-white/12 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,255,255,0.72)]">Parking</p>
                  <p className="mt-3 text-lg leading-8">Nearby street parking and easy ground-level access.</p>
                </div>
                <div className="rounded-[18px] bg-white/12 p-5 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,255,255,0.72)]">Confirmation details</p>
                  <p className="mt-3 text-lg leading-8">Full address and arrival steps are shared once your session time is confirmed, keeping the experience private and easy to navigate.</p>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-[20px] border border-white/15 bg-[rgba(255,255,255,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=700&fit=crop"
                  alt="Calm linen and natural materials representing the private studio arrival experience"
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Preparation notes</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A few simple things before your appointment.</h2>
            <ul className="mt-8 space-y-4">
              {preparationNotes.map((note) => (
                <li key={note} className="rounded-[18px] bg-[var(--sand)] px-5 py-4 text-lg capitalize text-[var(--night)]">
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop"
              alt="Wellness detail image for Mount Maunganui massage bookings with calm textures and natural materials"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
