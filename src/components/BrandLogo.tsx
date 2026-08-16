import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "color" | "light";
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export default function BrandLogo({
  variant = "color",
  className = "h-11 w-auto sm:h-12",
  priority = false,
  href = "/",
}: BrandLogoProps) {
  const src = variant === "light" ? "/fth-logo-light.png" : "/fth-logo.png";
  const image = (
    <Image
      src={src}
      alt="Freight Tech Hub"
      width={220}
      height={104}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      className="inline-flex items-center transition hover:opacity-90 hover:scale-[1.02]"
      aria-label="Freight Tech Hub home"
    >
      {image}
    </Link>
  );
}
