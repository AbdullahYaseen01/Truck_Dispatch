import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconArrow, IconCheck } from "@/components/Icons";
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
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-navy">Why FreightTech Hub</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                We position ourselves as more than a dispatch company — a technology-driven partner
                that supports your entire operation so you can maximize revenue and stay focused on
                the road.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item} delay={i * 30}>
                <li className="card-lift flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4">
                  <span className="mt-0.5 text-orange">
                    <IconCheck />
                  </span>
                  <span className="text-sm font-medium text-navy">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-orange">
        <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-5 sm:py-14 md:flex-row md:items-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Experience the difference
            </h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Partner with a team built around carrier success.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/carrier-signup"
                className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-deep"
              >
                Become a Carrier Partner <IconArrow className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
