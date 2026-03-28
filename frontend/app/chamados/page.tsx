"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Chamado = {
  id: number;
  assunto: string;
  descricao: string;
  categoria: string;
  prioridade: string;
  impacto: string;
  solucao: string;
};

const LIMIT = 5;

function getPrioridadeClasses(prioridade: string) {
  switch (prioridade) {
    case "BAIXA":
      return "bg-green-100 text-green-800";
    case "MEDIA":
      return "bg-yellow-100 text-yellow-800";
    case "ALTA":
      return "bg-orange-100 text-orange-800";
    case "CRITICA":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getImpactoClasses(impacto: string) {
  switch (impacto) {
    case "BAIXO":
      return "bg-green-100 text-green-800";
    case "MEDIO":
      return "bg-yellow-100 text-yellow-800";
    case "ALTO":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function ChamadosPage() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [categoria, setCategoria] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const buscarChamados = async () => {
      setLoading(true);
      setErro("");

      try {
        const params = new URLSearchParams();

        if (categoria) {
          params.append("categoria", categoria);
        }

        if (prioridade) {
          params.append("prioridade", prioridade);
        }

        params.append("limit", String(LIMIT));
        params.append("offset", String((pagina - 1) * LIMIT));

        const url = `https://classificadorsuporteia.onrender.com/chamados?${params.toString()}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro ao buscar chamados.");
        }

        const data = await response.json();
        setChamados(data);
      } catch (error) {
        console.error("Erro ao buscar chamados:", error);
        setErro("Não foi possível carregar os chamados.");
      } finally {
        setLoading(false);
      }
    };

    buscarChamados();
  }, [categoria, prioridade, pagina]);

  useEffect(() => {
    setPagina(1);
  }, [categoria, prioridade]);

  const metricas = useMemo(() => {
    const total = chamados.length;
    const prioridadeAltaOuCritica = chamados.filter(
      (chamado) =>
        chamado.prioridade === "ALTA" || chamado.prioridade === "CRITICA"
    ).length;
    const categoriaAcesso = chamados.filter(
      (chamado) => chamado.categoria === "ACESSO"
    ).length;

    return {
      total,
      prioridadeAltaOuCritica,
      categoriaAcesso,
    };
  }, [chamados]);

  const podeAvancar = chamados.length === LIMIT;
  const podeVoltar = pagina > 1;

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Histórico de Chamados
            </h1>
            <p className="mt-1 text-slate-600">
              Visualize os chamados classificados pela IA.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
          >
            ← Voltar
          </Link>
        </div>

        {!loading && !erro && (
          <section className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Chamados nesta página</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {metricas.total}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Alta / Crítica</p>
              <p className="mt-2 text-3xl font-bold text-orange-600">
                {metricas.prioridadeAltaOuCritica}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Categoria ACESSO</p>
              <p className="mt-2 text-3xl font-bold text-blue-600">
                {metricas.categoriaAcesso}
              </p>
            </div>
          </section>
        )}

        <section className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Filtros
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Categoria
              </label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
              >
                <option value="">Todas</option>
                <option value="ACESSO">ACESSO</option>
                <option value="REDE">REDE</option>
                <option value="HARDWARE">HARDWARE</option>
                <option value="SOFTWARE">SOFTWARE</option>
                <option value="EMAIL">EMAIL</option>
                <option value="SEGURANCA">SEGURANCA</option>
                <option value="OUTROS">OUTROS</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Prioridade
              </label>
              <select
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
              >
                <option value="">Todas</option>
                <option value="BAIXA">BAIXA</option>
                <option value="MEDIA">MEDIA</option>
                <option value="ALTA">ALTA</option>
                <option value="CRITICA">CRITICA</option>
              </select>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-600">
              Carregando chamados... na primeira requisição o servidor pode
              levar alguns segundos para responder.
            </p>
          </div>
        ) : erro ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
            {erro}
          </div>
        ) : chamados.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-slate-600">
              Nenhum chamado encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-4">
              {chamados.map((chamado) => (
                <div
                  key={chamado.id}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {chamado.assunto}
                      </h2>
                      <p className="mt-2 text-slate-600">{chamado.descricao}</p>
                    </div>

                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                      #{chamado.id}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      📂 {chamado.categoria}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 font-medium ${getPrioridadeClasses(
                        chamado.prioridade
                      )}`}
                    >
                      ⚡ {chamado.prioridade}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 font-medium ${getImpactoClasses(
                        chamado.impacto
                      )}`}
                    >
                      📊 {chamado.impacto}
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Solução sugerida</p>
                    <p className="mt-1 text-slate-900">{chamado.solucao}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
              <button
                onClick={() => setPagina((prev) => prev - 1)}
                disabled={!podeVoltar}
                className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ← Anterior
              </button>

              <span className="text-sm font-medium text-slate-700">
                Página {pagina}
              </span>

              <button
                onClick={() => setPagina((prev) => prev + 1)}
                disabled={!podeAvancar}
                className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Próxima →
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}