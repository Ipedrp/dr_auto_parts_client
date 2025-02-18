import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";
import { useMediaQuery } from 'react-responsive'
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile"

const Layout = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 930px)'
    })

    return (
        <>
            {
                isMobile ? <NavbarMobile /> : <Navbar />
            }
            <main>
                <Outlet /> {/* Renderiza a página ativa */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
