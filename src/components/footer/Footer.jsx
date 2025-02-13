const Footer = () => {
    return (
        <>


            <footer class="bg-sky-900  shadow-sm">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <h1 className="font-extrabold text-white italic text-2xl">
                                <span className="bg-red-800 px-1  font-mono text-4xl rounded-md rounded-br-4xl rounded-tr-xl">DR</span> AutoParts
                            </h1>
                        </div>
                        <ul class="flex flex-wrap gap-6 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="border-b-2 border-transparent text-white 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-white hover:cursor-pointer">Home</li>
                        <li className="border-b-2 border-transparent text-white 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-white hover:cursor-pointer">Empresa</li>
                        <li className="border-b-2 border-transparent text-white 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-white hover:cursor-pointer">Produtos</li>
                        <li className="border-b-2 border-transparent text-white 
                           transition-all duration-300 ease-in-out 
                           hover:border-b-2  hover:border-white hover:cursor-pointer">Contato</li>
                        </ul>
                    </div>
                    <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-white sm:text-center">© 2023 Dr AutoParts. Todos os direitos reservados.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer;