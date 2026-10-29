
import { Link, useParams } from "react-router-dom";
import LivroCard from "../components/LivroCard";

function LivrosCategoria({ livros }) {
    const { categoria } = useParams();
    const nomeCategoria = categoria || "";

    const livrosFiltrados = livros.filter((livro) => {
        const categorias = Array.isArray(livro.categoria)
            ? livro.categoria
            : [livro.categoria];

        return categorias.some(
            (item) =>
                String(item).toLowerCase() === nomeCategoria.toLowerCase()
        );
    });

    return (
        <section className="animate-entrada">
            <Link
                to="/categorias"
                className="mb-8 inline-block font-semibold text-blue-700 hover:underline"
            >
                ← Voltar para categorias
            </Link>

            <div className="mb-10 text-center">
                <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                    {nomeCategoria}
                </h1>

                <p className="text-slate-500">
                    {livrosFiltrados.length} livros encontrados nesta categoria.
                </p>
            </div>

            {livrosFiltrados.length === 0 ? (
                <p className="text-center text-slate-500">
                    Nenhum livro encontrado nesta categoria.
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

export default LivrosCategoria;
