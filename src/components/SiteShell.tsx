"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-full flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>
      <Footer />
      <MobileCta />
    </>
  );
}
