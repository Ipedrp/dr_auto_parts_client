import jante from "../../assets/image/product/janti.jpg";
import farol from "../../assets/image/product/farol.jpg";
import eixo from "../../assets/image/product/eixo.jpg";
import rolamento from "../../assets/image/product/rolamento.jpg";
const FeatureProduct = () => {

    const features = [
        { name: 'Fornecedor', description: 'Trabalhamos com os principais fabricantes do mercado automotivo, garantindo qualidade e procedência.' },
        { name: 'Materiais', description: 'Peças fabricadas com materiais resistentes e duráveis, como aço reforçado e ligas de alta performance.' },
        { name: 'Aplicação', description: 'Compatíveis com diversos modelos de veículos, atendendo às especificações técnicas de cada fabricante.' },
        { name: 'Durabilidade', description: 'Projetadas para oferecer resistência ao desgaste e alto desempenho em diferentes condições de uso.' },
        { name: 'Itens Inclusos', description: 'Muitos produtos acompanham kits completos para instalação, facilitando o uso imediato.' },
        { name: 'Garantia de Qualidade', description: 'Selecionamos peças de alta performance para proporcionar segurança e eficiência ao seu veículo.' },
    ];



    return (
        <div className="bg-white">
            <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 md:px-10 md:mx-10 lg:mx-5 lg:px-10">
                <div className="w-full"> {/* Alterei w-[98%] para w-full */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-sky-900 block">Informações <span className="text-red-900 block">Técnicas</span></h2>
                    <p className="mt-4 text-md text-gray-800">
                        Nossos produtos são fabricados por fornecedores confiáveis e atendem aos mais altos padrões do setor automotivo.
                        Oferecemos peças de qualidade para que seu veículo tenha sempre o melhor desempenho.
                    </p>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-sky-900 pt-4">
                                <dt className="text-xl text-sky-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-900">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        alt="Peça automotiva de alta qualidade."
                        src={jante}
                        className="rounded-2xl bg-gray-100 border border-sky-900 mx-auto"
                    />
                    <img
                        alt="Detalhes do acabamento resistente e design compatível."
                        src={farol}
                        className="rounded-2xl bg-gray-100 border border-sky-900 mx-auto"
                    />
                    <img
                        alt="Visão lateral mostrando encaixe perfeito para instalação."
                        src={rolamento}
                        className="rounded-2xl bg-gray-100 border border-sky-900 mx-auto"
                    />
                    <img
                        alt="Produto instalado e pronto para uso em veículo."
                        src={eixo}
                        className="rounded-2xl bg-gray-100 border border-sky-900 mx-auto"
                    />
                </div>
            </div>
        </div>

    );
}

export default FeatureProduct;
