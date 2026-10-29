
import { Link } from "react-router-dom";

function Categorias({ livros }) {
    const categorias = [
        ...new Set(
            livros
                .flatMap((livro) =>
                    Array.isArray(livro.categoria)
                        ? livro.categoria
                        : [livro.categoria]
                )
                .filter(Boolean)
        ),
    ];

    return (
        <section className="animate-entrada">
            <div className="mb-10 text-center">
                <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                    📂 Categorias
                </h1>

                <p className="text-slate-500">
                    Escolha um assunto e encontre seus próximos livros.
                </p>
            </div>

            {categorias.length === 0 ? (
                <p className="text-center text-slate-500">
                    Nenhuma categoria disponível.
                </p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categorias.map((categoria) => (
                        <Link
                            key={categoria}
                            to={`/categorias/${encodeURIComponent(categoria)}`}
                            className="group rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-blue-700 hover:shadow-xl"
                        >
                            <div className="mb-4 text-5xl">📖</div>

                            <h2 className="text-xl font-bold text-blue-700 transition group-hover:text-white">
                                {categoria}
                            </h2>

                            <p className="mt-3 text-sm text-slate-500 group-hover:text-blue-100">
                                Explorar livros
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Categorias;
