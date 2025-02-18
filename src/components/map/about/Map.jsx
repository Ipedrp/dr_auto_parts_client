const Map = () => {
    return (
        <section className="bg-white w-[90%] md:w-[80%] lg:w-[70%] mx-auto my-30 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-sky-900 block mb-4">
                Onde
                <span className="text-red-900 block">Estamos</span>
            </h2>
            <iframe 
                className="w-[100%] h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.17761570171!2d-38.94334272517166!3d-12.23625008801564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714390074fd8281%3A0xb8af2a81cb2b6322!2sDR%20AUTO%20PARTS%20DISTRIBUIDORA!5e0!3m2!1spt-BR!2sbr!4v1739890740213!5m2!1spt-BR!2sbr" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Map;
