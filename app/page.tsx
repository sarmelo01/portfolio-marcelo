import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

const featuredProjects = [
  {
    name: "Trevo Barbearia",
    description:
      "Sistema real de gestão web para barbearia, com agendamento online, painel administrativo, serviços, produtos e relatórios.",
    href: "/projetos/trevo-barbearia",
    status: "Projeto real",
    detail: "Cliente real · Sistema completo · Gestão",
  },
  {
    name: "Sarmelo Delivery",
    description:
      "Sistema de delivery inspirado em iFood, com cardápio, carrinho, pedidos, autenticação e painel do restaurante.",
    href: "/projetos/sarmelo-delivery",
    status: "Desafio técnico",
    detail: "Full stack · Pedidos · Autenticação",
  },
]

const focusItems = [
  "Sistemas web",
  "Automações",
  "Suporte técnico",
  "Processos digitais",
  "IA aplicada",
  "Vendas e negócio",
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="container-page relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Construindo minha próxima fase profissional
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Marcelo Fuhr
            </h1>

            <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Tecnologia prática para resolver problemas reais.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tenho 19 anos, estudo Ciência da Computação e estou construindo
              experiência com sistemas web, automações, suporte técnico e
              projetos próprios. Minha visão é simples: aprender rápido,
              construir de verdade e transformar conhecimento em oportunidade.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">19</p>
                <p className="mt-1 text-sm text-slate-400">anos</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">CG/MS</p>
                <p className="mt-1 text-sm text-slate-400">Campo Grande</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="mt-1 text-sm text-slate-400">projetos práticos</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-indigo-400"
              >
                Ver projetos
              </Link>

              <Link
                href="/curriculo"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver currículo
              </Link>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
              >
                Falar comigo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-emerald-500/20 blur-2xl" />

            <div className="glass-card relative rounded-[2rem] p-4 sm:p-6">
              <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 sm:p-5">
                <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:h-96">
                  <Image
                    src="/marcelo-fuhr.jpg"
                    alt="Foto profissional de Marcelo Fuhr"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">
                    Fase atual
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Estudando tecnologia, vendas, IA, inglês e
                    empreendedorismo enquanto desenvolvo projetos próprios e
                    busco novas oportunidades.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {focusItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Projetos em destaque
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Não é só estudo. É construção.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Eu uso projetos para testar ideias, aprender na prática e mostrar
              como penso: entender o problema, organizar o fluxo e entregar uma
              solução funcional.
            </p>
          </div>

          <div className="grid gap-5">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                      {project.status}
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-white">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-indigo-200">
                      {project.detail}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-indigo-200 transition group-hover:translate-x-1">
                    Ver detalhes →
                  </span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}