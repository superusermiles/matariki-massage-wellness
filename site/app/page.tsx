import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage Mount Maunganui | Therapeutic Massage & Wellness Studio",
  description:
    "Book therapeutic massage in Mount Maunganui with tailored deep tissue, pregnancy massage, hot stone therapy, and restorative wellness treatments.",
  keywords: [
    "massage Mount Maunganui",
    "therapeutic massage Mount Maunganui",
    "wellness studio Mount Maunganui",
    "deep tissue massage Mount Maunganui",
    "pregnancy massage Mount Maunganui",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Massage Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Therapeutic massage and restorative bodywork in Mount Maunganui for tension relief, nervous system support, and premium one-to-one care.",
    url: "https://matariki-massage-wellness.vercel.app/",
    siteName: "Matariki Massage & Wellness",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Therapeutic massage and restorative bodywork in Mount Maunganui for tension relief, nervous system support, and premium one-to-one care.",
  },
};

const benefits = [
  {
    title: "Tailored Care",
    copy: "Each session is adapted to your tension patterns, energy, and treatment goals so the work feels personal from the first touch.",
  },
  {
    title: "Calm Private Space",
    copy: "A quiet one-on-one studio experience with warm linens, grounding rituals, and time to truly settle before you leave.",
  },
  {
    title: "Therapeutic Results",
    copy: "Treatments support relief, mobility, recovery, and deeper rest with a pace that helps the nervous system soften too.",
  },
];

const treatments = [
  {
    title: "Deep Tissue Release",
    meta: "60 min from $125",
    copy: "Focused work for persistent tension, desk-tight shoulders, tired backs, and bodies that need deeper release without losing calm.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop",
    alt: "Deep tissue massage in Mount Maunganui with a therapist preparing a restorative treatment",
  },
  {
    title: "Hot Stone Ritual",
    meta: "90 min from $185",
    copy: "A slower, warming treatment that uses heated stones to melt muscular holding and create a full-body sense of exhale.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop",
    alt: "Hot stone massage treatment in a Mount Maunganui wellness studio with warm oils and linen",
  },
  {
    title: "Pregnancy Massage",
    meta: "60 min from $135",
    copy: "Nurturing support for changing bodies, designed to ease strain, improve comfort, and create restorative rest for parent and pēpi.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=1000&fit=crop",
    alt: "Pregnancy massage room in Mount Maunganui with calming bedding and natural light",
  },
];

