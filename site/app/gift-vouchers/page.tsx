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
    title: "Dollar-value voucher",
    copy:
      "Choose any amount and let your recipient book the treatment that suits them best. A flexible option for birthdays, thank-yous, and group gifting.",
    image:
      "https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1200&h=900&fit=crop",
    alt: "Massage gift voucher in Mount Maunganui with ribbon and a soft wellness feel",
  },
  {
    title: "Signature treatment voucher",
    copy:
      "Gift a 60, 90, or 120 minute treatment for someone who would benefit from dedicated time to rest, recover, and feel looked after.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=900&fit=crop",
    alt: "Mount Maunganui wellness gift setup with tea, card, and calm studio details",
  },
  {
    title: "Digital or studio-ready",
    copy:
      "Receive your voucher by email for quick gifting, or request a beautifully presented version ready to give in person.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=900&fit=crop",
    alt: "Elegant massage gift card presentation with linen and candlelight textures",
  },
];

const occasions = ["birthdays", "new parents", "thank-yous", "team gifts", "holiday giving", "just because"];

export default function GiftVouchersPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Gift vouchers</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Massage gift vouchers in Mount Maunganui for thoughtful, restorative giving.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              Matariki gift vouchers are designed for meaningful giving — practical, beautiful, and centred on rest. Choose a treatment, select a value, and we’ll help make it easy to give well.
            </p>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1200&h=1000&fit=crop"
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
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=900&fit=crop"
              alt="Warm Mount Maunganui wellness room reflecting the massage experience behind the gift voucher"
              className="h-[430px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Perfect for</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Gifts that feel generous, calming, and genuinely useful.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {occasions.map((occasion) => (
                <span key={occasion} className="rounded-full border border-[rgba(31,36,48,0.12)] bg-white px-4 py-2 text-sm uppercase tracking-[0.16em] text-[var(--night)]">
                  {occasion}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-[rgba(31,36,48,0.74)]">
              Whether you want a flexible amount or a specific treatment, vouchers can be arranged with calm, polished presentation and clear redemption details.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 md:py-24">
        <div className="section-shell text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Order a voucher</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Ready to organise a gift voucher?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(31,36,48,0.78)]">
            Send through the amount or treatment you have in mind and we’ll reply with payment steps, delivery options, and timing.
          </p>
          <a href="/contact/" className="mt-8 inline-flex rounded-full bg-[var(--night)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            Enquire About Vouchers
          </a>
        </div>
      </section>
    </main>
  );
}
