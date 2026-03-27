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
            <h2 className="text-4xl">Send an enquiry</h2>
            <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">
              Use the enquiry form below and your message will open as a pre-filled email to hello@matarikiwellness.co.nz, making the submission flow clear and functional on static hosting.
            </p>
            <form className="mt-8 grid gap-5" action="https://formsubmit.co/hello@matarikiwellness.co.nz" method="POST">
              <input type="hidden" name="_subject" value="Website enquiry — Matariki Massage & Wellness" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://matariki-massage-wellness.vercel.app/contact/?enquiry=sent" />
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  aria-label="Your full name"
                  required
                  className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-label="Your email address"
                  required
                  className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  aria-label="Your phone number"
                  className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[var(--night)]">
                What would you like help with?
                <textarea
                  name="message"
                  rows={5}
                  aria-label="Tell us about your treatment or voucher enquiry"
                  required
                  className="rounded-[14px] border border-[rgba(31,36,48,0.12)] bg-white px-4 py-3 outline-none"
                />
              </label>
              <div className="rounded-[18px] bg-[var(--sand)] px-5 py-4 text-sm leading-7 text-[rgba(31,36,48,0.76)]">
                After you submit, your enquiry is sent through a hosted form flow and returns you to this contact page. Prefer direct contact instead? Email hello@matarikiwellness.co.nz or call +64 21 555 0182.
              </div>
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
