type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/70" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {subtitle}
          </p>
        )}
        <div className="section-rule mt-6" />
      </div>
    </section>
  );
}
