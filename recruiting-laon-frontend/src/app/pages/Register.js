import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import FormBox from "../components/FormBox/FormBox";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Logo from "../img/Logo.png";
import styles from "./styles/Register.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useAuth } from "../Utils/Auth/AuthContext";
import { useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import Alert from "../components/Alert/Alert";


function Register() {

    const [data, setData] = useState({});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    //Verifica se o usuário está autenticado, se sim, redireciona para a página de Home
    const {isAuthenticated, signin} = useAuth();
    if(isAuthenticated){
        //eslint-disable-next-line
        navigate('/home');
    };

    //Estilo a ser aplicado na div que contém o ícone e o texto de "Voltar"
    const style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    //Links que serão exibidos no Header
    const links = [
        { href: "/", content: <div style={style}> <Icon> <FaArrowLeft /> </Icon> <span className="element-hidden">VOLTAR</span> </div> },
        { href: "/", content: <img src={Logo} alt="Logo LaonLabs" /> },
        { href: "/", content: <span className="element-hidden"> ENTRAR </span> },
    ];

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosInstance.post(Constants.baseUrl + '/users', data)
        .then((response) => {
            if(response.status === 201){
                signin({email: data.email, password: data.password});
                window.location.href = '/login';
            }
        })
        .catch(() => {
            setMessage("Erro ao cadastrar usuário. Tente novamente!");
        });
        
    }

    

    return <>
        <Header links={links} />
        <FormBox>

            {message && <Alert message={message}/> }

            <h1 className="semibold24"> Cadastre-se </h1>
            <h2 className={`regular16 ${styles.subtitle}`} > Acompanhe os melhores filmes e séries. </h2>

            <Input type="text" name="name" handleChange={handleChange} placeholder="Nome completo" />
            <Input type="text" name="email" handleChange={handleChange} placeholder="Email" />
            <Input type="password" name="password" handleChange={handleChange} placeholder="Senha" />

            <p className="regular12" style={{ width: '384px', color: 'var(--gray-500)', margin: '-30px 0 20px 0' }}>Ao clicar em <span className="semibold12">cadastrar</span>, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</p>

            <Button handleSubmit={handleSubmit}> Cadastrar </Button>

            <span className={`semibold16 ${styles.mobileLink}`}> <Link to='/login'> ENTRAR </Link> </span>
        </FormBox>
    </>;
}

export default Register;