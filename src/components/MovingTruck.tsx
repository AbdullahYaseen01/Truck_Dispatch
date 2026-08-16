type Props = {
  className?: string;
};

/** Animated semi-truck silhouette for service cards and accents */
export function MovingTruckIcon({ className = "h-7 w-10" }: Props) {
  return (
    <svg
      className={`truck-drive ${className}`}
      viewBox="0 0 48 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 16h22v7H2v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 12h8.5L38 18v5H24V12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M27 14.5h4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="23.5" r="2.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="32.5" cy="23.5" r="2.6" stroke="currentColor" strokeWidth="2" />
      <path
        className="truck-speed"
        d="M1 10h5M0 13h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Full-width highway strip with looping trucks */
export default function MovingTruckStrip({
  tone = "navy",
}: {
  tone?: "navy" | "surface";
}) {
  const trucks = [...Array(6)];
  const bg = tone === "navy" ? "bg-navy" : "bg-surface";
  const fg = tone === "navy" ? "text-orange" : "text-navy";
  const road = tone === "navy" ? "border-white/15" : "border-border";

  return (
    <div className={`relative overflow-hidden border-y ${road} ${bg}`} aria-hidden="true">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-orange/40" />
      <div className="truck-convoy flex items-center gap-16 py-5">
        {[...Array(2)].map((_, copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-16 px-4">
            {trucks.map((_, i) => (
              <span key={`${copy}-${i}`} className={`inline-flex ${fg}`}>
                <MovingTruckIcon className="h-8 w-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
