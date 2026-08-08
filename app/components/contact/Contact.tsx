'use client'

import { toast } from "sonner";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import type { ContactFormValues } from "@/types";

export default function Contact() {

  const handleSubmit = async (values: ContactFormValues) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message ?? "Failed to send message");
    }

    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/5 via-(--color-surface) to-(--color-surface) shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:border-r lg:border-border">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm onSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </section>
  );
}