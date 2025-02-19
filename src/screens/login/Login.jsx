import Form from "../../components/form/login/Form";
import img from "../../assets/image/header/home.png";

const Login = () => {
    return (

        <section className="w-full h-screen flex items-center justify-center bg-white bg-cover bg-no-repeat "style={{ backgroundImage: `url(${img})` }} >

            <Form />
        </section>
    )
}

export default Login;