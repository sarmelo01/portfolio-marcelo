import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { certificates } from "@/data/certificates"

export default function CertificadosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-6xl flex-1 px-6 py-20 sm:py-28">
        <SectionTitle
          label="Certificados"
          title="Cursos e formações complementares"
          description="Esta página vai reunir meus certificados, cursos e formações complementares relacionados a tecnologia, desenvolvimento web, automações e soluções digitais."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {certificate.status}
                </span>

                {certificate.year && (
                  <span className="text-sm text-muted-foreground">
                    {certificate.year}
                  </span>
                )}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-foreground">
                {certificate.title}
              </h2>

              <p className="mt-2 text-sm font-medium text-primary">
                {certificate.institution}
              </p>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {certificate.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Próximo passo
          </h3>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Esta seção está preparada para receber certificados reais conforme
            eu concluir cursos e formações. A ideia é manter o portfólio
            atualizado sem inventar informações ou exagerar meu nível técnico.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}