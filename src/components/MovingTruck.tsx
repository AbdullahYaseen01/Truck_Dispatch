type TruckType =
  | "dryvan"
  | "reefer"
  | "flatbed"
  | "stepdeck"
  | "conestoga"
  | "boxtruck"
  | "poweronly"
  | "hotshot";

type IconProps = {
  className?: string;
  type?: TruckType;
};

const TRUCK_FLEET: { type: TruckType; label: string }[] = [
  { type: "dryvan", label: "Dry Van" },
  { type: "reefer", label: "Reefer" },
  { type: "flatbed", label: "Flatbed" },
  { type: "stepdeck", label: "Step Deck" },
  { type: "conestoga", label: "Conestoga" },
  { type: "boxtruck", label: "Box Truck" },
  { type: "poweronly", label: "Power Only" },
  { type: "hotshot", label: "Hotshot" },
];

function Wheel({ cx, cy, r = 3.2 }: { cx: number; cy: number; r?: number }) {
  return (
    <g className="truck-wheel" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity="0.95" />
      <circle cx={cx} cy={cy} r={r * 0.35} fill="white" opacity="0.9" />
      <path
        d={`M${cx} ${cy - r * 0.7}v${r * 1.4}M${cx - r * 0.7} ${cy}h${r * 1.4}`}
        stroke="white"
        strokeWidth="0.7"
        opacity="0.55"
      />
    </g>
  );
}

function Cab({ x = 58 }: { x?: number }) {
  return (
    <g>
      <path
        d={`M${x} 18h14l7 9v8H${x}V18Z`}
        fill="currentColor"
        opacity="0.92"
      />
      <path d={`M${x + 4} 21h8.5l3.5 5H${x + 4}V21Z`} fill="white" opacity="0.35" />
      <rect x={x + 2} y="29" width="4" height="2.2" rx="0.4" fill="#e85d04" opacity="0.9" />
    </g>
  );
}

function SpeedLines() {
  return (
    <g className="truck-speed" stroke="currentColor" strokeLinecap="round" opacity="0.45">
      <path d="M4 22h10" strokeWidth="1.8" />
      <path d="M2 27h8" strokeWidth="1.5" />
      <path d="M6 32h7" strokeWidth="1.4" />
    </g>
  );
}

/** Distinct silhouette per equipment type */
export function EquipmentTruckIcon({ className = "h-16 w-28", type = "dryvan" }: IconProps) {
  return (
    <svg
      className={`truck-drive ${className}`}
      viewBox="0 0 96 44"
      fill="none"
      aria-hidden="true"
    >
      <SpeedLines />

      {type === "dryvan" && (
        <>
          <rect x="14" y="12" width="46" height="22" rx="1.5" fill="currentColor" />
          <path d="M18 16h38M18 21h38M18 26h28" stroke="white" strokeWidth="1" opacity="0.2" />
          <Cab />
          <Wheel cx={24} cy={36} />
          <Wheel cx={48} cy={36} />
          <Wheel cx={74} cy={36} />
        </>
      )}

      {type === "reefer" && (
        <>
          <rect x="14" y="11" width="46" height="23" rx="1.5" fill="currentColor" />
          <rect x="14" y="8" width="12" height="5" rx="1" fill="#e85d04" />
          <path d="M18 17h10M18 22h14" stroke="white" strokeWidth="1.2" opacity="0.35" />
          <circle cx="48" cy="20" r="3.2" stroke="white" strokeWidth="1.2" opacity="0.4" />
          <path d="M48 17.5v5M46.5 20h3" stroke="white" strokeWidth="1" opacity="0.4" />
          <Cab />
          <Wheel cx={24} cy={36} />
          <Wheel cx={48} cy={36} />
          <Wheel cx={74} cy={36} />
        </>
      )}

      {type === "flatbed" && (
        <>
          <rect x="14" y="26" width="46" height="5" rx="0.8" fill="currentColor" />
          <rect x="18" y="16" width="14" height="10" rx="0.6" fill="currentColor" opacity="0.55" />
          <rect x="36" y="18" width="18" height="8" rx="0.6" fill="currentColor" opacity="0.4" />
          <path d="M16 26h42" stroke="#e85d04" strokeWidth="1.4" opacity="0.8" />
          <Cab />
          <Wheel cx={24} cy={36} />
          <Wheel cx={48} cy={36} />
          <Wheel cx={74} cy={36} />
        </>
      )}

      {type === "stepdeck" && (
        <>
          <path d="M14 20h22v11H14V20Zm22 6h24v5H36v-5Z" fill="currentColor" />
          <path d="M14 20h22M36 26h24" stroke="#e85d04" strokeWidth="1.3" opacity="0.75" />
          <Cab />
          <Wheel cx={24} cy={36} />
          <Wheel cx={48} cy={36} />
          <Wheel cx={74} cy={36} />
        </>
      )}

      {type === "conestoga" && (
        <>
          <path
            d="M14 28V18c0-4 6-7 23-7s23 3 23 7v10H14Z"
            fill="currentColor"
            opacity="0.88"
          />
          <path d="M16 18c2-3 10-5 21-5s19 2 21 5" stroke="white" strokeWidth="1.2" opacity="0.3" />
          <rect x="14" y="28" width="46" height="4" fill="currentColor" />
          <Cab />
          <Wheel cx={24} cy={36} />
          <Wheel cx={48} cy={36} />
          <Wheel cx={74} cy={36} />
        </>
      )}

      {type === "boxtruck" && (
        <>
          <rect x="10" y="10" width="42" height="24" rx="1.5" fill="currentColor" />
          <path
            d="M52 16h12l6 8v10H52V16Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path d="M55 19h7l3.5 5H55V19Z" fill="white" opacity="0.35" />
          <rect x="54" y="28" width="3.5" height="2" rx="0.3" fill="#e85d04" />
          <Wheel cx={22} cy={36} r={3.4} />
          <Wheel cx={58} cy={36} r={3.4} />
        </>
      )}

      {type === "poweronly" && (
        <>
          <path d="M34 16h20l10 10v9H34V16Z" fill="currentColor" />
          <path d="M39 19h10l5 6H39V19Z" fill="white" opacity="0.35" />
          <rect x="36" y="28" width="4" height="2.2" rx="0.4" fill="#e85d04" />
          <path d="M28 30h8M24 33h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <circle cx="26" cy="30" r="2.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <Wheel cx={44} cy={36} />
          <Wheel cx={58} cy={36} />
        </>
      )}

      {type === "hotshot" && (
        <>
          <rect x="22" y="24" width="36" height="4.5" rx="0.6" fill="currentColor" />
          <rect x="26" y="17" width="10" height="7" rx="0.5" fill="currentColor" opacity="0.5" />
          <path d="M40 14h14l6 8v6.5H40V14Z" fill="currentColor" />
          <path d="M44 17h8l3.5 5H44V17Z" fill="white" opacity="0.35" />
          <rect x="42" y="26" width="3.5" height="2" rx="0.3" fill="#e85d04" />
          <path d="M24 24h32" stroke="#e85d04" strokeWidth="1.2" opacity="0.7" />
          <Wheel cx={30} cy={36} r={2.8} />
          <Wheel cx={48} cy={36} r={2.8} />
          <Wheel cx={56} cy={36} r={2.8} />
        </>
      )}
    </svg>
  );
}

