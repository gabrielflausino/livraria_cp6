
import { useState } from "react";

function LivroCard({ livro, novo = false }) {
    const [expandido, setExpandido] = useState(false);

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {novo && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow">
                    Novo lançamento
                </span>
            )}

            <div className="flex h-64 items-center justify-center bg-slate-100 p-5">
                <img
                    src={livro.imagem}
                    alt={`Capa do livro ${livro.titulo}`}
                    loading="lazy"
                    className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                    {livro.titulo}
                </h3>

                <p
                    className={`mb-5 text-sm leading-6 text-slate-600 ${expandido ? "" : "line-clamp-3"
                        }`}
                >
                    {livro.descricao || "Descrição não disponível."}
                </p>

                <button
                    onClick={() => setExpandido(!expandido)}
                    className="mt-auto rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-800"
                >
                    {expandido ? "Mostrar menos" : "Ler descrição"}
                </button>
            </div>
        </article>
    );
}

export default LivroCard;
