"use client";

import { useState } from "react";

type ResultadoClassificacao = {
  categoria: string;
  prioridade: string;
  impacto: string;
  solucao: string;
};

export default function Home() {
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [resultado, setResultado] = useState<ResultadoClassificacao | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleClassificar = async () => {
    setErro("");
    setResultado(null);

    if (!assunto.trim() || !descricao.trim()) {
      setErro("Preencha o assunto e a descrição.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://classificadorsuporteia.onrender.com/classificar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            assunto,
            descricao,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Erro ao classificar chamado.");
      }

      setResultado(data);
    } catch (error) {
      const mensagem =
        error instanceof Error ? error.message : "Erro inesperado.";
      setErro(mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            ClassificadorSuporteIA
          </h1>
          <p className="mt-2 text-slate-600">
            Classifique chamados com IA usando sua API em produção.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Novo chamado
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Assunto
              </label>
              <input
                type="text"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Ex: Erro de login no ERP"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Descrição
              </label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva o problema do usuário..."
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleClassificar}
              disabled={loading}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Classificando..." : "Classificar com IA"}
            </button>

            {erro && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                {erro}
              </div>
            )}
          </div>
        </section>

        {resultado && (
          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Resultado da classificação
            </h2>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Categoria</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {resultado.categoria}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Prioridade</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {resultado.prioridade}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Impacto</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {resultado.impacto}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Solução sugerida</p>
              <p className="mt-1 text-slate-900">{resultado.solucao}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}