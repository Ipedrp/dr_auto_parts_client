import { Target, Handshake, Eye } from "lucide-react";
import home from "../../assets/image/timeline/home.png"

const Timeline = () => {
    const items = [
        {
            title: "Missão",
            description:
                "Nossa missão é proporcionar soluções inovadoras e eficientes que agreguem valor aos nossos clientes e à sociedade.",
            icon: <Target className="w-4 h-4 text-white " />,
        },
        {
            title: "Valores",
            description:
                "Prezamos pela ética, compromisso, qualidade e inovação, garantindo sempre a melhor experiência para nossos clientes.",
            icon: <Handshake className="w-4 h-4 text-white " />,
        },
        {
            title: "Visão",
            description:
                "Ser referência no mercado, destacando-se pela excelência e impacto positivo nas vidas das pessoas.",
            icon: <Eye className="w-4 h-4 text-white" />,
        },
    ];

    return (
        <div className="flex w-vw justify-center items-center  m-5 sm:m-5 md:m-13 lg:m-10 ">
           {/* Imagem apenas para desktop */}
           <div className="w-full lg:w-1/2 flex justify-center hidden lg:flex">
                <img className="w-[95%] hover:scale-105 transition-all duration-300" src={home} alt="" />
            </div>
            <div className="flex-1">
                <ol className="relative border-s border-sky-900 p-5 m-5 sm:m-5 md:m-5 lg:m-10">
                    {items.map((item, index) => (
                        <li key={index} className="mb-10 ms-6 md:text-justify lg:text-justify">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-900 rounded-full -start-3 ring-8 ring-white  ">
                                {item.icon}
                            </span>
                            <h3 className="mb-1 text-xl font-semibold text-sky-900 ">
                                {item.title}
                            </h3>
                            <p className="text-base font-normal text-md text-gray-800 ">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Timeline;
