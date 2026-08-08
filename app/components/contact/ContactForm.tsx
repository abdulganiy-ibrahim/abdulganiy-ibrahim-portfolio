"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Send } from "lucide-react";
import { ContactFormValues, FormErrors } from "@/types";



interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
}

const emptyValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name";

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!values.subject.trim()) nextErrors.subject = "Please enter a subject";
    if (!values.message.trim()) nextErrors.message = "Please enter a message";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(values);
      setValues(emptyValues);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-(--color-surface) px-4 py-3 text-sm text-(--color-foreground) placeholder:text-(--color-muted-foreground) outline-none transition-colors focus:ring-[3px]";

  const inputClasses = (hasError?: string) =>
    `${inputBase} ${
      hasError
        ? "border-(--color-danger) focus:border-(--color-danger) focus:ring-(--color-danger)/15"
        : "border-(--color-border) focus:border-(--color-primary) focus:ring-(--color-primary)/15"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange("name")}
            className={inputClasses(errors.name)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-danger">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange("email")}
            className={inputClasses(errors.email)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-danger">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Subject"
          value={values.subject}
          onChange={handleChange("subject")}
          className={inputClasses(errors.subject)}
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-danger">{errors.subject}</p>
        )}
      </div>

      <div className="mt-4">
        <textarea
          rows={5}
          placeholder="Your Message"
          value={values.message}
          onChange={handleChange("message")}
          className={`${inputClasses(errors.message)} resize-y`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-danger">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
  );
}