// app/experiencia/page.tsx
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { experiences } from "@/data/experience"

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          label="Experiência"
          title="Trajetória profissional"
          description="Passei por atendimento, suporte técnico e Customer Success antes de focar em desenvolvimento. Essa bagagem é parte do que me diferencia."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => {
            const isProjeto = experience.type === "Projetos e evolução técnica"
            const isEmpreendedor = experience.type === "Experiência empreendedora"

            const borderClass = isProjeto
              ? "border-indigo-400/20 bg-indigo-500/5"
              : isEmpreendedor
              ? "border-amber-400/20 bg-amber-500/5"
              : "border-border bg-card/60"

            const labelClass = isProjeto
              ? "text-indigo-300"
              : isEmpreendedor
              ? "text-amber-300"
              : "text-primary"

            const badgeClass = isProjeto
              ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-200"
              : isEmpreendedor
              ? "border-amber-400/20 bg-amber-500/10 text-amber-200"
              : "border-primary/20 bg-primary/10 text-primary"

            const dotClass = isProjeto
              ? "bg-indigo-400"
              : isEmpreendedor
              ? "bg-amber-400"
              : "bg-primary"

            return (
              <article
                key={`${experience.role}-${experience.company}`}
                className={`rounded-3xl border p-6 sm:p-8 ${borderClass}`}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}>
                      {experience.type}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-foreground">
                      {experience.role}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>

                  <div className={`shrink-0 self-start rounded-full border px-4 py-2 text-sm font-medium ${badgeClass}`}>
                    {experience.period}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  {experience.description}
                </p>

                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}