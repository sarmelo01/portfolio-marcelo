import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Marcelo Fuhr. Portfólio profissional.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="mailto:marcelofuhr.2023@gmail.com"
            className="transition hover:text-white"
          >
            E-mail
          </Link>

          <Link
            href="https://www.linkedin.com/in/marcelo-fuhr-86111a353/"
            target="_blank"
            className="transition hover:text-white"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/sarmelo01"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}