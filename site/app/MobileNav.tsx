"use client";

import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 960;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/gift-vouchers/", label: "Gift Vouchers" },
  { href: "/contact/", label: "Contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(31,36,48,0.12)] bg-white/80 text-[var(--night)] transition hover:border-[var(--moss)]"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
        <span className="relative block h-4 w-5">
          <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>
      {isOpen ? (
        <div className="fixed inset-x-0 top-[81px] z-40 border-t border-black/5 bg-[rgba(238,231,224,0.98)] backdrop-blur-xl">
          <div id="mobile-nav-panel" className="section-shell max-h-[calc(100vh-81px)] overflow-y-auto py-6">
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
              <a
                href="/contact/"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-[var(--moss)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
