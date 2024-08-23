import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import FormBox from "../components/FormBox/FormBox";
import Input from "../components/Input/Input";
import styles from "./styles/Register.module.css";
import { useAuth } from "../Utils/Auth/AuthContext";
import { useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import Alert from "../components/Alert/Alert";
import HeaderBetter from "../components/Header/HeaderBetter";


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

    //Função que atualiza o estado do formulário
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //Função que envia os dados do formulário para a API
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
        <HeaderBetter />
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