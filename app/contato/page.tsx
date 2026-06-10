import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          label="Contato"
          title="Vamos conversar?"
          description="Estou aberto a oportunidades em tecnologia, suporte técnico, sistemas web, automações, processos digitais, freelas, CLT ou PJ."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Marcelo Fuhr
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Sou estudante de Ciência da Computação, tenho 19 anos e moro em
              Campo Grande/MS. Busco oportunidades onde eu possa aprender,
              evoluir e contribuir com soluções digitais para problemas reais.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5">
              <p className="text-sm font-medium text-primary">
                Aberto a oportunidades
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tecnologia, suporte técnico, sistemas web, automações,
                processos digitais, projetos práticos e soluções para negócios.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Canais de contato
            </h3>

            <div className="mt-6 grid gap-4">
              <Link
                href="mailto:marcelofuhr.2023@gmail.com"
                className="rounded-2xl border border-border bg-background/60 p-5 transition hover:border-primary/50 hover:bg-primary/10"
              >
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="mt-1 break-words font-medium text-primary">
                  marcelofuhr.2023@gmail.com
                </p>
              </Link>

              <Link
                href="https://wa.me/5567991369906"
                target="_blank"
                className="rounded-2xl border border-border bg-background/60 p-5 transition hover:border-primary/50 hover:bg-primary/10"
              >
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="mt-1 font-medium text-primary">
                  67 99136-9906
                </p>
              </Link>

              <Link
                href="https://www.linkedin.com/in/marcelo-fuhr-86111a353/"
                target="_blank"
                className="rounded-2xl border border-border bg-background/60 p-5 transition hover:border-primary/50 hover:bg-primary/10"
              >
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="mt-1 font-medium text-primary">
                  linkedin.com/in/marcelo-fuhr
                </p>
              </Link>

              <Link
                href="https://github.com/sarmelo01"
                target="_blank"
                className="rounded-2xl border border-border bg-background/60 p-5 transition hover:border-primary/50 hover:bg-primary/10"
              >
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="mt-1 font-medium text-primary">
                  github.com/sarmelo01
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}