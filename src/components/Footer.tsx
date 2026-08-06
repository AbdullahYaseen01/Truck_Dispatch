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
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-orange font-display text-lg font-bold">
              FT
            </span>
            <span className="font-display text-xl font-semibold">
              FreightTech <span className="text-orange">Hub</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Smart Dispatch. Stronger Growth.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            Technology-driven carrier support providing end-to-end trucking solutions across the United States.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-orange">
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
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
          <p className="mt-3 text-sm text-white/70">Available 24/7</p>
          <p className="mt-2 text-sm text-white/55">
            Dedicated Dispatch Services Across the USA
          </p>
          <Link
            href="/carrier-signup"
            className="mt-6 inline-flex rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Become a Carrier Partner
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} FreightTech Hub. All rights reserved.</p>
          <p>U.S.-focused carrier support for owner-operators and fleets.</p>
        </div>
      </div>
    </footer>
  );
}
