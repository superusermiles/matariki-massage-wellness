import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Matariki Massage & Wellness",
  description:
    "Thank you for your enquiry. Matariki Massage & Wellness will be in touch to confirm the next steps for your booking or question.",
  alternates: {
    canonical: "/contact/thank-you/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactThankYouPage() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--moss)]">Enquiry sent</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">Thank you. Your message is on its way.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(31,36,48,0.76)]">
              We’ve received your enquiry and will reply with the next steps as soon as we can during studio hours. If your request is time-sensitive, you can also call +64 21 555 0182.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/treatments/"
                className="inline-flex rounded-full bg-[var(--moss)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore Treatments
              </a>
              <a
                href="/"
                className="inline-flex rounded-full border border-[rgba(31,36,48,0.14)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:-translate-y-0.5"
              >
                Return Home
              </a>
            </div>
          </div>
          <div className="media-shadow overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=900&fit=crop"
              alt="Calm wellness textures and linen detail for the Matariki Massage thank-you page"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
