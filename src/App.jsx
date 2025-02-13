
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import NavbarMobile from './components/navbar/NavbarMobile'
import Partners from './components/partners/Partners'
import Company from './components/company/Company'
import Timeline from './components/timeline/Timeline'
import Parallax from './components/parallax/Parallax'
import FeatureProduct from './components/featureProduct/FeatureProduct'
import Footer from './components/footer/Footer'
import { useMediaQuery } from 'react-responsive'


function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 930px)'
  })

  return (
    <>
      {
        isMobile ? <NavbarMobile /> : <Navbar />
      }
      <Header />
      <Company/>
      <Timeline/>
      <Parallax/>
      <FeatureProduct/>
      <Partners />
      <Footer/>
    </>
  )
}

export default App
