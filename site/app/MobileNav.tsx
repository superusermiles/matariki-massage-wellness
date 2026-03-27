"use client";

import { useEffect, useId, useState } from "react";

const DESKTOP_BREAKPOINT = 960;
const HEADER_OFFSET = 81;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/gift-vouchers/", label: "Gift Vouchers" },
  { href: "/contact/", label: "Contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${DESKTOP_BREAKPOINT - 1}px)`);

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);

      if (!event.matches) {
        setIsOpen(false);
      }
    };

    handleChange(mediaQuery);

    const listener = (event: MediaQueryListEvent) => handleChange(event);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="min-[960px]:hidden">
      <button
        type="button"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(31,36,48,0.12)] bg-white/80 text-[var(--night)] transition hover:border-[var(--moss)]"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(31,36,48,0.34)] transition duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <div
        id={panelId}
        className={`fixed inset-x-0 z-50 px-6 pb-6 pt-4 transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-4 opacity-0"
        }`}
        style={{ top: `${HEADER_OFFSET}px` }}
      >
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-[rgba(31,36,48,0.08)] bg-[rgba(238,231,224,0.98)] shadow-[0_28px_70px_rgba(31,36,48,0.18)] backdrop-blur-xl">
          <div className="max-h-[calc(100vh-121px)] overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-[18px] border border-[rgba(31,36,48,0.08)] bg-white px-5 py-4 text-base font-medium text-[var(--night)] transition hover:border-[var(--moss)] hover:text-[var(--moss)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-5 rounded-[24px] bg-[var(--night)] p-5 text-[var(--mist)]">
              <p className="text-xs uppercase tracking-[0.26em] text-[rgba(200,169,107,0.84)]">By appointment</p>
              <p className="mt-3 text-xl font-semibold">Quiet care, tailored to how you need to feel.</p>
              <a
                href="/contact/"
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex justify-center rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--night)] transition hover:-translate-y-0.5"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
