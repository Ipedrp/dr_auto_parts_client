import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ford from "../../assets/image/partners/ford.jpg"
import honda from "../../assets/image/partners/honda.jpg"
import nissan from "../../assets/image/partners/nissan.png"
import toyota from "../../assets/image/partners/toyota.png"
import volkswagen from "../../assets/image/partners/volkswagen.jpg"
import scania from "../../assets/image/partners/scania.png"
import chevrolet from "../../assets/image/partners/chevrolet.png"
import '../../styles/partners/partners.css'

const Partners = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <section className="bg-white px-4  sm:px-6 md:px-10 md:mx-10 lg:mx-5 ">
           <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-sky-900 block">Nossos <span className="text-red-900 block">Parceiros</span></h2>
            {/* <div className="w-vw h-[2px] bg-sky-900 ml-5 sm:ml-5 md:ml-10"></div> */}

            <div className="embla my-10" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide"><img src={ford} alt="" /></div>
                    <div className="embla__slide"><img src={honda} alt="" /></div>
                    <div className="embla__slide"><img src={nissan} alt="" /></div>
                    <div className="embla__slide"><img src={scania} alt="" /></div>
                    <div className="embla__slide"><img src={toyota} alt="" /></div>
                    <div className="embla__slide"><img src={chevrolet} alt="" /></div>
                    <div className="embla__slide"><img src={volkswagen} alt="" /></div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
