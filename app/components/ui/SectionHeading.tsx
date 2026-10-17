type SectionHeadingProps = {
  label: string;
  title: string;
};

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <p className="font-heading text-lg font-semibold text-primary">{label}</p>
      <h2 className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}