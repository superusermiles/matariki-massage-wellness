import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Massage Studio Mount Maunganui",
  description:
    "Learn about Matariki Massage & Wellness, a boutique massage studio in Mount Maunganui offering therapeutic massage with calm, tailored care.",
  keywords: [
    "about massage studio Mount Maunganui",
    "boutique massage studio Mount Maunganui",
    "therapeutic massage Mount Maunganui",
  ],
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Matariki Massage & Wellness | Mount Maunganui Massage Studio",
    description:
      "Discover the grounded approach behind this Mount Maunganui massage studio, where tailored bodywork meets calm, thoughtful care.",
    url: "https://matariki-massage-wellness.vercel.app/about/",
    siteName: "Matariki Massage & Wellness",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Matariki Massage & Wellness | Mount Maunganui Massage Studio",
    description:
      "Discover the grounded approach behind this Mount Maunganui massage studio, where tailored bodywork meets calm, thoughtful care.",
  },
};

const pillars = [
  {
    title: "Listen First",
    copy: "Every appointment begins with conversation so your session can respond to how you feel today, not just what you booked last time.",
  },
  {
    title: "Treat the Whole Body",
    copy: "We work with muscular tension, nervous system load, energy levels, and recovery needs to create a treatment that feels complete.",
  },
  {
    title: "Leave You Lighter",
    copy: "The goal is not intensity for its own sake. It is steady, effective care that leaves you more mobile, more settled, and better supported.",
  },
];

const reasons = [
  "tailored pressure and pace",
  "consistent therapist relationship",
  "premium calm environment",
  "practical aftercare guidance",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=700&fit=crop",
    alt: "Boutique massage studio interior in Mount Maunganui with linen and natural textures",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=700&h=700&fit=crop",
    alt: "Wellness tea and calming studio details inside a Mount Maunganui massage space",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=700&h=700&fit=crop",
    alt: "Ambient massage room in Mount Maunganui with warm lighting and natural materials",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">About the studio</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">About our Mount Maunganui massage studio and calmer way of caring.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              Matariki Massage & Wellness offers thoughtful bodywork rooted in listening, rhythm, and recovery. The studio was shaped to feel intimate and grounded, with enough space for you to slow down before the treatment even begins.
            </p>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=1100&fit=crop"
              alt="Mount Maunganui massage therapist portrait detail conveying calm and thoughtful care"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Brand story</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Created as a personal, grounded alternative to rushed wellness spaces.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[rgba(31,36,48,0.74)]">
            <p>
              The studio began with a simple idea: bodywork should feel deeply attentive, not transactional. Treatments here are paced with care, shaped by conversation, and designed to support recovery in a way that feels both practical and restorative.
            </p>
            <p>
              Rather than a generic spa experience, Matariki offers something more intimate. The room is quiet. The atmosphere is warm. The intention is to create a place where people can arrive carrying stress, fatigue, or physical tension and leave feeling steadier in themselves.
            </p>
            <p>
              That sense of grounded care extends beyond the table too, through honest guidance, thoughtful follow-up, and a consistent therapist relationship that helps each visit build on the last.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop"
              alt="Coastal Mount Maunganui landscape reflecting calm, rhythm, and restorative space"
              className="h-[440px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Philosophy</p>
            <h2 className="mt-4 text-4xl md:text-5xl">An approach built around care, rhythm, and real relief.</h2>
            <div className="mt-8 space-y-5">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[18px] bg-[var(--mist)] p-6 soft-shadow">
                  <h3 className="text-3xl">{pillar.title}</h3>
                  <p className="mt-3 leading-8 text-[rgba(31,36,48,0.74)]">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--night)] py-20 text-[var(--mist)] md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Why clients return</p>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">Care that feels consistent, refined, and easy to trust.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-[18px] border border-white/10 bg-white/5 p-6">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=520&fit=crop"
                  alt="Mount Maunganui massage studio detail with linen, candlelight, and premium textures"
                  className="mb-4 h-36 w-full rounded-[14px] object-cover"
                />
                <p className="text-lg capitalize text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Studio gallery</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A tactile, calming space with room to breathe.</h2>
          </div>
          <div className="snap-row mt-10 flex gap-6 overflow-x-auto pb-2">
            {gallery.map((image) => (
              <div key={image.src} className="media-shadow min-w-[280px] overflow-hidden rounded-[24px] md:min-w-[340px] lg:min-w-[360px]">
                <img src={image.src} alt={image.alt} className="h-[320px] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 md:py-24">
        <div className="section-shell text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Your first visit</p>
          <h2 className="mt-4 text-4xl md:text-5xl">If you’re ready for thoughtful bodywork, we’d love to welcome you in.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.78)]">
            Book your first appointment or reach out if you would like help choosing the treatment length and style that suits you best.
          </p>
          <a href="/contact/" className="mt-8 inline-flex rounded-full bg-[var(--night)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Book Your First Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
