import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FreightTech Hub for dispatch and carrier support. Available 24/7 at info@freighttechhub.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about growing your operation"
        subtitle="Reach our team anytime — dedicated dispatch and carrier support across the USA."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy">Get in touch</h2>
            <div className="section-rule mt-5" />
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
                  Email
                </p>
                <a
                  href="mailto:info@freighttechhub.com"
                  className="mt-2 block text-lg text-navy transition hover:text-orange"
                >
                  info@freighttechhub.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
                  Availability
                </p>
                <p className="mt-2 text-lg text-navy">Available 24/7</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
                  Coverage
                </p>
                <p className="mt-2 text-lg text-navy">
                  Dedicated Dispatch Services Across the USA
                </p>
              </div>
            </div>

            <div className="mt-10 border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-semibold text-navy">
                Ready to partner?
              </h3>
              <p className="mt-2 text-sm text-slate">
                Skip the back-and-forth and apply to become a carrier partner.
              </p>
              <Link
                href="/carrier-signup"
                className="mt-5 inline-flex rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-hover"
              >
                Become a Carrier Partner
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
