import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconArrow } from "@/components/Icons";
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
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
              We dispatch a full range of equipment across the United States — helping
              owner-operators and fleets stay loaded with the right freight for their trucks.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item, index) => (
              <Reveal key={item.name} delay={index * 50}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <span className="font-display text-4xl font-extrabold text-navy/10 transition group-hover:text-orange/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-navy">{item.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-5 sm:py-14 md:flex-row md:items-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Running one of these?
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Tell us about your equipment and preferred lanes.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/carrier-signup" className="btn-primary">
              Become a Carrier <IconArrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
