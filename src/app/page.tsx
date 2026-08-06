import Link from "next/link";
import {
  equipmentList,
  processSteps,
  servicesOverview,
  testimonials,
  whyChooseUs,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0 animate-scale-in bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
          <p className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange">
            FreightTech Hub
          </p>
          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Powering Carriers.
            <br />
            Driving Growth.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Complete Dispatch &amp; Carrier Support Services
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
            <Link
              href="/carrier-signup"
              className="rounded-md bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-hover"
            >
              Become a Carrier
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning band */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                All-in-One Trucking Dispatch &amp; Carrier Solutions
              </h2>
              <div className="section-rule mt-5" />
            </div>
            <p className="text-base leading-relaxed text-white/75">
              At FreightTech Hub, we help owner-operators and trucking companies maximize revenue
              through professional dispatch, premium load sourcing, route planning, paperwork
              management, insurance assistance, factoring setup, and complete back-office support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              End-to-end support built for carriers
            </h2>
            <p className="mt-4 text-slate">
              More than dispatch — a technology-driven partner for every part of your operation.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {servicesOverview.map((service) => (
              <div key={service.title} className="bg-white p-7 transition hover:bg-orange-soft">
                <div className="mb-4 h-1 w-8 bg-orange" />
                <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-orange transition hover:text-orange-hover"
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
                Equipment We Handle
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Built for the equipment you run
              </h2>
            </div>
            <Link
              href="/equipment"
              className="text-sm font-semibold text-navy transition hover:text-orange"
            >
              View equipment →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item) => (
              <div
                key={item.name}
                className="border-l-2 border-orange bg-white px-5 py-6 shadow-sm shadow-navy/5"
              >
                <h3 className="font-display text-lg font-semibold text-navy">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FreightTech Hub */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Why FreightTech Hub
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Premium support without the usual traps
            </h2>
            <p className="mt-4 text-white/70">
              No forced dispatch. No long-term contracts. Just experienced negotiators, clear
              communication, and a growth-focused partnership.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/85"
              >
                <span className="mt-0.5 text-orange">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="/why-us"
              className="inline-flex rounded-md border border-orange px-6 py-3 text-sm font-semibold text-orange transition hover:bg-orange hover:text-white"
            >
              See why carriers choose us
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Simple Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              From signup to dispatch in three steps
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-display text-5xl font-extrabold text-orange/20">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              About FreightTech Hub
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              You Drive. We Handle Everything Else.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              FreightTech Hub is a technology-driven carrier support company providing end-to-end
              trucking solutions for owner-operators and fleets across the United States. From
              dispatch and load planning to compliance, insurance coordination, factoring assistance,
              and back-office management, we help carriers operate more efficiently and grow their
              business.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Carriers who trust FreightTech Hub
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="flex h-full flex-col border-t-2 border-orange bg-white p-7 shadow-sm shadow-navy/5"
              >
                <p className="flex-1 text-base leading-relaxed text-slate">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-display font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-slate-light">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-3 text-white/90">Become a Carrier Partner today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/carrier-signup"
              className="rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-deep"
            >
              Become a Carrier
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
