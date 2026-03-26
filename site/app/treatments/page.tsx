import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments | Deep Tissue, Pregnancy & Hot Stone Massage",
  description:
    "Explore therapeutic massage treatments in Mount Maunganui including deep tissue massage, pregnancy massage, hot stone therapy, and longer restorative sessions.",
  keywords: [
    "deep tissue massage Mount Maunganui",
    "pregnancy massage Mount Maunganui",
    "hot stone massage Mount Maunganui",
    "therapeutic massage treatments Mount Maunganui",
  ],
  alternates: {
    canonical: "/treatments/",
  },
  openGraph: {
    title: "Massage Treatments in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Find the right therapeutic massage treatment in Mount Maunganui, from deep tissue relief to pregnancy massage and hot stone therapy.",
    url: "https://matariki-massage-wellness.vercel.app/treatments/",
    siteName: "Matariki Massage & Wellness",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Treatments in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Find the right therapeutic massage treatment in Mount Maunganui, from deep tissue relief to pregnancy massage and hot stone therapy.",
  },
};

const treatments = [
  {
    title: "Therapeutic Reset",
    duration: "60 minutes",
    price: "$125",
    copy:
      "A personalised full-body massage for people carrying everyday stress, desk tension, or general fatigue. Ideal for regular maintenance and a grounded reset.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=900&fit=crop",
    alt: "Therapeutic massage treatment in Mount Maunganui with oils and towels prepared for a restorative session",
  },
  {
    title: "Deep Tissue Release",
    duration: "90 minutes",
    price: "$175",
    copy:
      "Targeted deeper work for shoulders, lower back, hips, and other areas that need focused attention. Designed to relieve persistent muscular tension while keeping the body calm.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop",
    alt: "Deep tissue massage and hot stone therapy scene in a Mount Maunganui wellness studio",
  },
  {
    title: "Pregnancy Nurture",
    duration: "60 minutes",
    price: "$135",
    copy:
      "Supportive massage tailored for pregnancy discomfort, with careful positioning and soothing technique to ease pressure through the back, hips, and legs.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=900&fit=crop",
    alt: "Pregnancy massage room in Mount Maunganui prepared for a nurturing prenatal treatment",
  },
  {
    title: "Hot Stone Ritual",
    duration: "90 minutes",
    price: "$185",
    copy:
      "A warming treatment that combines massage and heated stones to encourage circulation, soften held tension, and create a slower, deeply exhaling treatment experience.",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=900&fit=crop",
    alt: "Hot stone massage room in Mount Maunganui with warm tones and restorative atmosphere",
  },
  {
    title: "Extended Restoration",
    duration: "120 minutes",
    price: "$230",
    copy:
      "For clients who want more time to unwind and address multiple areas without rushing. This longer session allows detailed therapeutic work with time for integration.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=900&fit=crop",
    alt: "Mount Maunganui wellness studio detail with linen, candlelight, and natural textures for restorative massage",
  },
];

const inclusions = [
  "brief pre-treatment consultation",
  "tailored pressure and focus areas",
  "warm towels and grounding touches",
  "simple aftercare guidance",
];

export default function TreatmentsPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Treatments</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Massage treatments in Mount Maunganui shaped around what your body needs most.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              Every treatment is personalised on the day. Choose the session length that suits your energy, recovery needs, and the amount of support your body is asking for.
            </p>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=900&fit=crop"
              alt="Therapeutic massage studio in Mount Maunganui with soft light and inviting treatment setting"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell space-y-10">
          {treatments.map((treatment, index) => (
            <article key={treatment.title} className="grid gap-8 border-b border-[rgba(31,36,48,0.08)] pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="media-shadow overflow-hidden rounded-[28px]">
                  <img src={treatment.image} alt={treatment.alt} className="h-[380px] w-full object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--clay)]">
                  {treatment.duration} · {treatment.price}
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl">{treatment.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">{treatment.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Included in every visit</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Refined treatment, thoughtful pacing, and practical care.</h2>
            <ul className="mt-8 space-y-4">
              {inclusions.map((item) => (
                <li key={item} className="rounded-[18px] bg-[var(--sand)] px-5 py-4 text-lg capitalize text-[var(--night)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=900&fit=crop"
              alt="Mount Maunganui massage studio ambience with candlelit treatment styling and calm evening mood"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--night)] py-20 text-center text-[var(--mist)] md:py-24">
        <div className="section-shell max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Need guidance?</p>
          <h2 className="mt-4 text-4xl text-white md:text-5xl">We can help you choose the right session length.</h2>
          <p className="mt-6 text-lg leading-8 text-[rgba(238,231,224,0.78)]">
            If you are deciding between maintenance care, deeper focused work, or a longer restorative treatment, get in touch and we’ll point you toward the best fit.
          </p>
          <a href="/contact/" className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:-translate-y-0.5">
            Ask About Treatments
          </a>
        </div>
      </section>
    </main>
  );
}
