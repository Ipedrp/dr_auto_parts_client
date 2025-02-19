import { Outlet, useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile";
import Footer from "../components/footer/Footer";

const Layout = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 930px)" });
    const location = useLocation(); 

    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {!isLoginPage && (isMobile ? <NavbarMobile /> : <Navbar />)}

            <main>
                <Outlet /> 
            </main>

            {!isLoginPage && <Footer />}
        </>
    );
};

export default Layout;
