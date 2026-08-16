"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import type { CarrierRegistration, RegistrationStatus } from "@/lib/registrations-store";

const statusOptions: RegistrationStatus[] = [
  "new",
  "reviewed",
  "contacted",
  "approved",
  "rejected",
];

const statusStyles: Record<RegistrationStatus, string> = {
  new: "bg-orange/15 text-orange border-orange/30",
  reviewed: "bg-blue-500/15 text-blue-300 border-blue-400/30",
  contacted: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  approved: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  rejected: "bg-red-500/15 text-red-300 border-red-400/30",
};

export default function AdminDashboard({
  initialRegistrations,
}: {
  initialRegistrations: CarrierRegistration[];
}) {
  const router = useRouter();
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | RegistrationStatus>("all");
  const [selectedId, setSelectedId] = useState<string | null>(
    initialRegistrations[0]?.id ?? null
  );
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return registrations.filter((item) => {
      if (statusFilter !== "all" && item.status !== statusFilter) return false;
      if (!q) return true;
      const haystack = [
        item.companyName,
        item.ownerName,
        item.email,
        item.phone,
        item.mcNumber,
        item.dotNumber,
        item.dispatchContact,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [registrations, query, statusFilter]);

  const selected = filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? null;

  const stats = useMemo(() => {
    const total = registrations.length;
    const neu = registrations.filter((r) => r.status === "new").length;
    const approved = registrations.filter((r) => r.status === "approved").length;
    const contacted = registrations.filter((r) => r.status === "contacted").length;
    return { total, neu, approved, contacted };
  }, [registrations]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  async function updateStatus(id: string, status: RegistrationStatus) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) return;
      const data = (await res.json()) as { registration: CarrierRegistration };
      setRegistrations((prev) =>
        prev.map((item) => (item.id === id ? data.registration : item))
      );
    } finally {
      setBusyId(null);
    }
  }

  async function removeRegistration(id: string) {
    if (!window.confirm("Delete this registration permanently?")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/registrations/${id}`, { method: "DELETE" });
      if (!res.ok) return;
      setRegistrations((prev) => prev.filter((item) => item.id !== id));
      setSelectedId((current) => (current === id ? null : current));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-navy-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
          <div className="flex items-center gap-4">
            <BrandLogo variant="light" className="h-10 w-auto" href={null} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                Admin Portal
              </p>
              <h1 className="font-display text-lg font-bold">Carrier Registrations</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              View Website
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-hover"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Applications", value: stats.total },
            { label: "New", value: stats.neu },
            { label: "Contacted", value: stats.contacted },
            { label: "Approved", value: stats.approved },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm shadow-navy/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-light">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-navy">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company, email, MC, DOT..."
            className="input-field flex-1"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | RegistrationStatus)}
            className="input-field sm:w-48"
          >
            <option value="all">All statuses</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-navy">
                Applications ({filtered.length})
              </h2>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="px-5 py-10 text-center text-sm text-slate">
                  No registrations yet. New carrier signups will appear here.
                </p>
              ) : (
                <ul className="divide-y divide-border">
                  {filtered.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={`flex w-full flex-col gap-2 px-5 py-4 text-left transition hover:bg-surface ${
                          selected?.id === item.id ? "bg-orange-soft/50" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display font-semibold text-navy">
                              {item.companyName}
                            </p>
                            <p className="mt-0.5 text-sm text-slate">{item.ownerName}</p>
                          </div>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${statusStyles[item.status]}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-light">
                          {new Date(item.createdAt).toLocaleString()} · MC {item.mcNumber}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
            {!selected ? (
              <p className="py-16 text-center text-sm text-slate">
                Select an application to view details.
              </p>
            ) : (
              <div className="space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy">
                      {selected.companyName}
                    </h2>
                    <p className="mt-1 text-sm text-slate">
                      Submitted {new Date(selected.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <select
                    value={selected.status}
                    disabled={busyId === selected.id}
                    onChange={(e) =>
                      updateStatus(selected.id, e.target.value as RegistrationStatus)
                    }
                    className="input-field !w-auto"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <DetailGrid
                  items={[
                    ["Owner", selected.ownerName],
                    ["Dispatch Contact", selected.dispatchContact],
                    ["Email", selected.email],
                    ["Phone", selected.phone],
                    ["MC Number", selected.mcNumber],
                    ["DOT Number", selected.dotNumber],
                    ["EIN", selected.ein || "—"],
                    ["Years in Business", selected.yearsInBusiness || "—"],
                    ["Equipment", selected.equipment.join(", ") || "—"],
                    ["Drivers", selected.numberOfDrivers || "—"],
                    ["Trucks", selected.numberOfTrucks || "—"],
                    [
                      "Truck",
                      [selected.truckYear, selected.truckMake, selected.truckModel]
                        .filter(Boolean)
                        .join(" ") || "—",
                    ],
                    ["ELD Provider", selected.eldProvider || "—"],
                    ["Location", selected.currentLocation || "—"],
                    ["Preferred States", selected.preferredStates || "—"],
                    ["Preferred Lanes", selected.preferredLanes || "—"],
                    ["Insurance", selected.insuranceCompany || "—"],
                    ["Policy Exp", selected.policyExpiration || "—"],
                    ["Factoring", selected.isFactoring || "—"],
                    ["Factoring Co", selected.factoringCompany || "—"],
                  ]}
                />

                {(selected.specialRequirements ||
                  selected.preferredBrokers ||
                  selected.comments) && (
                  <div className="space-y-3 rounded-xl border border-border bg-surface p-4">
                    {selected.specialRequirements && (
                      <Note label="Special Requirements" text={selected.specialRequirements} />
                    )}
                    {selected.preferredBrokers && (
                      <Note label="Preferred Brokers" text={selected.preferredBrokers} />
                    )}
                    {selected.comments && <Note label="Comments" text={selected.comments} />}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={`mailto:${selected.email}`} className="btn-primary !py-2.5">
                    Email Carrier
                  </a>
                  <a
                    href={`tel:${selected.phone}`}
                    className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-surface"
                  >
                    Call
                  </a>
                  <button
                    type="button"
                    disabled={busyId === selected.id}
                    onClick={() => removeRegistration(selected.id)}
                    className="rounded-lg border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailGrid({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-xl border border-border bg-surface px-3.5 py-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-light">
            {label}
          </dt>
          <dd className="mt-1 break-words text-sm font-medium text-navy">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Note({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-light">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-wrap text-sm text-navy">{text}</p>
    </div>
  );
}
