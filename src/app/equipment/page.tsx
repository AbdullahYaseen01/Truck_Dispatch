import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { equipmentList } from "@/lib/content";

export const metadata: Metadata = {
  title: "Equipment We Dispatch",
  description:
    "FreightTech Hub dispatches Dry Van, Reefer, Flatbed, Step Deck, Conestoga, Box Truck, Power Only, and Hotshot equipment.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Equipment we dispatch"
        subtitle="From dry van to hotshot, we match the right freight to the equipment you run."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="max-w-2xl text-base leading-relaxed text-slate">
            We Dispatch a full range of equipment across the United States — helping owner-operators
            and fleets stay loaded with the right freight for their trucks.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item, index) => (
              <article
                key={item.name}
                className="group relative overflow-hidden border border-border bg-surface p-7 transition hover:border-orange hover:bg-orange-soft"
              >
                <span className="font-display text-4xl font-extrabold text-navy/10 transition group-hover:text-orange/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-navy">{item.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Running one of these?
            </h2>
            <p className="mt-2 text-white/70">Tell us about your equipment and preferred lanes.</p>
          </div>
          <Link
            href="/carrier-signup"
            className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
          >
            Become a Carrier
          </Link>
        </div>
      </section>
    </>
  );
}
