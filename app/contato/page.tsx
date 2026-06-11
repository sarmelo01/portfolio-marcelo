import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-6xl w-full flex-1 px-6 py-20 sm:py-28">

        {/* Grid desktop: 2 colunas / mobile: 1 coluna */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:items-start">

          {/* COLUNA ESQUERDA — título + contexto */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300 mb-3">
              Contato
            </p>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              Vamos construir algo{" "}
              <span className="text-indigo-300">ou conversar</span>{" "}
              sobre uma oportunidade?
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Estou aberto a vagas, freelas, projetos e conversas profissionais
              em tecnologia, suporte, automações e soluções digitais.
            </p>

            {/* Bloco de destaque */}
            <div className="mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.07] px-6 py-5">
              <p className="text-sm leading-7 text-slate-300">
                Me chame se você procura alguém com{" "}
                <span className="text-indigo-300 font-medium">iniciativa</span>,{" "}
                <span className="text-indigo-300 font-medium">visão prática</span> e{" "}
                <span className="text-indigo-300 font-medium">energia para resolver problemas de verdade</span>.
                Prefiro uma conversa direta a um processo longo sem retorno.
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA — cards de contato */}
          <div className="flex flex-col gap-3">

            {/* WhatsApp — destaque */}
            <Link
              href="https://wa.me/5567991369906"
              target="_blank"
              className="flex items-center justify-between w-full rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-5 transition hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-1">
                  Resposta mais rápida
                </p>
                <p className="text-lg font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400 mt-0.5">67 99136-9906</p>
              </div>
              <span className="text-emerald-300 text-xl transition group-hover:translate-x-1 duration-200">→</span>
            </Link>

            {/* E-mail */}
            <Link
              href="mailto:marcelofuhr.2023@gmail.com"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">E-mail</p>
                <p className="text-sm font-medium text-indigo-300 break-all">marcelofuhr.2023@gmail.com</p>
              </div>
              <span className="text-slate-500 text-sm transition group-hover:translate-x-1 group-hover:text-indigo-300 duration-200">→</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/marcelo-fuhr-86111a353/"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-sm font-medium text-indigo-300">marcelo-fuhr-86111a353</p>
              </div>
              <span className="text-slate-500 text-sm transition group-hover:translate-x-1 group-hover:text-indigo-300 duration-200">→</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/sarmelo01"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-sm font-medium text-indigo-300">github.com/sarmelo01</p>
              </div>
              <span className="text-slate-500 text-sm transition group-hover:translate-x-1 group-hover:text-indigo-300 duration-200">→</span>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}