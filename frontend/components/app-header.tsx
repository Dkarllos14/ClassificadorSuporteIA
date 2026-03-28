import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            ClassificadorSuporteIA
          </p>
          <p className="text-xs text-slate-400">
            Plataforma inteligente para triagem de chamados
          </p>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/classificar"
            className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Classificar
          </Link>

          <Link
            href="/historico"
            className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            Histórico
          </Link>
        </nav>
      </div>
    </header>
  );
}