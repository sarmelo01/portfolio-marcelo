// app/sobre/page.tsx
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Supabase"] },
  { category: "Banco de dados", items: ["PostgreSQL", "SQLite"] },
  { category: "Ferramentas", items: ["Git", "GitHub", "Vercel", "VS Code"] },
]

const blocos = [
  {
    titulo: "O que me move",
    texto:
      "Quero usar tecnologia para resolver problemas reais — não só escrever código, mas entender o processo, identificar o gargalo e construir algo que funcione de verdade. Essa mentalidade veio antes de qualquer linha de código.",
  },
  {
    titulo: "Como eu trabalho",
    texto:
      "Aprendo fazendo. Já passei por suporte técnico, Customer Success e operação B2B. Esse histórico me ensinou a pensar no usuário final, entender o lado do cliente e não travar quando o problema é novo.",
  },
  {
    titulo: "De onde vem a iniciativa",
    texto:
      "Em 2024 vendi doces por conta própria — abordagem direta, sem rede de apoio, sem salário fixo. Pode parecer simples, mas foi onde confirmei que consigo sair do lugar quando preciso, sem esperar alguém mandar.",
  },
  {
    titulo: "Agora",
    texto:
      "Estou no 2º ano de Ciência da Computação, construindo projetos reais e montando meu portfólio técnico. Quero crescer rápido, aprender com quem já fez e contribuir com times que estão construindo algo que importa.",
  },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-6xl flex-1 px-6 py-20 sm:py-28">
        <SectionTitle
          label="Sobre"
          title="Quem é Marcelo Fuhr"
          description="19 anos, Campo Grande/MS. Comecei cedo, errei bastante e aprendi na prática. Estou em construção — e é exatamente isso que me move."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Blocos de personalidade */}
          <div className="space-y-4">
            {blocos.map((bloco) => (
              <div
                key={bloco.titulo}
                className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-7"
              >
                <h3 className="text-base font-semibold text-primary">
                  {bloco.titulo}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {bloco.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8 h-fit lg:sticky lg:top-24">
            <h3 className="text-base font-semibold text-foreground">
              Tecnologias
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Stack que uso nos projetos
            </p>

            <div className="mt-5 space-y-4">
              {techStack.map((group) => (
                <div key={group.category}>
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