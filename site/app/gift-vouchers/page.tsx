import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Vouchers | Massage Gift Cards Mount Maunganui",
  description:
    "Buy massage gift vouchers in Mount Maunganui for therapeutic massage, wellness treatments, and thoughtful gift giving with digital or studio-ready options.",
  keywords: [
    "massage gift vouchers Mount Maunganui",
    "gift cards massage Mount Maunganui",
    "wellness gift vouchers Tauranga",
  ],
  alternates: {
    canonical: "/gift-vouchers/",
  },
  openGraph: {
    title: "Massage Gift Vouchers in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Choose massage gift vouchers in Mount Maunganui for birthdays, thank-yous, new parents, and calm, genuinely useful gifting.",
    url: "https://matariki-massage-wellness.vercel.app/gift-vouchers/",
    siteName: "Matariki Massage & Wellness",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Gift Vouchers in Mount Maunganui | Matariki Massage & Wellness",
    description:
      "Choose massage gift vouchers in Mount Maunganui for birthdays, thank-yous, new parents, and calm, genuinely useful gifting.",
  },
};

const voucherOptions = [
  {
    title: "$125 restorative voucher",
    copy:
      "A thoughtful option for a 60-minute treatment. Ideal for someone who would benefit from a reset, relief from tension, or dedicated time to exhale.",
    image:
      "https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1200&h=900&fit=crop",
    alt: "Massage gift voucher in Mount Maunganui with ribbon and a soft wellness feel",
  },
  {
    title: "$185 hot stone ritual",
    copy:
      "Gift a longer warming treatment designed around deep rest, slower pacing, and whole-body release. A lovely option for milestone gifting.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=900&fit=crop",
    alt: "Mount Maunganui wellness gift setup with tea, card, and calm studio details",
  },
  {
    title: "Custom amount voucher",
    copy:
      "Choose a flexible amount and let your recipient book the treatment that suits them best. Available for individual gifting or combined group contributions.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=900&fit=crop",
    alt: "Elegant massage gift card presentation with linen and candlelight textures",
  },
];

const steps = [
  {
    title: "Choose amount",
    copy: "Select a treatment-based voucher or a custom value depending on how you’d like to gift.",
  },
  {
    title: "Receive digital or studio-ready voucher",
    copy: "We can arrange a digital voucher by email or a beautifully presented studio-ready option for in-person giving.",
  },
  {
    title: "Recipient books their preferred time",
    copy: "The voucher holder gets in touch when they’re ready, and we guide them toward the most suitable treatment and appointment timing.",
  },
];

const faqItems = [
  {
    question: "How long are vouchers valid for?",
    answer: "Voucher validity and any timing details are confirmed with purchase so you can gift with clarity and confidence.",
  },
  {
    question: "Can I choose digital or printed presentation?",
    answer: "Yes. Vouchers can be sent digitally for quick gifting or arranged in a studio-ready format if you’d like something tangible to give.",
  },
  {
    question: "Can you include a personalised note?",
    answer: "Absolutely. If you’d like to add a short message, include it in your enquiry and we’ll incorporate it into the voucher presentation where possible.",
  },
];

export default function GiftVouchersPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Gift vouchers</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">A thoughtful gift that feels genuinely useful.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              Matariki gift vouchers are designed for meaningful giving — practical, beautiful, and centred on rest, recovery, and care. Choose a treatment or amount and we’ll make the process feel polished from start to finish.
            </p>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1100&h=700&fit=crop"
              alt="Massage gift voucher box in Mount Maunganui with a refined wellness aesthetic"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {voucherOptions.map((option) => (
            <article key={option.title} className="overflow-hidden rounded-[24px] bg-[var(--mist)] soft-shadow">
              <img src={option.image} alt={option.alt} className="h-56 w-full object-cover" />
              <div className="p-7">
                <h2 className="text-3xl">{option.title}</h2>
                <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{option.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=700&fit=crop"
              alt="Beautifully presented wellness voucher with soft paper, ribbon, and natural light"
              className="h-[430px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">How it works</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Simple, polished gifting from first enquiry to booking.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              Purchasing a voucher is designed to feel easy and personal, whether you need a last-minute digital option or something beautifully prepared to hand over in person.
            </p>
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[24px] bg-white p-6 soft-shadow">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--clay)]">Step {index + 1}</p>
                  <h3 className="mt-3 text-2xl">{step.title}</h3>
                  <p className="mt-4 leading-8 text-[rgba(31,36,48,0.74)]">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Voucher FAQ</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Answers for gifting with confidence.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              Helpful details about voucher timing, delivery format, and personalised presentation.
            </p>
            <div className="media-shadow mt-8 overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=700&fit=crop"
                alt="Gift voucher presentation details with soft paper textures and natural light"
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

      <section className="bg-[var(--sand)] py-20 md:py-24">
        <div className="section-shell text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Purchase a voucher</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Ready to organise a gift voucher?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.78)]">
            Send through the amount or treatment you have in mind and we’ll reply with payment steps, delivery options, and timing.
          </p>
          <a href="/contact/" className="mt-8 inline-flex rounded-full bg-[var(--night)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Purchase a Voucher
          </a>
        </div>
      </section>
    </main>
  );
}
