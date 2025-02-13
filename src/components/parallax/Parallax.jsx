import teste from "../../assets/image/parallax/car.jpg";

const Parallax = () => {
    return (
        <div
            className="h-[70vh] md:h-[50vh] lg:h-[70vh] w-[98.8dvw] flex items-center justify-start bg-fixed bg-cover bg-right-top md:bg-center lg:bg-rigth-top bg-no-repeat relative"
            style={{ backgroundImage: `url(${teste})` }}
        >
            <div className="absolute inset-0 bg-sky-900/45"></div>

            <div className="relative pl-10 ">
                <h1 className="font-bold">
                    <span className="italic text-white opacity-100 text-5xl sm:text-xl md:text-5xl lg:text-5xl  block">A ESTRADA</span>
                    <span className="italic text-white opacity-75 text-6xl sm:text-2xl md:text-6xl lg:text-6xl  block">É O NOSSO</span>
                    <span className="italic text-white opacity-90 text-7xl sm:text-3xl md:text-7xl lg:text-7xl  block">DESTINO</span>
                </h1>
            </div>
        </div>
    );
};

export default Parallax;
