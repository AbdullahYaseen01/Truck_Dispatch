import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/carrier-signup", label: "Carrier Signup" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-navy-mid/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-4 inline-flex rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/20">
            <Image
              src="/fth-logo.png"
              alt="Freight Tech Hub"
              width={240}
              height={96}
              className="h-14 w-auto object-contain sm:h-16"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Smart Dispatch. Stronger Growth.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            Technology-driven carrier support providing end-to-end trucking solutions across the
            United States.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-orange">
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition hover:translate-x-0.5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-orange">
            Contact
          </h3>
          <a
            href="mailto:info@freighttechhub.com"
            className="block text-sm text-white/80 transition hover:text-orange"
          >
            info@freighttechhub.com
          </a>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-orange" />
            Available 24/7
          </p>
          <p className="mt-2 text-sm text-white/55">
            Dedicated Dispatch Services Across the USA
          </p>
          <Link href="/carrier-signup" className="btn-primary mt-6 !px-5 !py-2.5">
            Become a Carrier Partner
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
          <p>© {new Date().getFullYear()} FreightTech Hub. All rights reserved.</p>
          <p>U.S.-focused carrier support for owner-operators and fleets.</p>
        </div>
      </div>
    </footer>
  );
}
