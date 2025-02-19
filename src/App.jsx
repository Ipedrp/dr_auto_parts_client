import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Login from "./screens/login/Login";
import { AuthProvider } from "./context/auth/AuthContext";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="empresa" element={<About />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
