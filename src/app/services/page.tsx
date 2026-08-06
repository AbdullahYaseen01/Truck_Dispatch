import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  backOfficeServices,
  carrierSupport,
  dispatchServices,
  factoringAssistance,
  insuranceAssistance,
  routeManagement,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dispatch, carrier support, back office, insurance, factoring, and route management services from FreightTech Hub.",
};

function ServiceBlock({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: string[];
}) {
  return (
    <div className="border border-border bg-white p-8">
      <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
      {intro && <p className="mt-3 text-sm leading-relaxed text-slate">{intro}</p>}
      <div className="section-rule mt-4" />
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate">
            <span className="mt-1 text-orange">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete dispatch & carrier support services"
        subtitle="Professional dispatch, premium load sourcing, compliance, insurance, factoring, and back-office management — all under one roof."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:px-8">
          <ServiceBlock title="Dispatch Services" items={dispatchServices} />
          <ServiceBlock title="Carrier Support" items={carrierSupport} />
          <ServiceBlock title="Back Office Services" items={backOfficeServices} />
          <ServiceBlock
            title="Insurance Assistance"
            intro="We help carriers connect with trusted insurance providers for:"
            items={insuranceAssistance}
          />
          <ServiceBlock
            title="Factoring Assistance"
            intro="We help carriers choose and set up reliable factoring companies. Services include:"
            items={factoringAssistance}
          />
          <ServiceBlock title="Route Management" items={routeManagement} />
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready for premium carrier support?
            </h2>
            <p className="mt-2 text-white/70">Partner with FreightTech Hub and grow with confidence.</p>
          </div>
          <Link
            href="/carrier-signup"
            className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Become a Carrier Partner
          </Link>
        </div>
      </section>
    </>
  );
}
