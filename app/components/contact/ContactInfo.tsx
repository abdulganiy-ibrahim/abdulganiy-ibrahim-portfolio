import { Mail, Phone } from "lucide-react";

type ContactDetail = {
  icon: typeof Mail;
  label: string;
  href: string;
};

const details: ContactDetail[] = [
  { icon: Mail, label: "abdulganiyibrahim.dev@gmail.com", href: "mailto:abdulganiyibrahim.dev@gmail.com" },
  { icon: Phone, label: "+234 816 992 3682", href: "tel:+2348169923682" },
];

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-center p-8 sm:p-10 lg:p-12">
      <span className="text-sm font-semibold text-primary">
        Get In Touch
      </span>

      <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
        Let&apos;s work together on your next project
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I&apos;ll get back to you ASAP.
      </p>

      <div className="mt-8 space-y-4">
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            <a
              key={detail.label}
              href={detail.href}
              className="group flex items-center gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={16} />
              </span>
              <span className="text-sm font-medium text-foreground">
                {detail.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}