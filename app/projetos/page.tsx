// app/projetos/page.tsx
import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { TechBadge } from "@/components/projects/TechBadge"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { projects } from "@/data/projects"

const projectAccents: Record<string, { gradient: string; initials: string }> = {
  "trevo-barbearia": {
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    initials: "TB",
  },
  "sarmelo-delivery": {
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    initials: "SD",
  },
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          label="Projetos"
          title="O que já construí"
          description="Projetos práticos que mostram como penso, como resolvo problemas e o que consigo entregar."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const accent = projectAccents[project.slug] ?? {
              gradient: "from-primary/20 via-primary/10 to-transparent",
              initials: project.title.slice(0, 2).toUpperCase(),
            }

            return (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 shadow-glow transition hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Preview visual */}
                <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${accent.gradient} border-b border-border`}>
                  {project.previewImage ? (
                    <Image
                      src={project.previewImage}
                      alt={`Preview do projeto ${project.title}`}
                      fill
                      className="object-cover object-top transition group-hover:scale-105 duration-500"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-bold text-white/60">
                      {accent.initials}
                    </div>
                  )}
                  <div className="absolute right-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                    {project.status}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.type}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-foreground">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                      Ver detalhes
                    </Link>

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-primary/10"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}