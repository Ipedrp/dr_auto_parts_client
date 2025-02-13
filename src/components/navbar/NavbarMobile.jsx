import { useEffect, useState, useRef } from "react";

const NavbarMobile = () => {
    const [active, setActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Referências para a navbar e o menu dropdown
    const menuRef = useRef(null);
    const navbarRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            // Verifica se o clique aconteceu fora da navbar e do menu
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setActive(false); // Fecha o menu
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("click", handleClickOutside); // Adiciona o evento de clique fora

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("click", handleClickOutside); // Remove o evento ao desmontar
        };
    }, []);

    return (
        <>
            <nav
                ref={navbarRef} // Referência para a navbar
                className={`fixed top-0 left-0 w-full flex flex-row flex-wrap justify-between items-center px-10 py-4 text-white z-50 ${active || isScrolled ? "bg-sky-900 shadow-lg" : "bg-transparent"
                    }`}
            >

                <div className="flex-1">
                    <h1 className="font-extrabold text-white italic text-xl">
                        <span className="bg-red-800 px-1 font-mono text-3xl rounded-md rounded-br-4xl rounded-tr-xl">
                            DR
                        </span>{" "}
                        AutoParts
                    </h1>
                </div>
                <button onClick={() => setActive(!active)} className="focus:outline-none">
                    {active ? (
                        <svg
                            className="w-6 h-6 text-white "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Dropdown menu */}
            {active && (
                <ul ref={menuRef} className="fixed top-16 left-0 w-2/3 h-full bg-sky-900 text-white py-4 px-4 space-y-4 z-40">

                    <li className="text-white px-5 text-lg">Home</li>
                    <li className="text-white px-5 text-lg">Empresa</li>
                    <li className="text-white px-5 text-lg">Produtos</li>
                    <li className="text-white px-5 text-lg">Contato</li>

                    <li className="px-5">
                        <button className=" w-full bg-white text-sky-900 border-solid border-white border-[2px] py-1 rounded-md">Entrar</button>
                    </li >
                    <li className="px-5">
                        <button className="w-full border-solid border-white border-[2px] py-1 rounded-md">Criar Conta</button>
                    </li>

                </ul>
            )}
        </>
    );
};

export default NavbarMobile;
