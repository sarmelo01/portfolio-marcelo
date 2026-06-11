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

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="container-page relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">

          {/* COLUNA ESQUERDA */}
          <div>
            {/* Badge de status */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Disponível para oportunidades
            </div>

            <h1 className="max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Marcelo Fuhr
            </h1>

            <h2 className="mt-3 max-w-2xl font-display text-xl font-semibold leading-tight text-slate-200 sm:mt-4 sm:text-3xl lg:text-4xl">
              Construo sistemas web,{" "}
              <span className="text-indigo-300">automatizo processos</span>{" "}
              e resolvo problemas reais.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-lg">
              19 anos, Ciência da Computação, Campo Grande/MS.
              Aprendo rápido, entrego na prática e não espero ter tudo pronto
              para começar a construir.
            </p>

            {/* Cards de stats */}
            <div className="mt-6 grid grid-cols-4 gap-2 sm:mt-8 sm:gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-white sm:text-2xl">19</p>
                <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-xs">anos</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-white sm:text-2xl">CG</p>
                <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-xs">Campo Grande</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-white sm:text-2xl">2+</p>
                <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-xs">projetos</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                <p className="text-lg font-bold text-indigo-300 sm:text-2xl">B2B</p>
                <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-xs">CS e suporte</p>
              </div>
            </div>

            {/* Botões */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow-glow transition hover:bg-indigo-400 sm:rounded-full sm:px-6 sm:py-3 sm:text-sm"
              >
                Ver projetos
              </Link>
              <Link
                href="/curriculo"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:rounded-full sm:px-6 sm:py-3 sm:text-sm"
              >
                Ver currículo
              </Link>
              <Link
                href="/contato"
                className="col-span-2 inline-flex items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/20 sm:col-span-1 sm:rounded-full sm:px-6 sm:py-3 sm:text-sm"
              >
                Falar comigo
              </Link>
            </div>
          </div>

          {/* COLUNA DIREITA — foto + card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-emerald-500/20 blur-2xl" />

            <div className="glass-card relative rounded-[2rem] p-4 sm:p-6">
              <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 sm:p-5">

                {/* Foto */}
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:h-80 sm:rounded-3xl lg:h-96">
                  <Image
                    src="/marcelo-fuhr.jpg"
                    alt="Foto profissional de Marcelo Fuhr"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                {/* Card terminal — escondido no mobile */}
                <div className="hidden sm:block rounded-2xl border border-indigo-400/20 bg-slate-900/80 p-4 font-mono">
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-slate-300">
                    <code>{`// fase atual
const marcelo = {
  status: "construindo",
  foco: "sistemas + IA + negócio",
  modo: "aprender fazendo"
}`}</code>
                  </pre>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {focusItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-slate-300 sm:px-3 sm:py-1 sm:text-xs"
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

      {/* PROJETOS EM DESTAQUE */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Projetos em destaque
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Não é só estudo.{" "}
              <span className="text-indigo-300">É construção.</span>
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Cada projeto aqui representa um problema real que eu quis
              resolver. Entender o fluxo, organizar a solução e entregar
              algo funcional — é assim que eu aprendo.
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