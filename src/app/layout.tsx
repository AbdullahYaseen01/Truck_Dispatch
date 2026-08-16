import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FreightTech Hub | All-in-One Carrier Support",
    template: "%s | FreightTech Hub",
  },
  description:
    "FreightTech Hub is a technology-driven carrier support company providing end-to-end trucking solutions — dispatch, compliance, insurance, factoring, and back-office management for owner-operators and fleets across the United States.",
  keywords: [
    "truck dispatch",
    "carrier support",
    "owner operator dispatch",
    "freight dispatch services",
    "factoring assistance",
    "trucking back office",
  ],
  metadataBase: new URL("https://freighttechhub.com"),
  openGraph: {
    title: "FreightTech Hub | All-in-One Carrier Support",
    description:
      "Technology-driven carrier support for owner-operators and fleets across the United States.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061628",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
