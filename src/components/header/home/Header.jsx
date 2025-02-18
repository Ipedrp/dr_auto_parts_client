import img from "../../../assets/image/header/home.png";

const Header = () => {
    return (
        <section
            className=" flex justify-center items-center relative w-full h-[85vh] bg-cover bg-top bg-no-repeat z-10"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Overlay para escurecer a imagem */}
            <div className="absolute inset-0 bg-black opacity-65"></div>

            {/* Conteúdo acima do overlay */}
            <div className="relative px-4 mx-auto max-w-screen-xl text-center">
                <h1 className="mb-4 text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                    Peças de Qualidade para o Seu Veículo
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Oferecemos peças automotivas de alta qualidade para manter seu carro sempre em perfeito estado.  
                    Encontre tudo o que precisa com preços justos e entrega rápida!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Comprar Agora
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-sky-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Conheça a Empresa
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;
