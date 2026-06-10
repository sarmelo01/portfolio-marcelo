type SectionTitleProps = {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const isCenter = align === "center"

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {label}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}