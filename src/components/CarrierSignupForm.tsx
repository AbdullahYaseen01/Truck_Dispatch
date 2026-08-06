"use client";

import { FormEvent, ReactNode, useState } from "react";

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

export default function CarrierSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="border border-border bg-white p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
          Application Received
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy">
          Welcome to FreightTech Hub
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate">
          Thank you for applying. Our team will review your information and follow up shortly to
          begin your carrier onboarding.
        </p>
        <a
          href="mailto:info@freighttechhub.com"
          className="mt-8 inline-flex rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
        >
          Email info@freighttechhub.com
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <FormSection title="Company Information">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Company Name" name="companyName" required />
          <Field label="Owner Name" name="ownerName" required />
          <Field label="Dispatch Contact" name="dispatchContact" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone Number" name="phone" type="tel" required />
        </div>
      </FormSection>

      <FormSection title="Authority Information">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="MC Number" name="mcNumber" required />
          <Field label="DOT Number" name="dotNumber" required />
          <Field label="EIN" name="ein" />
          <Field label="Years in Business" name="yearsInBusiness" />
        </div>
      </FormSection>

      <FormSection title="Equipment">
        <p className="mb-4 text-sm text-slate">Select Equipment</p>
        <div className="check-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentOptions.map((option) => (
            <label key={option}>
              <input type="checkbox" name="equipment" value={option} />
              <span className="text-sm text-navy">{option}</span>
            </label>
          ))}
        </div>
      </FormSection>

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

      <FormSection title="Insurance">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Insurance Company" name="insuranceCompany" />
          <Field label="Policy Expiration Date" name="policyExpiration" type="date" />
          <Field label="Cargo Insurance" name="cargoInsurance" />
          <Field label="Liability Insurance" name="liabilityInsurance" />
          <div className="md:col-span-2">
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

      <FormSection title="Factoring">
        <div className="grid gap-4 md:grid-cols-2">
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
        </div>
      </FormSection>

      <FormSection title="Documents Upload">
        <p className="mb-4 text-sm text-slate">Upload the following documents:</p>
        <div className="grid gap-4 md:grid-cols-2">
          {documentList.map((doc) => (
            <div key={doc}>
              <label className="mb-2 block text-sm font-medium text-navy">✔ {doc}</label>
              <input
                type="file"
                name={`doc_${doc}`}
                accept=".pdf,.jpg,.jpeg,.png"
                className="input-field file:mr-4 file:rounded file:border-0 file:bg-orange-soft file:px-3 file:py-1 file:text-sm file:font-semibold file:text-orange"
              />
            </div>
          ))}
        </div>
      </FormSection>

      <FormSection title="Additional Notes">
        <div className="grid gap-4">
          <TextArea label="Special Requirements" name="specialRequirements" />
          <TextArea label="Preferred Broker List" name="preferredBrokers" />
          <TextArea label="Preferred Lanes" name="notesPreferredLanes" />
          <TextArea label="Comments" name="comments" />
        </div>
      </FormSection>

      <button
        type="submit"
        className="w-full rounded-md bg-orange px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-hover sm:w-auto"
      >
        Join FreightTech Hub
      </button>
    </form>
  );
}

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border border-border bg-white p-6 sm:p-8">
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
      <textarea id={name} name={name} rows={4} className="input-field resize-y" />
    </div>
  );
}
