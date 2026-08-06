import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FreightTech Hub — a U.S.-focused dispatch and logistics support company helping owner-operators and fleets grow.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technology-driven carrier support company"
        subtitle="Dedicated to helping owner-operators and trucking companies grow with end-to-end trucking solutions."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-navy">About FreightTech Hub</h2>
            <div className="section-rule mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-slate sm:text-base">
              FreightTech Hub is a U.S.-focused dispatch and logistics support company dedicated to
              helping owner-operators and trucking companies grow their business. Our experienced
              dispatch team works around the clock to secure high-paying freight, negotiate the best
              rates, reduce empty miles, and manage daily operations so drivers can focus on the
              road.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              FreightTech Hub is a technology-driven carrier support company providing end-to-end
              trucking solutions for owner-operators and fleets across the United States. From
              dispatch and load planning to compliance, insurance coordination, factoring
              assistance, and back-office management, we help carriers operate more efficiently and
              grow their business.
            </p>
          </Reveal>

          <Reveal delay={120} direction="right">
            <div className="relative overflow-hidden rounded-2xl bg-navy px-7 py-9 text-white shadow-xl shadow-navy/20 sm:px-8 sm:py-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange/20 blur-2xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
                Our goal is simple
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                You Drive.
                <br />
                We Handle Everything Else.
              </h3>
              <p className="mt-6 text-sm text-white/75 sm:text-base">
                Smart Dispatch. Stronger Growth. Available 24/7 with dedicated dispatch services
                across the USA.
              </p>
              <Link href="/carrier-signup" className="btn-primary mt-8">
                Become a Carrier Partner <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-navy">What sets us apart</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3">
            {[
              {
                title: "Carrier-first partnership",
                body: "No forced dispatch and no long-term contracts — just transparent support built around your goals.",
              },
              {
                title: "Full back-office coverage",
                body: "Paperwork, billing, COIs, factoring setup, and compliance guidance handled with precision.",
              },
              {
                title: "Technology-driven operations",
                body: "Modern dispatch workflows, performance reporting, and route strategy that protect your margins.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-lift h-full rounded-2xl border border-border border-t-[3px] border-t-orange bg-white p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
