import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy">About FreightTech Hub</h2>
            <div className="section-rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-slate">
              FreightTech Hub is a U.S.-focused dispatch and logistics support company dedicated to
              helping owner-operators and trucking companies grow their business. Our experienced
              dispatch team works around the clock to secure high-paying freight, negotiate the best
              rates, reduce empty miles, and manage daily operations so drivers can focus on the road.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              FreightTech Hub is a technology-driven carrier support company providing end-to-end
              trucking solutions for owner-operators and fleets across the United States. From
              dispatch and load planning to compliance, insurance coordination, factoring assistance,
              and back-office management, we help carriers operate more efficiently and grow their
              business.
            </p>
          </div>

          <div className="bg-navy px-8 py-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Our goal is simple
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              You Drive.
              <br />
              We Handle Everything Else.
            </h3>
            <p className="mt-6 text-white/75">
              Smart Dispatch. Stronger Growth. Available 24/7 with dedicated dispatch services across
              the USA.
            </p>
            <Link
              href="/carrier-signup"
              className="mt-8 inline-flex rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
            >
              Become a Carrier Partner
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy">What sets us apart</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-orange bg-white p-7">
                <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
