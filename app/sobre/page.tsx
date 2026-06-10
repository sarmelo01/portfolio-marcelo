// app/sobre/page.tsx
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Supabase"] },
  { category: "Banco de dados", items: ["SQLite", "PostgreSQL (Supabase)"] },
  { category: "Ferramentas", items: ["Git", "GitHub", "Vercel", "VS Code"] },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-6xl flex-1 px-6 py-20 sm:py-28">
        <SectionTitle
          label="Sobre"
          title="Quem é Marcelo Fuhr"
          description="19 anos, Campo Grande/MS. Estou construindo minha trajetória em tecnologia com projetos reais, visão prática e ambição de longo prazo."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Trajetória */}
          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Trajetória
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Comecei minha vida profissional cedo, passando por atendimento
                ao cliente, suporte técnico e Customer Success em empresas como
                Track Land e Hiper Simples. Nessas experiências aprendi a lidar
                com clientes B2B, entender processos operacionais e resolver
                problemas no dia a dia com responsabilidade.
              </p>

              <p>
                Com o tempo, percebi que tecnologia era o caminho para resolver
                esses mesmos problemas de forma mais inteligente e escalável.
                Isso me levou a estudar Ciência da Computação e a começar a
                desenvolver projetos próprios — primeiro para entender como as
                coisas funcionam, depois para entregar soluções que de fato
                funcionam para quem usa.
              </p>

              <p>
                Hoje combino essa bagagem de operação e atendimento com
                desenvolvimento web prático. Tenho projetos concretos no
                portfólio, estou em constante evolução e quero construir uma
                trajetória grande em tecnologia — com visão empreendedora e
                foco em resolver problemas reais.
              </p>
            </div>
          </div>

          {/* Stack atual */}
          <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Tecnologias que uso
            </h3>

            <div className="mt-5 space-y-4">
              {techStack.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-border bg-background/60 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}