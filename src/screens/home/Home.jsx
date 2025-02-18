import Header from "../../components/header/home/Header";
import Timeline from "../../components/timeline/Timeline";
import Company from "../../components/company/Company";
import Parallax from "../../components/parallax/Parallax";
import FeatureProduct from "../../components/featureProduct/FeatureProduct";
import Partners from "../../components/partners/Partners";

const Home = () => {
    return (
        <>
            <Header />
            <Company />
            <Timeline />
            <Parallax />
            <FeatureProduct />
            <Partners />
        </>
    )
}

export default Home;