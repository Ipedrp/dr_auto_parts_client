    import { CircleCheck } from 'lucide-react';
    import { useState, useContext } from 'react';
    import {Link} from "react-router";
    import { AuthContext } from "../../../context/auth/AuthContext";

    const Form = () => {

        const { login } = useContext(AuthContext);


        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        };

        const handleSubmit = async () => {
            // e.preventDefault(); 

            console.log("dados recebidos foram esse: ", formData);
            const response = await login(formData.email, formData.password);
            // try {
            //     const response = await axios.post('/api/endpoint', formData); 
            //     console.log('Resposta do servidor:', response.data);
            // } catch (error) {
            //     console.error('Erro ao enviar dados:', error);
            // }
        };

        return (
            <div className="w-[90%] h-[90%] md:h-[60%] lg:h-[90%] md:p-10 md:bg-black/55 flex flex-col md:flex-row items-center justify-center space-x-8 rounded-4xl">
                {/* Parte do Texto */}
                <div className="hidden md:block w-1/2">
                    <h1 className="font-extrabold text-white italic text-2xl mb-7">
                        <span className="bg-red-800 px-1 font-mono text-4xl rounded-md rounded-br-4xl rounded-tr-xl">
                            DR
                        </span>{" "}
                        AutoParts
                    </h1>
                    <ul className="space-y-7 mb-12">
                        <li className="flex items-center text-lg text-white">
                            <CircleCheck className="text-blue-500 mr-2" size={20} /> Produtos de alta qualidade e durabilidade.
                        </li>
                        <li className="flex items-center text-lg text-white">
                            <CircleCheck className="text-blue-500 mr-2" size={20} /> Grande diversidade de peças para seu veículo.
                        </li>
                        <li className="flex items-center text-lg text-white">
                            <CircleCheck className="text-blue-500 mr-2" size={20} /> Garantia e suporte técnico especializado.
                        </li>
                        <li className="flex items-center text-lg text-white">
                            <CircleCheck className="text-blue-500 mr-2" size={20} /> Credibilidade e confiança no mercado.
                        </li>
                    </ul>
                    {/* Navbar adicional */}
                    <nav>
                        <ul className="flex justify-around text-white text-lg font-semibold">
                            <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Home</Link></li>
                            <li className="hover:text-gray-300 cursor-pointer"><Link to="/empresa">Empresa</Link></li>
                            <li className="hover:text-gray-300 cursor-pointer">Produtos</li>
                            <li className="hover:text-gray-300 cursor-pointer">Contato</li>
                        </ul>
                    </nav>
                </div>

                {/* Parte do Formulário */}
                <div className="w-full md:w-1/2 bg-black/65 md:bg-white px-5 py-10 md:p-14 rounded-2xl shadow-lg">
                    <h1 className="font-extrabold text-white italic text-2xl mb-7 text-center md:hidden">
                        <span className="bg-red-800 text-white px-1 font-mono text-4xl rounded-md rounded-br-4xl rounded-tr-xl">
                            DR
                        </span>
                        AutoParts
                    </h1>
                    <h2 className="hidden md:block text-3xl font-bold text-sky-900 mb-6 text-center">Bem Vindo</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white md:dark:text-black dark:border-gray-600 dark:focus:border-sky-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                                onChange={handleChange}

                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-sky-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                E-mail
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-7 group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white md:dark:text-black dark:border-gray-600 dark:focus:border-sky-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-sky-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Senha
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-7 group">
                            <p className="text-gray-600 text-sm">
                                Não tem conta ?
                                <span className=" hover: text-sky-900 hover:underline hover:cursor-pointer ml-2">
                                    Criar conta
                                </span>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-900 dark:hover:bg-sky-700 dark:focus:ring-blue-800"
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    export default Form;
