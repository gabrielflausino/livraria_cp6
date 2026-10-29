import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Pesquisa from "./assets/pages/Pesquisa";
import Lancamentos from "./assets/pages/Lancamentos";
import Categorias from "./assets/pages/Categorias";
import LivrosCategoria from "./assets/pages/LivrosCategoria";

const API_URL =
  "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json";

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarLivros() {
      try {
        const resposta = await fetch(API_URL);

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os livros.");
        }

        const dados = await resposta.json();

        const lista = Array.isArray(dados)
          ? dados
          : dados.livros;

        if (!Array.isArray(lista)) {
          throw new Error("Formato da API inválido.");
        }

        setLivros(lista);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarLivros();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-10">
          {carregando ? (
            <div className="flex min-h-80 items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
              <p className="ml-4">Carregando livros...</p>
            </div>
          ) : erro ? (
            <div className="rounded-xl bg-red-100 p-6 text-center text-red-700">
              {erro}
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Pesquisa livros={livros} />} />
              <Route
                path="/lancamentos"
                element={<Lancamentos livros={livros} />}
              />
              <Route
                path="/categorias"
                element={<Categorias livros={livros} />}
              />
              <Route
                path="/categorias/:categoria"
                element={<LivrosCategoria livros={livros} />}
              />
              <Route
                path="*"
                element={<h1 className="text-center text-2xl">Página não encontrada</h1>}
              />
            </Routes>
          )}
        </main>

        <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
          © 2026 Biblioteca Front-end | Projeto FIAP
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
