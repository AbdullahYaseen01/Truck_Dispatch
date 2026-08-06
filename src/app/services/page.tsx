import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconArrow, IconCheck } from "@/components/Icons";
import {
  aiChatbotServices,
  backOfficeServices,
  carrierSupport,
  dispatchServices,
  eldDeviceServices,
  factoringAssistance,
  insuranceAssistance,
  routeManagement,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dispatch, carrier support, AI chatbot, ELD devices, insurance, factoring, and back-office services from FreightTech Hub.",
};

function ServiceBlock({
  title,
  intro,
  items,
  delay = 0,
}: {
  title: string;
  intro?: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-lift rounded-2xl border border-border bg-white p-6 shadow-sm shadow-navy/5 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
        {intro && <p className="mt-3 text-sm leading-relaxed text-slate">{intro}</p>}
        <div className="section-rule mt-4" />
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate">
              <span className="mt-0.5 text-orange">
                <IconCheck className="h-4 w-4" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete dispatch & carrier support services"
        subtitle="Professional dispatch, AI chatbot support, ELD device services, compliance, insurance, factoring, and back-office management — all under one roof."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
          <ServiceBlock title="Dispatch Services" items={dispatchServices} />
          <ServiceBlock title="Carrier Support" items={carrierSupport} delay={40} />
          <ServiceBlock title="Back Office Services" items={backOfficeServices} delay={60} />
          <ServiceBlock
            title="Insurance Assistance"
            intro="We help carriers connect with trusted insurance providers for:"
            items={insuranceAssistance}
            delay={80}
          />
          <ServiceBlock
            title="Factoring Assistance"
            intro="We help carriers choose and set up reliable factoring companies. Services include:"
            items={factoringAssistance}
            delay={100}
          />
          <ServiceBlock title="Route Management" items={routeManagement} delay={120} />
          <ServiceBlock
            title="AI Chatbot"
            intro="Technology-driven AI chatbot support that keeps carriers informed and connected around the clock:"
            items={aiChatbotServices}
            delay={140}
          />
          <ServiceBlock
            title="ELD Device Service Provider"
            intro="We help carriers choose, set up, and manage reliable ELD solutions for compliance and peace of mind:"
            items={eldDeviceServices}
            delay={160}
          />
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-5 sm:py-14 md:flex-row md:items-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready for premium carrier support?
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Partner with FreightTech Hub and grow with confidence.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/carrier-signup" className="btn-primary">
              Become a Carrier Partner <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
