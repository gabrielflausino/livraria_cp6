
import { useState } from "react";
import LivroCard from "../components/LivroCard";

function Pesquisa({ livros }) {
    const [pesquisa, setPesquisa] = useState("");

    const livrosFiltrados = livros.filter((livro) =>
        String(livro.titulo || "")
            .toLowerCase()
            .includes(pesquisa.toLowerCase())
    );

    return (
        <section className="animate-entrada">
            <div className="mb-10 text-center">
                <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                    Biblioteca Front-end
                </h1>

                <p className="text-slate-500">
                    Explore livros sobre desenvolvimento web e tecnologia.
                </p>
            </div>

            <div className="mx-auto mb-10 max-w-2xl">
                <input
                    type="text"
                    placeholder="🔎 Pesquise um livro pelo título..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white p-4 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            <p className="mb-6 text-slate-500">
                {livrosFiltrados.length} livros encontrados
            </p>

            {livrosFiltrados.length === 0 ? (
                <p className="py-16 text-center text-slate-500">
                    Nenhum livro encontrado para sua pesquisa.
                </p>
            ) : (
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {livrosFiltrados.map((livro, index) => (
                        <LivroCard
                            key={`${livro.titulo}-${index}`}
                            livro={livro}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Pesquisa;
