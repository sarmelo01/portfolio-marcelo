import Link from "next/link"

import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <section className="mx-auto max-w-6xl w-full flex-1 px-6 py-20 sm:py-28">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300 mb-3">
            Currículo
          </p>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Direto ao ponto.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 max-w-xl">
            O PDF reúne minhas experiências, contatos e foco profissional
            em uma versão objetiva para análise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col gap-4">

            {/* Botão de download — CTA principal */}
            <Link
              href="/curriculo-marcelo-fuhr.pdf"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-indigo-400/40 bg-indigo-500/15 px-6 py-5 transition hover:bg-indigo-500/25 hover:border-indigo-400/60 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-1">
                  Download disponível
                </p>
                <p className="text-lg font-semibold text-white">
                  Currículo em PDF
                </p>
                <p className="text-sm text-slate-400 mt-0.5">
                  curriculo-marcelo-fuhr.pdf
                </p>
              </div>
              <span className="text-indigo-300 text-2xl transition group-hover:translate-y-1 duration-200">↓</span>
            </Link>

            {/* Resumo rápido */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                Resumo rápido
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <p className="text-sm leading-6 text-slate-300">
                    Tecnologia, suporte técnico e sistemas web
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <p className="text-sm leading-6 text-slate-300">
                    Experiência com atendimento, CS, suporte e processos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <p className="text-sm leading-6 text-slate-300">
                    Projetos próprios e evolução prática contínua
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col gap-3">

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

            {/* WhatsApp */}
            <Link
              href="https://wa.me/5567991369906"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 transition hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:scale-[1.02] active:scale-[0.98] duration-200 group"
            >
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-sm font-medium text-emerald-300">67 99136-9906</p>
              </div>
              <span className="text-slate-500 text-sm transition group-hover:translate-x-1 group-hover:text-emerald-300 duration-200">→</span>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}