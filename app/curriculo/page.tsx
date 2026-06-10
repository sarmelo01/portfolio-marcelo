import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          label="Currículo"
          title="Currículo profissional"
          description="Meu currículo é focado em tecnologia, suporte técnico, sistemas web, automações, processos digitais e soluções práticas para negócios."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Marcelo Fuhr
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Estudante de Ciência da Computação focado em sistemas web,
              automações e soluções digitais para problemas reais. Busco
              oportunidades onde eu possa aprender, evoluir e contribuir com
              tecnologia de forma prática.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Idade</p>
                <p className="mt-1 font-medium text-foreground">19 anos</p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Cidade</p>
                <p className="mt-1 font-medium text-foreground">
                  Campo Grande/MS
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">E-mail</p>
                <Link
                  href="mailto:marcelofuhr.2023@gmail.com"
                  className="mt-1 block text-sm font-medium text-primary hover:underline sm:text-base"
                >
                  marcelofuhr.2023@gmail.com
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <Link
                  href="https://wa.me/5567991369906"
                  target="_blank"
                  className="mt-1 block font-medium text-primary hover:underline"
                >
                  67 99136-9906
                </Link>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Foco do currículo
            </h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">
                  Áreas de interesse
                </p>
                <p className="mt-1 font-medium text-foreground">
                  Tecnologia, suporte técnico, sistemas web, automações e
                  processos digitais
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">
                  Tipo de oportunidade
                </p>
                <p className="mt-1 font-medium text-foreground">
                  CLT, PJ, freela ou projetos práticos
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Observação</p>
                <p className="mt-1 font-medium text-foreground">
                  O currículo não inclui Instagram e não exagera meu nível
                  técnico.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/curriculo-marcelo-fuhr.pdf"
                target="_blank"
                className="rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Baixar currículo
              </Link>

              <Link
                href="https://www.linkedin.com/in/marcelo-fuhr-86111a353/"
                target="_blank"
                className="rounded-full border border-border px-5 py-3 text-center text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-primary/10"
              >
                Ver LinkedIn
              </Link>

              <Link
                href="https://github.com/sarmelo01"
                target="_blank"
                className="rounded-full border border-border px-5 py-3 text-center text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-primary/10"
              >
                Ver GitHub
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}