import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { whyChooseUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why carriers choose FreightTech Hub — dedicated dispatchers, no forced dispatch, 24/7 support, and technology-driven growth.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Built for trust, performance, and growth"
        subtitle="Premium carrier support with clear communication, strong negotiation, and no unnecessary commitments."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-navy">
              Why FreightTech Hub
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              We position ourselves as more than a dispatch company — a technology-driven partner that
              supports your entire operation so you can maximize revenue and stay focused on the road.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-border bg-surface px-5 py-4"
              >
                <span className="mt-0.5 font-semibold text-orange">✓</span>
                <span className="text-sm font-medium text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-orange">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Experience the difference
            </h2>
            <p className="mt-2 text-white/90">Partner with a team built around carrier success.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/carrier-signup"
              className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
            >
              Become a Carrier Partner
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
