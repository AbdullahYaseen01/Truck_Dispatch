"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { IconArrow, IconCheck } from "@/components/Icons";

const equipmentOptions = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Step Deck",
  "Conestoga",
  "Box Truck",
  "Power Only",
  "Hotshot",
];

const documentList = [
  "MC Authority",
  "W-9",
  "Certificate of Insurance",
  "Driver License",
  "Truck Registration",
  "Trailer Registration",
  "Voided Check",
  "Notice of Assignment (if factored)",
];

const steps = [
  "Company",
  "Authority",
  "Equipment",
  "Drivers",
  "Insurance",
  "Docs",
  "Notes",
];

export default function CarrierSignupForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [equipment, setEquipment] = useState<string[]>([]);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  function toggleEquipment(option: string) {
    setEquipment((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  }

  function next() {
    // Validate only the currently visible required fields before advancing
    const form = document.getElementById("carrier-signup-form") as HTMLFormElement | null;
    if (form) {
      const visibleRequired = form.querySelectorAll<HTMLInputElement>(
        `[data-step="${step}"] input[required], [data-step="${step}"] select[required], [data-step="${step}"] textarea[required]`
      );
      for (const field of visibleRequired) {
        if (!field.checkValidity()) {
          field.reportValidity();
          return;
        }
      }
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 180, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Ensure required company/authority fields are filled before send
    const requiredNames = [
      "companyName",
      "ownerName",
      "dispatchContact",
      "email",
      "phone",
      "mcNumber",
      "dotNumber",
    ];
    for (const name of requiredNames) {
      const field = form.elements.namedItem(name) as HTMLInputElement | null;
      if (field && !field.value.trim()) {
        const stepForField =
          name === "mcNumber" || name === "dotNumber" ? 1 : 0;
        setStep(stepForField);
        setTimeout(() => field.focus(), 50);
        field.reportValidity?.();
        return;
      }
    }

    const data = new FormData(form);

    const payload = [
      "New Carrier Partner Application",
      "",
      `Company: ${data.get("companyName")}`,
      `Owner: ${data.get("ownerName")}`,
      `Dispatch Contact: ${data.get("dispatchContact")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      `MC: ${data.get("mcNumber")}`,
      `DOT: ${data.get("dotNumber")}`,
      `EIN: ${data.get("ein") || "N/A"}`,
      `Years in Business: ${data.get("yearsInBusiness") || "N/A"}`,
      "",
      `Equipment: ${equipment.join(", ") || "Not specified"}`,
      `Drivers: ${data.get("numberOfDrivers") || "N/A"}`,
      `Trucks: ${data.get("numberOfTrucks") || "N/A"}`,
      `Truck: ${[data.get("truckYear"), data.get("truckMake"), data.get("truckModel")]
        .filter(Boolean)
        .join(" ") || "N/A"}`,
      `ELD: ${data.get("eldProvider") || "N/A"}`,
      `Location: ${data.get("currentLocation") || "N/A"}`,
      `Preferred States: ${data.get("preferredStates") || "N/A"}`,
      `Preferred Lanes: ${data.get("preferredLanes") || "N/A"}`,
      "",
      `Insurance Co: ${data.get("insuranceCompany") || "N/A"}`,
      `Policy Exp: ${data.get("policyExpiration") || "N/A"}`,
      `Factoring: ${data.get("isFactoring") || "N/A"}`,
      `Factoring Company: ${data.get("factoringCompany") || "N/A"}`,
      `Need Factoring Help: ${data.get("needFactoringHelp") || "N/A"}`,
      "",
      `Special Requirements: ${data.get("specialRequirements") || "N/A"}`,
      `Preferred Brokers: ${data.get("preferredBrokers") || "N/A"}`,
      `Comments: ${data.get("comments") || "N/A"}`,
      "",
      "Note: Document files selected in the browser should be attached manually or sent separately.",
    ].join("\n");

    const subject = encodeURIComponent(
      `Carrier Partner Application — ${data.get("companyName") || "New Carrier"}`
    );
    const body = encodeURIComponent(payload);
    window.location.href = `mailto:info@freighttechhub.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="animate-fade-up rounded-2xl border border-border bg-white p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-soft text-orange">
          <IconCheck className="h-7 w-7" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange sm:text-sm">
          Application Ready
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy">
          Welcome to FreightTech Hub
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate sm:text-base">
          Your application summary is ready in your email client. Send it to complete your request,
          then attach any supporting documents. Our team will follow up shortly.
        </p>
        <a href="mailto:info@freighttechhub.com" className="btn-primary mt-8">
          Email info@freighttechhub.com
        </a>
      </div>
    );
  }

  return (
    <form
      id="carrier-signup-form"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <div className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-navy">
            Step {step + 1} of {steps.length}: {steps[step]}
          </p>
          <p className="text-xs text-slate-light">{Math.round(progress)}%</p>
        </div>
        <div className="progress-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 hidden gap-1 sm:flex">
          {steps.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                i === step
                  ? "bg-orange text-white"
                  : i < step
                    ? "bg-orange-soft text-orange"
                    : "bg-surface text-slate-light"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Keep all steps mounted so FormData stays complete on submit */}
      <div data-step="0" className={step === 0 ? "block" : "hidden"}>
        <FormSection title="Company Information">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company Name" name="companyName" required />
            <Field label="Owner Name" name="ownerName" required />
            <Field label="Dispatch Contact" name="dispatchContact" required />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
          </div>
        </FormSection>
      </div>

      <div data-step="1" className={step === 1 ? "block" : "hidden"}>
        <FormSection title="Authority Information">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="MC Number" name="mcNumber" required />
            <Field label="DOT Number" name="dotNumber" required />
            <Field label="EIN" name="ein" />
            <Field label="Years in Business" name="yearsInBusiness" />
          </div>
        </FormSection>
      </div>

      <div data-step="2" className={step === 2 ? "block" : "hidden"}>
        <FormSection title="Equipment">
          <p className="mb-4 text-sm text-slate">Select Equipment</p>
          <div className="check-grid grid gap-3 sm:grid-cols-2">
            {equipmentOptions.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={equipment.includes(option)}
                  onChange={() => toggleEquipment(option)}
                />
                <span className="text-sm text-navy">{option}</span>
              </label>
            ))}
          </div>
        </FormSection>
      </div>

      <div data-step="3" className={step === 3 ? "block" : "hidden"}>
        <FormSection title="Driver Information">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Number of Drivers" name="numberOfDrivers" type="number" />
            <Field label="Number of Trucks" name="numberOfTrucks" type="number" />
            <Field label="Truck Year" name="truckYear" />
            <Field label="Truck Make" name="truckMake" />
            <Field label="Truck Model" name="truckModel" />
            <Field label="ELD Provider" name="eldProvider" />
            <Field label="Current Location" name="currentLocation" />
            <Field label="Preferred Operating States" name="preferredStates" />
            <div className="md:col-span-2">
              <Field label="Preferred Lanes" name="preferredLanes" />
            </div>
          </div>
        </FormSection>
      </div>

      <div data-step="4" className={step === 4 ? "block" : "hidden"}>
        <FormSection title="Insurance & Factoring">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Insurance Company" name="insuranceCompany" />
            <Field label="Policy Expiration Date" name="policyExpiration" type="date" />
            <Field label="Cargo Insurance" name="cargoInsurance" />
            <Field label="Liability Insurance" name="liabilityInsurance" />
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">Are you Factoring?</label>
              <select name="isFactoring" className="input-field">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <Field label="Factoring Company" name="factoringCompany" />
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Need Factoring Assistance?
              </label>
              <select name="needFactoringHelp" className="input-field">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">Upload COI</label>
              <input
                type="file"
                name="coi"
                accept=".pdf,.jpg,.jpeg,.png"
                className="input-field file:mr-4 file:rounded file:border-0 file:bg-orange-soft file:px-3 file:py-1 file:text-sm file:font-semibold file:text-orange"
              />
            </div>
          </div>
        </FormSection>
      </div>

      <div data-step="5" className={step === 5 ? "block" : "hidden"}>
        <FormSection title="Documents Upload">
          <p className="mb-4 text-sm text-slate">
            Upload documents now, or attach them when your email draft opens.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {documentList.map((doc) => (
              <div key={doc}>
                <label className="mb-2 block text-sm font-medium text-navy">✔ {doc}</label>
                <input
                  type="file"
                  name={`doc_${doc}`}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="input-field file:mr-3 file:rounded file:border-0 file:bg-orange-soft file:px-3 file:py-1 file:text-sm file:font-semibold file:text-orange"
                />
              </div>
            ))}
          </div>
        </FormSection>
      </div>

      <div data-step="6" className={step === 6 ? "block" : "hidden"}>
        <FormSection title="Additional Notes">
          <div className="grid gap-4">
            <TextArea label="Special Requirements" name="specialRequirements" />
            <TextArea label="Preferred Broker List" name="preferredBrokers" />
            <TextArea label="Preferred Lanes" name="notesPreferredLanes" />
            <TextArea label="Comments" name="comments" />
          </div>
        </FormSection>
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-navy transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary">
            Continue <IconArrow />
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            Join FreightTech Hub <IconArrow />
          </button>
        )}
      </div>
    </form>
  );
}

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="animate-fade-up rounded-2xl border border-border bg-white p-5 shadow-sm shadow-navy/5 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-navy">{title}</h2>
      <div className="section-rule mt-3 mb-6" />
      {children}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="input-field"
      />
    </div>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      <textarea id={name} name={name} rows={4} className="input-field min-h-[110px] resize-y" />
    </div>
  );
}
