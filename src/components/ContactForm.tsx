"use client";

import { FormEvent, useState } from "react";
import { IconArrow, IconCheck } from "@/components/Icons";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`FreightTech Hub inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company || "N/A"}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    try {
      window.location.href = `mailto:info@freighttechhub.com?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 400));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="animate-fade-up rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-soft text-orange">
          <IconCheck className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-bold text-navy">Message ready to send</h2>
        <p className="mt-3 text-slate">
          Your email client should open with the message prepared for{" "}
          <a className="font-semibold text-orange" href="mailto:info@freighttechhub.com">
            info@freighttechhub.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-primary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-white p-5 shadow-sm shadow-navy/5 sm:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
            Full Name *
          </label>
          <input id="name" name="name" required className="input-field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy">
            Company
          </label>
          <input id="company" name="company" className="input-field" autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-field"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input-field"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field min-h-[120px] resize-y"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please email us directly.</p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-70">
        {status === "sending" ? "Preparing..." : "Send Message"}
        <IconArrow />
      </button>
    </form>
  );
}
