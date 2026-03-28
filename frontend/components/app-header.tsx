"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLinkClasses(isActive: boolean) {
  return [
    "rounded-lg px-3 py-2 text-sm transition",
    isActive
      ? "bg-cyan-500 text-slate-950 font-semibold"
      : "text-slate-200 hover:bg-white/10 hover:text-white",
  ].join(" ");
}

export default function AppHeader() {
  const pathname = usePathname();

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
          <Link href="/" className={getLinkClasses(pathname === "/")}>
            Home
          </Link>

          <Link
            href="/classificar"
            className={getLinkClasses(pathname === "/classificar")}
          >
            Classificar
          </Link>

          <Link
            href="/historico"
            className={getLinkClasses(pathname === "/historico")}
          >
            Histórico
          </Link>
        </nav>
      </div>
    </header>
  );
}