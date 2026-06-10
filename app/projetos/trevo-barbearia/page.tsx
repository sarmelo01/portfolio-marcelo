import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { TechBadge } from "@/components/projects/TechBadge"
import { SectionTitle } from "@/components/shared/SectionTitle"

const technologies = ["React", "TypeScript", "Supabase", "Vercel", "Git/GitHub"]

const features = [
  "Site público para agendamento online",
  "Painel administrativo para gestão da barbearia",
  "Cadastro e organização de profissionais",
  "Gestão de serviços, produtos e horários",
  "Controle de caixa, contas e relatórios financeiros",
  "Bloqueios de horários e regras de disponibilidade",
  "Integração com banco de dados Supabase",
  "Deploy e publicação usando Vercel",
]

export default function TrevoBarbeariaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-8">
          <Link
            href="/projetos"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Voltar para projetos
          </Link>
        </div>

        <SectionTitle
          label="Projeto real"
          title="Trevo Barbearia — Sistema de Gestão Web"
          description="Sistema web desenvolvido para uma barbearia real, com foco em agendamento online, painel administrativo, gestão operacional e organização de processos internos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Visão geral do projeto
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                O Trevo Barbearia foi um projeto real desenvolvido para cliente,
                com autorização para ser apresentado no meu portfólio
                profissional.
              </p>

              <p>
                A proposta do sistema era centralizar a rotina da barbearia em
                uma solução web, conectando o agendamento público com um painel
                administrativo para controle de profissionais, serviços,
                produtos, horários, caixa, contas e relatórios.
              </p>

              <p>
                O projeto foi concluído tecnicamente, mas não foi lançado
                oficialmente nem colocado em operação por decisão comercial do
                cliente. Por isso, esta página apresenta o projeto como estudo
                real de desenvolvimento e solução prática, sem expor dados
                sensíveis.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Informações rápidas
            </h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Tipo</p>
                <p className="mt-1 font-medium text-foreground">
                  Sistema de Gestão Web
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="mt-1 font-medium text-foreground">
                  Concluído tecnicamente
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Uso no portfólio</p>
                <p className="mt-1 font-medium text-foreground">
                  Autorizado pelo cliente
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                <p className="text-sm font-medium text-emerald-400">
                  Observação importante
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  O sistema não deve ser apresentado como ativo ou em operação
                  oficial.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">
            Tecnologias utilizadas
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <TechBadge key={technology} label={technology} />
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">
            Principais funcionalidades
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card/60 p-6 shadow-glow sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">
            O que esse projeto demonstra
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Este projeto demonstra minha capacidade de entender uma demanda de
              negócio, organizar funcionalidades, estruturar uma solução web e
              transformar processos manuais em um sistema digital mais claro e
              controlável.
            </p>

            <p>
              Também mostra experiência prática com desenvolvimento de telas,
              organização de fluxo de usuário, integração com banco de dados,
              controle administrativo e preocupação com usabilidade para o
              cliente final.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}