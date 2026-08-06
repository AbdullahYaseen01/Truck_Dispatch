"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/carrier-signup" || pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href="/contact"
          className="flex-1 rounded-lg border border-white/25 px-3 py-3 text-center text-sm font-semibold text-white"
        >
          Contact
        </Link>
        <Link href="/carrier-signup" className="btn-primary flex-1 !py-3">
          Become a Carrier
        </Link>
      </div>
    </div>
  );
}
