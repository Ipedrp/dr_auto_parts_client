import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./screens/home/Home";
import About from "./screens/about/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="empresa" element={<About />} />
            {/* <Route path="contato" element={<Contato />} />  */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
