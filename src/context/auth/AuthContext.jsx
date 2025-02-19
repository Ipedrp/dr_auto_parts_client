import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("authorization") || "");

    useEffect(() => {
        if (token) {
            localStorage.setItem("authorization", token);
        } else {
            localStorage.removeItem("authorization");
        }
    }, [token]);

    const login = async (email, password) => {
        console.log("Tentando login com os dados context: ", { email, password }); // Log para verificar os dados antes do envio

        try {
            const response = await axios.post("https://apianjobom.victordev.shop/admin/auth", { email, password }, {
                headers: { "Content-Type": "application/json" }
            });

            if (response.status === 200) {
                setUser(response.data.user || {});
                setToken(response.data.token);
                return { success: true };
            }
        } catch (error) {
            console.error("Erro no login context:", error);  // Log de erro
            if (error.response) {
                return { success: false, status: error.response.status, message: "E-mail ou senha inválidos." };
            } else {
                return { success: false, message: "Erro inesperado. Tente novamente." };
            }
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
