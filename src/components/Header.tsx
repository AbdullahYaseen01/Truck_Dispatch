"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-orange font-display text-lg font-bold text-white">
            FT
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            FreightTech <span className="text-orange">Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="rounded-md px-4 py-2 text-sm font-semibold text-white/90 transition hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/carrier-signup"
            className="rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Become a Carrier
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-5 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/carrier-signup"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-orange px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Become a Carrier
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
