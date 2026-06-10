import Link from "next/link";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Currículo", href: "/curriculo" },
  { label: "Certificados", href: "/certificados" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-sm font-bold text-indigo-200 shadow-glow">
            MF
          </div>

          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-white">
              Marcelo Fuhr
            </p>
            <p className="text-xs text-slate-400">Portfólio profissional</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://wa.me/5567991369906"
          target="_blank"
          className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
        >
          WhatsApp
        </Link>
      </div>
    </header>
  );
}