const testimonials = [
  {
    quote: "The space is beautiful, but it’s the care in the treatment itself that keeps me coming back.",
    name: "Jess, Mount Maunganui",
  },
  {
    quote: "I arrived carrying tension in my shoulders and left feeling lighter in every sense.",
    name: "Amelia, Papamoa",
  },
  {
    quote: "Professional, calming, and consistently excellent.",
    name: "Renee, Tauranga",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="star-map overflow-hidden bg-[var(--mist)] py-16 md:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Therapeutic massage Mount Maunganui</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] md:text-[4rem] md:leading-[1.05]">
              Therapeutic massage in Mount Maunganui for deep relief and grounded wellness.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.78)] md:text-xl">
              Therapeutic massage and ritual-led treatments designed to release tension, calm the nervous system, and create space to recover.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact/" className="rounded-full bg-[var(--moss)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(31,36,48,0.16)]">
                Book a Session
              </a>
              <a href="/treatments/" className="rounded-full border border-[rgba(31,36,48,0.14)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:border-[var(--clay)] hover:text-[var(--clay)]">
                Explore Treatments
              </a>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.24em] text-[rgba(31,36,48,0.58)]">
              Private studio · By appointment · Gift vouchers available
            </p>
          </div>
          <div className="relative">
            <div className="media-shadow overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&h=1200&fit=crop"
                alt="Therapeutic massage studio in Mount Maunganui with candles, soft linen, and warm evening light"
                className="h-[520px] w-full object-cover md:h-[680px]"
              />
            </div>
            <div className="card-surface soft-shadow relative -mt-14 ml-auto max-w-xs rounded-[24px] p-6 md:absolute md:-bottom-10 md:-left-10 md:mt-0">
              <p className="text-sm uppercase tracking-[0.26em] text-[var(--moss)]">Signature Sessions</p>
              <p className="mt-3 text-2xl leading-tight">60 / 90 / 120 min treatments</p>
              <p className="mt-3 text-sm leading-7 text-[rgba(31,36,48,0.72)]">By appointment only, with time built in for consultation and grounded aftercare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[18px] bg-white p-8 soft-shadow">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--sand)] text-lg text-[var(--moss)]">✦</div>
              <h2 className="text-3xl">{benefit.title}</h2>
              <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Massage treatments in Mount Maunganui</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Bodywork that balances therapeutic relief with ritual.</h2>
            <p className="mt-5 text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              Every treatment is delivered with intuitive pacing, refined technique, and a calm atmosphere that lets the body release without being rushed.
            </p>
          </div>
          <div className="mt-14 space-y-12">
            {treatments.map((treatment, index) => (
              <article key={treatment.title} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="media-shadow overflow-hidden rounded-[28px]">
                    <img src={treatment.image} alt={treatment.alt} className="h-[420px] w-full object-cover transition duration-500 hover:scale-[1.04]" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-sm uppercase tracking-[0.26em] text-[var(--clay)]">{treatment.meta}</p>
                  <h3 className="mt-4 text-4xl md:text-5xl">{treatment.title}</h3>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">{treatment.copy}</p>
                  <a href="/treatments/" className="mt-7 inline-flex text-sm font-semibold uppercase tracking-[0.22em] text-[var(--moss)] transition hover:text-[var(--clay)]">
                    View treatment details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--night)] py-20 text-[var(--mist)] md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Studio experience</p>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">A restorative massage studio in Mount Maunganui designed for slower, more thoughtful care.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(238,231,224,0.78)]">
              Matariki Massage & Wellness was created for people who want tailored treatment in an environment that feels intimate, grounded, and unhurried. Sessions begin with listening and end with practical guidance so the benefits last beyond the table.
            </p>
            <blockquote className="mt-8 border-l border-[rgba(200,169,107,0.45)] pl-6 text-2xl leading-10 text-white">
              “The work here is calm, attentive, and deeply restorative from beginning to end.”
            </blockquote>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-3xl text-white">1:1</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[rgba(238,231,224,0.64)]">Private care</p>
              </div>
              <div>
                <p className="text-3xl text-white">Tue–Sat</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[rgba(238,231,224,0.64)]">Appointments</p>
              </div>
              <div>
                <p className="text-3xl text-white">60–120</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[rgba(238,231,224,0.64)]">Minute sessions</p>
              </div>
            </div>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
              alt="Boutique massage and wellness studio interior in Mount Maunganui with warm natural materials"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1100&h=700&fit=crop"
              alt="Massage gift voucher presentation in Mount Maunganui with refined wrapping and wellness styling"
              className="h-[380px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Gift vouchers</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Give someone space to exhale.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.78)]">
              Choose a digital or studio-ready gift voucher for birthdays, thank-yous, new parents, or anyone who would value time to slow down and be cared for well.
            </p>
            <a href="/gift-vouchers/" className="mt-7 inline-flex rounded-full bg-[var(--night)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(31,36,48,0.18)]">
              Explore Gift Options
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Testimonials</p>
              <h2 className="mt-4 text-4xl md:text-5xl">What clients say after making time for themselves.</h2>
            </div>
            <div className="overflow-hidden rounded-[24px] media-shadow lg:w-[320px]">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
                alt="Calm massage studio ambience with candlelit wellness styling in Mount Maunganui"
                className="h-[220px] w-full object-cover"
              />
            </div>
          </div>
          <div className="snap-row mt-10 flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="card-surface soft-shadow min-w-[280px] rounded-[18px] p-8 md:min-w-0">
                <p className="text-2xl leading-10 text-[var(--night)]">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--moss)]">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--night)] py-20 text-center text-[var(--mist)] md:py-24">
        <div className="section-shell max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Book when you’re ready</p>
          <h2 className="mt-4 text-4xl text-white md:text-6xl">Ready to return to yourself?</h2>
          <p className="mt-6 text-lg leading-8 text-[rgba(238,231,224,0.78)]">
            If you know what you need or want help choosing the right treatment, get in touch and we’ll guide you toward the best fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact/" className="rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:-translate-y-0.5">
              Book a Session
            </a>
            <a href="/contact/" className="rounded-full border border-[rgba(238,231,224,0.24)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
