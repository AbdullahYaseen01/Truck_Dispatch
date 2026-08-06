import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { IconArrow, IconCheck } from "@/components/Icons";
import {
  equipmentList,
  processSteps,
  servicesOverview,
  testimonials,
  trustStats,
  whyChooseUs,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden sm:min-h-[88vh]">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80"
          alt="Semi truck on highway at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="grain" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-24 sm:min-h-[88vh] sm:px-5 lg:px-8">
          <div className="animate-fade-up mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange backdrop-blur-md sm:text-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-orange" />
            FreightTech Hub
          </div>

          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-[2.6rem] font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Powering Carriers.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-orange bg-clip-text text-transparent">
              Driving Growth.
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-xl">
            Complete Dispatch &amp; Carrier Support Services for owner-operators and fleets across
            the USA.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link href="/carrier-signup" className="btn-primary">
              Become a Carrier
              <IconArrow />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="animate-fade-up delay-400 mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="stat-chip rounded-xl border border-white/10 bg-white/8 px-3 py-3 backdrop-blur-md"
              >
                <p className="font-display text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/65 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="animate-float flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <span className="h-2 w-1 rounded-full bg-orange" />
          </div>
        </div>
      </section>

      {/* Marquee trust strip */}
      <section className="overflow-hidden border-y border-white/10 bg-navy text-white">
        <div className="marquee-track py-3.5 text-sm font-medium text-white/70">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex items-center gap-8 px-4">
              {[
                "No Forced Dispatch",
                "Dedicated Personal Dispatcher",
                "24/7 Support",
                "Insurance Assistance",
                "Factoring Setup",
                "Back-Office Management",
                "Nationwide USA Coverage",
              ].map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span>{item}</span>
                  <span className="text-orange">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Positioning band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                All-in-One Trucking Dispatch &amp; Carrier Solutions
              </h2>
              <div className="section-rule mt-5" />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                At FreightTech Hub, we help owner-operators and trucking companies maximize revenue
                through professional dispatch, premium load sourcing, route planning, paperwork
                management, insurance assistance, factoring setup, and complete back-office support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              End-to-end support built for carriers
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate sm:text-base">
              More than dispatch — a technology-driven partner for every part of your operation.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOverview.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <div className="card-lift group h-full rounded-2xl border border-border bg-white p-6 shadow-sm shadow-navy/5 sm:p-7">
                  <div className="icon-badge mb-4">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-10">
              <Link href="/services" className="btn-ghost">
                Explore all services <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
                Equipment We Handle
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Built for the equipment you run
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/equipment" className="btn-ghost text-navy hover:text-orange">
                View equipment <IconArrow />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item, i) => (
              <Reveal key={item.name} delay={i * 50}>
                <div className="card-lift h-full rounded-xl border border-transparent border-l-[3px] border-l-orange bg-white px-5 py-6 shadow-sm shadow-navy/5">
                  <h3 className="font-display text-lg font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why FreightTech Hub */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Why FreightTech Hub
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Premium support without the usual traps
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
              No forced dispatch. No long-term contracts. Just experienced negotiators, clear
              communication, and a growth-focused partnership.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item} delay={i * 35}>
                <li className="card-lift flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/85 backdrop-blur-sm hover:bg-white/10">
                  <span className="mt-0.5 text-orange">
                    <IconCheck />
                  </span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-10">
              <Link
                href="/why-us"
                className="inline-flex items-center gap-2 rounded-lg border border-orange px-6 py-3 text-sm font-semibold text-orange transition hover:bg-orange hover:text-white"
              >
                See why carriers choose us <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Simple Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Simple Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              From signup to dispatch in three steps
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <span className="font-display text-5xl font-extrabold text-orange/20">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <span className="absolute -right-4 top-1/2 hidden text-orange/40 md:block">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=75"
          alt="Freight trucks on open road"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
                About FreightTech Hub
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                You Drive. We Handle Everything Else.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
                FreightTech Hub is a technology-driven carrier support company providing end-to-end
                trucking solutions for owner-operators and fleets across the United States. From
                dispatch and load planning to compliance, insurance coordination, factoring
                assistance, and back-office management, we help carriers operate more efficiently
                and grow their business.
              </p>
              <Link href="/about" className="btn-primary mt-8">
                Learn more about us <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Carriers who trust FreightTech Hub
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <blockquote className="card-lift flex h-full flex-col rounded-2xl border border-border border-t-[3px] border-t-orange bg-white p-6 shadow-sm shadow-navy/5 sm:p-7">
                  <p className="flex-1 text-sm leading-relaxed text-slate sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="font-display font-semibold text-navy">{item.name}</p>
                    <p className="text-sm text-slate-light">{item.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-orange">
        <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-5 sm:py-16 md:flex-row md:items-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-3 text-white/90">Become a Carrier Partner today.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/carrier-signup"
                className="inline-flex items-center justify-center rounded-lg bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-deep"
              >
                Become a Carrier
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Get Started
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
