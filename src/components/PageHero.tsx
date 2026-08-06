import Image from "next/image";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=75"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/65" />
      <div className="grain" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="section-rule mt-6" />
        </Reveal>
      </div>
    </section>
  );
}
