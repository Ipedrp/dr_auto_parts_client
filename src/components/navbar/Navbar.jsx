import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"; // Importando useLocation

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // Obtendo a URL atual

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Verifica se a rota atual é a tela de login
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full flex flex-row flex-wrap justify-between items-center px-10 py-4 z-50 
                ${isLoginPage ? "bg-sky-900 shadow-lg" : isScrolled ? "bg-sky-900 shadow-lg" : "bg-transparent"}`}
            >
                <div className="flex-1">
                    <h1 className="font-extrabold text-white italic text-2xl">
                        <span className="bg-red-800 px-1 font-mono text-4xl rounded-md rounded-br-4xl rounded-tr-xl">
                            DR
                        </span>{" "}
                        AutoParts
                    </h1>
                </div>
                <div className="flex-1">
                    <ul className="flex items-center justify-center gap-6 px-6 py-3 bg-white rounded-md">
                        <li className="border-b-2 border-transparent text-black transition-all duration-300 ease-in-out hover:border-b-2 hover:border-sky-900 hover:cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="border-b-2 border-transparent text-black transition-all duration-300 ease-in-out hover:border-b-2 hover:border-sky-900 hover:cursor-pointer">
                            <Link to="/empresa">Empresa</Link>
                        </li>
                        <li className="border-b-2 border-transparent text-black transition-all duration-300 ease-in-out hover:border-b-2 hover:border-sky-900 hover:cursor-pointer">
                            Produtos
                        </li>
                        <li className="border-b-2 border-transparent text-black transition-all duration-300 ease-in-out hover:border-b-2 hover:border-sky-900 hover:cursor-pointer">
                            Contato
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="flex gap-6 items-center justify-end">
                        <li>
                            <button className="px-4 py-2 text-white border-b-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-white">
                                <Link to="/login">Entrar</Link>
                            </button>
                        </li>
                        <li>
                            <div className="w-0.5 h-8 bg-white"></div>
                        </li>
                        <li>
                            <button className="px-4 py-2 text-white border-b-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-white">
                                Criar conta
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
