"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/carrier-signup", label: "Carrier Signup" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/95 shadow-lg shadow-navy-deep/20 backdrop-blur-xl"
          : "border-b border-transparent bg-navy-deep/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-5 lg:px-8">
        <BrandLogo variant="light" priority className="h-10 w-auto sm:h-11 md:h-[3.25rem]" />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white/90 transition hover:text-white"
          >
            Contact Us
          </Link>
          <Link href="/carrier-signup" className="btn-primary !px-5 !py-2.5 !text-sm">
            Become a Carrier
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full origin-center bg-white transition duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition duration-300 ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full origin-center bg-white transition duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      <div
        className={`fixed inset-0 z-40 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(86vw,340px)] flex-col border-l border-white/10 bg-navy-deep shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <p className="font-display text-sm font-semibold text-white">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            className="rounded-md px-2 py-1 text-sm text-white/70"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`rounded-xl px-4 py-3.5 text-base font-medium transition ${
                pathname === link.href
                  ? "bg-orange text-white shadow-md shadow-orange/25"
                  : "text-white/85 hover:bg-white/8"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 border-t border-white/10 p-4">
          <Link
            href="/carrier-signup"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Become a Carrier Partner
          </Link>
          <a
            href="mailto:info@freighttechhub.com"
            className="block text-center text-sm text-white/60"
          >
            info@freighttechhub.com
          </a>
        </div>
      </aside>
    </header>
  );
}
