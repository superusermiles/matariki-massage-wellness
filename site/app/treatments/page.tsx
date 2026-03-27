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
    title: "Therapeutic Massage",
    durations: ["60 min · $125", "90 min · $170"],
    copy:
      "A personalised session for everyday stress, fatigue, and areas of holding that need calm therapeutic attention. Ideal for regular care, nervous system settling, and whole-body reset.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=900&fit=crop",
    alt: "Therapeutic massage treatment in Mount Maunganui with oils and towels prepared for a restorative session",
  },
  {
    title: "Deep Tissue Release",
    durations: ["60 min · $130", "90 min · $178"],
    copy:
      "Focused work for shoulders, hips, back, and other areas carrying persistent tension. This treatment uses slower pressure and tailored pacing to support relief without losing the sense of calm.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop",
    alt: "Deep tissue massage and hot stone therapy scene in a Mount Maunganui wellness studio",
  },
  {
    title: "Hot Stone Ritual",
    durations: ["90 min · $185"],
    copy:
      "A warming ritual that combines massage with heated stones to soften deeply held tension, encourage circulation, and create a slower treatment rhythm that feels especially restorative.",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=900&fit=crop",
    alt: "Hot stone massage room in Mount Maunganui with warm tones and restorative atmosphere",
  },
  {
    title: "Pregnancy Massage",
    durations: ["60 min · $135", "90 min · $182"],
    copy:
      "Supportive bodywork tailored for pregnancy, with considered positioning and a soothing approach that eases pressure through the back, hips, legs, and lower body.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=900&fit=crop",
    alt: "Pregnancy massage room in Mount Maunganui prepared for a nurturing prenatal treatment",
  },
  {
    title: "Recovery Session",
    durations: ["45 min · $98"],
    copy:
      "A shorter targeted treatment for one main area of tension or post-training recovery. Useful when time is limited but your body needs focused therapeutic support.",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=900&fit=crop",
    alt: "Recovery-focused massage treatment setting with clean towels and calm light in Mount Maunganui",
  },
];

const rituals = [
  {
    title: "Aromatherapy blend",
    price: "+$15",
    copy: "A personalised essential oil blend chosen to support grounding, deeper rest, or a clearer post-treatment exhale.",
  },
  {
    title: "Hot towel grounding ritual",
    price: "+$20",
    copy: "A warming towel ritual added through the session to soften the body and bring a slower sense of arrival.",
  },
  {
    title: "Scalp massage add-on",
    price: "+$18",
    copy: "A focused scalp sequence to ease head, neck, and jaw tension while extending the feeling of whole-body calm.",
  },
];

const faqItems = [
  {
    question: "What should I wear?",
    answer:
      "Wear whatever feels easy to change in and out of. You’ll be draped appropriately throughout your treatment, and we’ll talk through comfort and pressure before you begin.",
  },
  {
    question: "Is massage suitable during pregnancy?",
    answer:
      "Yes. Pregnancy massage is tailored with supportive positioning and careful pacing. If you are pregnant, mention it when booking so the session can be prepared appropriately.",
  },
  {
    question: "How do I choose the right session length?",
    answer:
      "A 60-minute session suits maintenance care or one main tension area. Choose 90 minutes for deeper focused work, or 45 minutes for a targeted recovery session when time is tight.",
  },
  {
    question: "Do you offer gift vouchers?",
    answer:
      "Yes. Gift vouchers are available as specific treatment options or flexible amounts, with digital and studio-ready presentation available on request.",
  },
];

export default function TreatmentsPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Treatments</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Treatments that meet you where you are.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              Every session is personalised on the day. Choose the treatment and timing that fits your energy, your tension pattern, and the kind of support your body needs right now.
            </p>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=700&fit=crop"
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
                <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.24em] text-[var(--clay)]">
                  {treatment.durations.map((duration) => (
                    <span key={duration} className="rounded-full bg-[var(--mist)] px-4 py-2">
                      {duration}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-4xl md:text-5xl">{treatment.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">{treatment.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell space-y-10">
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Add-ons / rituals</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Small additions that deepen the feeling of care.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">
                Add a ritual element to your treatment if you want a little more warmth, sensory grounding, or tension release through the scalp and nervous system.
              </p>
            </div>
            <div className="media-shadow overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop"
                alt="Add-on ritual setup with hot towels and warm massage stones in a calming wellness studio"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {rituals.map((ritual) => (
              <article key={ritual.title} className="rounded-[24px] bg-white p-6 soft-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl">{ritual.title}</h3>
                    <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{ritual.copy}</p>
                  </div>
                  <p className="rounded-full bg-[var(--sand)] px-4 py-2 text-sm font-semibold text-[var(--night)]">{ritual.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Treatment FAQ</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Helpful answers before you book.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              A few common questions about what to wear, choosing the right length, pregnancy-safe care, and gift voucher options.
            </p>
            <div className="media-shadow mt-8 overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=900&fit=crop"
                alt="Mount Maunganui massage studio ambience with candlelit treatment styling and calm evening mood"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-[24px] border border-[rgba(31,36,48,0.08)] bg-[var(--mist)] p-6 soft-shadow">
                <h3 className="text-2xl">{item.question}</h3>
                <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--night)] py-20 text-center text-[var(--mist)] md:py-24">
        <div className="section-shell max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Book your treatment</p>
          <h2 className="mt-4 text-4xl text-white md:text-5xl">Ready to choose the treatment that fits best?</h2>
          <p className="mt-6 text-lg leading-8 text-[rgba(238,231,224,0.78)]">
            If you are deciding between targeted relief, a longer ritual, or pregnancy-safe support, get in touch and we’ll guide you toward the best option.
          </p>
          <a href="/contact/" className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:-translate-y-0.5">
            Book Your Treatment
          </a>
        </div>
      </section>
    </main>
  );
}
