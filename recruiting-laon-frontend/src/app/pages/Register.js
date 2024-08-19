import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import FormBox from "../components/FormBox/FormBox";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Logo from "../img/Logo.png";
import styles from "./styles/Register.module.css";
import { FaArrowLeft } from "react-icons/fa6"; import { useAuth } from "../Utils/Auth/AuthContext";
import { useEffect } from "react";
;

function Register() {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    //Verifica se o usuário está autenticado, se sim, redireciona para a página Home
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated]);

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

    return <>
        <Header links={links} />
        <FormBox>
            <h1 className="semibold24"> Cadastre-se </h1>
            <h2 className={`regular16 ${styles.subtitle}`} > Acompanhe os melhores filmes e séries. </h2>
            <Input type="text" placeholder="Nome completo" />
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <p className="regular12" style={{ width: '384px', color: 'var(--gray-500)', margin: '-30px 0 20px 0' }}>Ao clicar em <span className="semibold12">cadastrar</span>, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</p>
            <Button> Cadastrar </Button>
            <span className={`semibold16 ${styles.mobileLink}`}> <Link to='/login'> ENTRAR </Link> </span>
        </FormBox>
    </>;
}

export default Register;