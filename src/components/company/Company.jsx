import home from "../../assets/image/header/home.png"


const Company = () => {
    return (
        <>
            <div className="w-vw p-5 sm:m-5 md:m-5 lg:m-1 flex flex-col lg:flex-row justify-center items-center rounded-10" >
                <div className="flex-1">
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-sky-900 font-bold sm:ml-5 md:ml-10">Especialista em <span className="text-red-900">peças automotivas</span> de qualidade!</h2>
                    <p className=" text-md text-gray-800 text-justify my-5 sm:ml-5 md:ml-10">Com sede em Feira de Santana-BA, a Dr. AutoParts é referência no fornecimento de peças automotivas para lojistas, oficinas e frotistas. Atendemos clientes em toda a região, oferecendo um amplo catálogo de produtos com qualidade garantida e um atendimento especializado para garantir a melhor experiência de compra</p>
                    <button className="sm:ml-5 md:ml-10 px-6 py-3 bg-sky-900 text-white font-semibold rounded-lg shadow-md hover:bg-sky-800 transition">
                        Saiba Mais
                    </button>
                </div>
                <div className=" flex-1 flex justify-center items-center mt-10 ">
                    <img
                        className="w-[98%] sm:w-[95%] md:w-[85%] lg:w-[80%] py-4 hover:scale-105 transition-all duration-300"
                        src={home}
                        alt=""
                    />

                </div>
            </div>
        </>
    )
}

export default Company

// style={{ backgroundImage: `url(${scribe})` }}