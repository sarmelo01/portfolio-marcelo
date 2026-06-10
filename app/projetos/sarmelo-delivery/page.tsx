import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { TechBadge } from "@/components/projects/TechBadge"

const technologies = [
  "React",
  "Vite",
  "Node.js",
  "Express",
  "SQLite",
  "JWT",
  "ViaCEP",
  "Positionstack",
]

const features = [
  "Cardápio digital com produtos organizados",
  "Carrinho de compras",
  "Sistema de pedidos",
  "Cupons de desconto",
  "Cálculo de frete por distância",
  "Autenticação com JWT",
  "Painel do restaurante",
  "Integração com ViaCEP e Positionstack",
]

export default function SarmeloDeliveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container-page py-16 md:py-24">
        <div className="mb-10">
          <Link
            href="/projetos"
            className="text-sm text-muted-foreground transition hover:text-primary"
          >
            ← Voltar para projetos
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Projeto próprio
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Sarmelo Delivery — Sistema de Delivery
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Projeto desenvolvido como desafio técnico inspirado em um sistema
              de delivery no estilo iFood, com foco em praticar fluxo completo
              de compra, autenticação, pedidos, carrinho, cupons e painel para o
              restaurante.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/sarmelo01/Sistema-Delivery"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Ver repositório no GitHub
              </a>

              <Link
                href="/contato"
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Falar comigo
              </Link>
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-6">
            <h2 className="text-xl font-semibold">Informações rápidas</h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-muted-foreground">Tipo</p>
                <p className="font-medium">Projeto próprio / desafio técnico</p>
              </div>

              <div>
                <p className="text-muted-foreground">Objetivo</p>
                <p className="font-medium">
                  Simular um sistema real de delivery
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Foco principal</p>
                <p className="font-medium">
                  Front-end, back-end, autenticação e regras de negócio
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <SectionTitle
            label="Visão geral"
            title="O que esse projeto mostra"
            description="Esse projeto ajuda a mostrar que você consegue montar uma aplicação com mais de uma parte funcionando junto: tela do usuário, regras do sistema, autenticação, banco de dados e painel administrativo."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Fluxo de compra</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                O sistema trabalha com cardápio, carrinho, pedido e cálculo de
                entrega, simulando uma experiência próxima de um delivery real.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Back-end próprio</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Além da interface, o projeto usa Node.js e Express para lidar
                com autenticação, pedidos, cupons e dados do sistema.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold">Projeto prático</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Foi feito para treinar construção de sistemas completos, não
                apenas páginas visuais simples.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            label="Funcionalidades"
            title="Principais partes do sistema"
            description="Aqui entram as funções mais importantes que foram trabalhadas no projeto."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-border bg-card/60 p-5 text-sm text-muted-foreground"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            label="Tecnologias"
            title="Stack utilizada"
            description="Tecnologias usadas para criar a interface, o servidor, autenticação, banco de dados e integrações."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-border bg-card/60 p-8">
          <h2 className="text-2xl font-bold">Resumo profissional</h2>

          <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
            O Sarmelo Delivery reforça meu interesse em desenvolver soluções
            digitais para problemas reais. Mesmo sendo um projeto de estudo e
            prática, ele mostra contato com regras de negócio, organização de
            dados, autenticação, integração com APIs e construção de uma
            aplicação mais completa.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  )
}