import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <>
            <nav className={` fixed absolute top-0 left-0 w-full flex flex-row flex-wrap justify-between items-center px-10 py-4  text-black  z-50 ${isScrolled ? " bg-sky-900 shadow-lg" : "bg-tranparent"}`}>
                <div className="flex-1">
                    <h1 className="font-extrabold text-white italic text-2xl">
                        <span className="bg-red-800 px-1  font-mono text-4xl rounded-md rounded-br-4xl rounded-tr-xl">DR</span> AutoParts
                    </h1>
                </div>
                <div className="flex-1">
                    <ul className="flex items-center justify-center gap-6 px-6 py-3 bg-white rounded-md ">
                        <li className="border-b-2 border-transparent text-black 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-sky-900 hover:cursor-pointer">Home</li>
                        <li className="border-b-2 border-transparent text-black 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-sky-900 hover:cursor-pointer">Empresa</li>
                        <li className="border-b-2 border-transparent text-black 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-sky-900 hover:cursor-pointer">Produtos</li>
                        <li className="border-b-2 border-transparent text-black 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-sky-900 hover:cursor-pointer">Contato</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="flex gap-6 items-center justify-end">
                        <li  >
                            <button className="px-4 py-2  text-white border-b-2 border-transparent 
                            transition-all duration-300 ease-in-out cursor-pointer  hover:border-white">
                                Entrar
                            </button>
                        </li>
                        <li>
                            <div className="w-0.5 h-8 bg-white"></div>
                        </li>
                        <li>
                            <button className="px-4 py-2 text-white border-b-2 border-transparent 
                            transition-all duration-300 ease-in-out cursor-pointer hover:border-white">
                                Criar conta
                            </button>
                        </li>
                        {/* <li>
                            <div className="w-0.5 h-8 bg-white"></div>
                        </li>
                        <li>
                            <svg className="w-7 h-7 inline-block text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                            </svg>
                            <div className="inline-block"><p className="bg-gray-200 rounded-xl p-1 text-xs">154</p></div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar; 