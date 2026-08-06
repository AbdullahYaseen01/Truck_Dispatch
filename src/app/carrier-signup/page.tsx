import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CarrierSignupForm from "@/components/CarrierSignupForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Carrier Sign-Up",
  description:
    "Become a FreightTech Hub carrier partner. Submit company, authority, equipment, and document details to get started.",
};

export default function CarrierSignupPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrier Sign-Up"
        title="Become a FreightTech Hub Carrier"
        subtitle="Join a technology-driven carrier support partner built for owner-operators and fleets ready to grow."
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
          <Reveal>
            <CarrierSignupForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
