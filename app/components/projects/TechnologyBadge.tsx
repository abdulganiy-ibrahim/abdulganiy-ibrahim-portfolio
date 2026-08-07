type technologyBadgeProps = {
  name: string
}

export default function TechnologyBadge({name}: technologyBadgeProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-full bg-white border border-background-card p-2">
      <h1 className="text-sm">{name}</h1>
    </div>
  )
}