/** Large hero trucks that drive across the viewport */
export function BigHeroTruck({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-white" : "text-navy";
  const heroFleet: TruckType[] = ["dryvan", "reefer", "flatbed", "boxtruck", "hotshot"];

  return (
    <div
      className="hero-truck-lane pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="hero-road relative h-24 sm:h-28 md:h-32">
        <div className="absolute inset-x-0 bottom-7 h-[3px] bg-white/25 sm:bottom-9" />
        <div className="absolute inset-x-0 bottom-7 h-[3px] bg-orange/60 sm:bottom-9" />
        <div className="hero-dashes absolute inset-x-0 bottom-[1.9rem] h-px sm:bottom-[2.4rem]" />
        <div
          className={`hero-truck-run absolute bottom-3 flex items-end gap-10 sm:bottom-4 sm:gap-14 md:gap-16 ${color}`}
        >
          {heroFleet.map((type) => {
            const label = TRUCK_FLEET.find((t) => t.type === type)?.label ?? type;
            return (
              <div key={type} className="flex flex-col items-center">
                <EquipmentTruckIcon
                  type={type}
                  className="h-[4.5rem] w-40 sm:h-24 sm:w-52 md:h-28 md:w-60"
                />
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange sm:text-xs">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type StripProps = {
  tone?: "navy" | "surface";
  size?: "md" | "lg";
  showLabels?: boolean;
};

/** Full-width highway strip with looping fleet of equipment types */
export default function MovingTruckStrip({
  tone = "navy",
  size = "lg",
  showLabels = true,
}: StripProps) {
  const bg = tone === "navy" ? "bg-navy" : "bg-surface";
  const fg = tone === "navy" ? "text-orange" : "text-navy";
  const labelColor = tone === "navy" ? "text-white/70" : "text-slate";
  const road = tone === "navy" ? "border-white/15" : "border-border";
  const iconClass =
    size === "lg"
      ? "h-14 w-28 sm:h-16 sm:w-32 md:h-[4.5rem] md:w-36"
      : "h-10 w-20 sm:h-12 sm:w-24";

  return (
    <div
      className={`truck-highway relative overflow-hidden border-y ${road} ${bg}`}
      aria-label="Equipment we dispatch"
      role="img"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className={`h-px w-full ${tone === "navy" ? "bg-white/10" : "bg-border"}`} />
        <div className="highway-dashes mt-2" />
      </div>

      <div
        className={`truck-convoy flex items-end gap-10 px-6 sm:gap-14 md:gap-16 ${
          size === "lg" ? "py-7 sm:py-9" : "py-5"
        }`}
      >
        {[...Array(2)].map((_, copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-end gap-10 px-2 sm:gap-14 md:gap-16"
          >
            {TRUCK_FLEET.map((truck) => (
              <div
                key={`${copy}-${truck.type}`}
                className={`group flex flex-col items-center ${fg}`}
              >
                <EquipmentTruckIcon type={truck.type} className={iconClass} />
                {showLabels && (
                  <span
                    className={`mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs ${labelColor}`}
                  >
                    {truck.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export { TRUCK_FLEET };
export type { TruckType };
