"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border bg-white p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-navy">Message sent</h2>
        <p className="mt-3 text-slate">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-border bg-white p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
            Full Name *
          </label>
          <input id="name" name="name" required className="input-field" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy">
            Company
          </label>
          <input id="company" name="company" className="input-field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email *
          </label>
          <input id="email" name="email" type="email" required className="input-field" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="input-field" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} className="input-field resize-y" />
      </div>
      <button
        type="submit"
        className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
      >
        Send Message
      </button>
    </form>
  );
}
