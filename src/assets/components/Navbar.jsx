
import { NavLink } from "react-router-dom";

function Navbar() {
    const links = [
        { nome: "Pesquisar", caminho: "/" },
        { nome: "Lançamentos", caminho: "/lancamentos" },
        { nome: "Categorias", caminho: "/categorias" },
    ];

    return (
        <header className="bg-blue-700 text-white shadow-lg">
            <nav className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row">
                <NavLink to="/" className="text-2xl font-extrabold">
                    📚 DevBooks
                </NavLink>

                <div className="flex flex-wrap justify-center gap-3">
                    {links.map((link) => (
                        <NavLink
                            key={link.caminho}
                            to={link.caminho}
                            end={link.caminho === "/"}
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-2 font-medium transition-all duration-300 hover:bg-blue-500 ${isActive ? "bg-white text-blue-700" : "text-white"
                                }`
                            }
                        >
                            {link.nome}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
