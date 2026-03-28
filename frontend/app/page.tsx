import Link from "next/link";
import AppHeader from "../components/app-header";

export default function HomePage() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex max-w-7xl flex-col px-6 py-12 md:px-10 lg:px-12">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              ClassificadorSuporteIA
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Classificação inteligente de chamados com IA
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Plataforma full stack desenvolvida para automatizar a triagem de
              chamados de suporte técnico. O sistema utiliza Inteligência Artificial
              para classificar solicitações, definir prioridade, identificar impacto
              e sugerir uma solução inicial, trazendo mais velocidade, padronização
              e apoio operacional para ambientes de atendimento.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Sistema full stack com IA
              </span>

              <h2 className="mt-6 text-2xl font-semibold text-white md:text-4xl">
                Um projeto prático para transformar triagem manual em processo inteligente.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                O projeto integra backend em FastAPI, classificação automática com
                Google Gemini, persistência em banco SQLite e frontend em Next.js
                com Tailwind, servindo como demonstração real de aplicação de IA em
                suporte técnico e service desk.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/classificar"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Classificar Chamado
                </Link>

                <Link
                  href="/historico"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Ver Histórico
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Classificação padronizada
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reduz inconsistências na triagem com definição automatizada de
                  categoria, prioridade e impacto.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Histórico operacional
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Permite consultar chamados processados, filtros e indicadores
                  visuais para análise da operação.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-cyan-300">Backend</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                API em FastAPI com endpoints para classificação individual, em lote,
                consulta, filtros e paginação.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-cyan-300">
                Inteligência Artificial
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Integração com Google Gemini para apoiar a tomada de decisão e
                acelerar a triagem de chamados.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-cyan-300">Frontend</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Interface moderna em Next.js preparada para evoluir como produto
                profissional com experiência SaaS.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}