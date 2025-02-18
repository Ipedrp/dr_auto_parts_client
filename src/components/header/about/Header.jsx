import img from "../../../assets/image/header/about.jpg";

const Header = () => {
    const links = [
        { name: 'Nossa história', href: '#' },
        { name: 'Qualidade garantida', href: '#' },
        { name: 'Nossos valores', href: '#' },
        { name: 'Equipe especializada', href: '#' },
    ];
    const stats = [
        { name: 'Anos de experiência', value: '25+' },
        { name: 'Colaboradores especializados', value: '150+' },
        { name: 'Clientes atendidos', value: '50.000+' },
        { name: 'Prêmios de excelência', value: '10+' },
    ];

    return (
        <div
            className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 bg-cover bg-no-repeat bg-[70%_top] md:bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Overlay para escurecer a imagem */}
            <div className="absolute inset-0 bg-black opacity-65"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Tradição e Qualidade
                    </h2>
                    <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
                        Há mais de 25 anos no mercado, a <strong>DR Autoparts</strong> se tornou referência no setor de autopeças, oferecendo qualidade, confiança e atendimento especializado. Contamos com uma equipe experiente e uma linha completa de produtos para garantir a melhor performance do seu veículo.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1">
                                <dt className="text-base text-gray-300">{stat.name}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Header;
