import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import HeroSection from "@/components/HeroSection";
import MovingTruckStrip, { EquipmentTruckIcon } from "@/components/MovingTruck";
import type { TruckType } from "@/components/MovingTruck";
import { IconArrow, IconCheck } from "@/components/Icons";
import {
  equipmentList,
  processSteps,
  servicesOverview,
  testimonials,
  whyChooseUs,
} from "@/lib/content";

const equipmentTypeMap: Record<string, TruckType> = {
  "Dry Van": "dryvan",
  Reefer: "reefer",
  Flatbed: "flatbed",
  "Step Deck": "stepdeck",
  Conestoga: "conestoga",
  "Box Truck": "boxtruck",
  "Power Only": "poweronly",
  Hotshot: "hotshot",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Feature bar */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:px-8">
          {[
            "Dedicated Dispatcher",
            "24/7 Support",
            "No Contracts",
            "Maximum Profit",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange/15 text-orange">
                <IconCheck className="h-4 w-4" />
              </span>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-orange sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <MovingTruckStrip tone="navy" size="lg" />

      {/* Marquee trust strip */}
      <section className="overflow-hidden border-y border-white/10 bg-navy-deep text-white">
        <div className="marquee-track py-3.5 text-sm font-medium text-white/70">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex items-center gap-8 px-4">
              {[
                "Dedicated Personal Dispatcher",
                "24/7 Support",
                "AI Chatbot Assistance",
                "ELD Service Provider",
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
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                All-in-One Trucking Dispatch &amp; Carrier Solutions
              </h2>
              <div className="section-rule mt-5" />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm leading-relaxed text-slate sm:text-base">
                At FreightTech Hub, we help owner-operators and trucking companies maximize revenue
                through professional dispatch, premium load sourcing, route planning, paperwork
                management, insurance assistance, factoring setup, AI chatbot support, ELD service
                provider solutions, and complete back-office support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              End-to-end support built for carriers
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate sm:text-base">
              More than dispatch — a technology-driven partner for every part of your operation,
              including AI chatbot and ELD service provider support.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {servicesOverview.map((service, i) => {
              const featured = "featured" in service && service.featured;
              return (
                <Reveal key={service.title} delay={i * 70}>
                  <div
                    className={`card-lift group h-full rounded-2xl border bg-white p-7 shadow-sm shadow-navy/5 sm:p-8 ${
                      featured
                        ? "service-truck-card border-orange/35 ring-1 ring-orange/15"
                        : "border-border"
                    }`}
                  >
                    <div className="icon-badge mb-5">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={100}>
            <div className="mt-12">
              <Link href="/services" className="btn-ghost">
                Explore all services <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MovingTruckStrip tone="surface" size="lg" />

      {/* Equipment */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
                Equipment We Dispatch
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

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item, i) => (
              <Reveal key={item.name} delay={i * 50}>
                <div className="card-lift h-full rounded-xl border border-transparent border-l-[3px] border-l-orange bg-surface px-5 py-6 shadow-sm shadow-navy/5">
                  <div className="equip-icon-wrap text-navy">
                    <EquipmentTruckIcon
                      type={equipmentTypeMap[item.name] ?? "dryvan"}
                      className="h-12 w-24"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{item.name}</h3>
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Why FreightTech Hub
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Premium support without the usual traps
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
              No long-term contracts. Just experienced negotiators, clear communication, and a
              growth-focused partnership.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="mt-12">
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Simple Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              From signup to dispatch in three steps
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-border bg-surface p-7 sm:p-8">
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
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
                assistance, AI chatbot, ELD service provider support, and back-office management, we
                help carriers operate more efficiently and grow their business.
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Carriers who trust FreightTech Hub
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <blockquote className="card-lift flex h-full flex-col rounded-2xl border border-border border-t-[3px] border-t-orange bg-white p-7 shadow-sm shadow-navy/5 sm:p-8">
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
      <section className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-orange/15 blur-2xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-5 sm:py-20 md:flex-row md:items-center lg:px-8">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Business? Become a Carrier Partner Today!
            </h2>
            <p className="mt-3 text-white/75">Quick setup. Top paying loads. Grow your business.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/carrier-signup" className="btn-primary">
                Sign Up Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
        <MovingTruckStrip tone="navy" size="lg" />
      </section>
    </>
  );
}
