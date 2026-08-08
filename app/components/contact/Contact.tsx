import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/5 via-(--color-surface) to-(--color-surface) shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:border-r lg:border-border">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}