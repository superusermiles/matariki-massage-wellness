"use client";

import { FormEvent, useState } from "react";

const thankYouUrl = "/contact/thank-you/";
const formEndpoint = "https://formsubmit.co/ajax/hello@matarikiwellness.co.nz";
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  sessionLength: "",
  preferredTimes: "",
  message: "",
};

type FormValues = typeof defaultValues;

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Matariki Massage enquiry",
          _template: "table",
          _captcha: "false",
          _autoresponse:
            "Thank you for your enquiry. Matariki Massage & Wellness will be in touch during studio hours with the next step for your booking or question.",
          name: values.name,
          email: values.email,
          phone: values.phone,
          treatment: values.treatment,
          session_length: values.sessionLength,
          preferred_times: values.preferredTimes,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send your enquiry right now.");
      }

      setValues(defaultValues);
      window.location.href = thankYouUrl;
    } catch {
      setErrorMessage(
        "We couldn’t send your enquiry just now. Please try again, email hello@matarikiwellness.co.nz, or call +64 21 555 0182."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Full name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            required
            autoComplete="name"
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Email address
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            required
            autoComplete="email"
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Phone number
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            autoComplete="tel"
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
            placeholder="+64 …"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Preferred treatment
          <select
            name="treatment"
            value={values.treatment}
            onChange={(event) => updateValue("treatment", event.target.value)}
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
          >
            <option value="">Select a treatment</option>
            <option>Therapeutic Massage</option>
            <option>Deep Tissue Release</option>
            <option>Hot Stone Ritual</option>
            <option>Pregnancy Massage</option>
            <option>Recovery Session</option>
            <option>Gift Voucher</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Ideal session length
          <select
            name="session_length"
            value={values.sessionLength}
            onChange={(event) => updateValue("sessionLength", event.target.value)}
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
          >
            <option value="">Choose a duration</option>
            <option>45 minutes</option>
            <option>60 minutes</option>
            <option>90 minutes</option>
            <option>120 minutes</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
          Preferred days or times
          <input
            type="text"
            name="preferred_times"
            value={values.preferredTimes}
            onChange={(event) => updateValue("preferredTimes", event.target.value)}
            className="min-h-12 rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
            placeholder="e.g. Fridays after 2pm"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-[var(--night)]">
        What would you like support with?
        <textarea
          name="message"
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          required
          rows={6}
          className="rounded-[18px] border border-[rgba(31,36,48,0.14)] bg-[var(--mist)] px-4 py-3 text-base font-normal text-[var(--night)] outline-none transition focus:border-[var(--moss)]"
          placeholder="Tell us about tension patterns, recovery goals, pregnancy notes, injuries, voucher questions, or anything else that will help tailor your session."
        />
      </label>

      {errorMessage ? (
        <p className="rounded-[18px] border border-[rgba(183,132,117,0.35)] bg-[rgba(183,132,117,0.12)] px-4 py-3 text-sm leading-7 text-[var(--night)]">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full justify-center rounded-full bg-[var(--moss)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(31,36,48,0.16)] disabled:cursor-not-allowed disabled:opacity-75 sm:w-fit"
      >
        {isSubmitting ? "Sending enquiry…" : "Send enquiry"}
      </button>
    </form>
  );
}
