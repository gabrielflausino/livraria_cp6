
import { useState } from "react";
import LivroCard from "../components/LivroCard";

function Lancamentos({ livros }) {
    const [quantidade, setQuantidade] = useState(5);

    const livrosOrdenados = [...livros].sort(
        (a, b) => (Number(b.ano) || 0) - (Number(a.ano) || 0)
    );

    const livrosVisiveis = livrosOrdenados.slice(0, quantidade);

    function carregarMais() {
        setQuantidade((anterior) => anterior + 5);
    }

    return (
        <section className="animate-entrada">
            <div className="mb-10 text-center">
                <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                    🚀 Últimos Lançamentos
                </h1>

                <p className="text-slate-500">
                    Confira os livros mais recentes da biblioteca.
                </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {livrosVisiveis.map((livro, index) => (
                    <LivroCard
                        key={`${livro.titulo}-${index}`}
                        livro={livro}
                        novo={index < 5}
                    />
                ))}
            </div>

            {quantidade < livrosOrdenados.length && (
                <div className="mt-12 text-center">
                    <button
                        onClick={carregarMais}
                        className="rounded-xl bg-blue-700 px-8 py-3 font-bold text-white shadow-md transition hover:scale-105 hover:bg-blue-800"
                    >
                        Carregar mais livros
                    </button>
                </div>
            )}
        </section>
    );
}

export default Lancamentos;
