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

const preparationNotes = [
  "arrive 5 minutes early",
  "hydrate well after treatment",
  "note pregnancy or injuries in the form",
  "gift vouchers welcome",
];

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Contact / Book</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Book your massage in Mount Maunganui or get in touch.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              If you’re unsure what to choose, we can help. Reach out with what your body has been carrying lately and we’ll guide you toward the right treatment length and approach.
            </p>
            <div className="mt-8 space-y-3 text-lg leading-8 text-[rgba(31,36,48,0.78)]">
              {contactDetails.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>
          <div className="card-surface soft-shadow rounded-[28px] p-8 md:p-10">
            <h2 className="text-4xl">Send an enquiry</h2>
            <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">
              We’ll reply with appointment options, treatment guidance, or details about vouchers and personalised sessions.
            </p>
            <form className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Name
                <input type="text" placeholder="Your name" className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Email
                <input type="email" placeholder="you@example.com" className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Phone
                <input type="tel" placeholder="Optional" className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                What would you like help with?
                <textarea placeholder="Tell us about the treatment, voucher, or support you’re looking for." rows={5} className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none" />
              </label>
              <button type="submit" className="rounded-full bg-[var(--moss)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Send Enquiry
              </button>
            </form>
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
