import Header from "../components/header/Header";
import Icon from "../components/Icon/Icon";
import Logo from "../img/Logo.png";
import { FaArrowLeft } from "react-icons/fa6";

function Register() {

    //Estilo a ser aplicado na div que contém o ícone e o texto de "Voltar"
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "120px",
    };

    //Links que serão exibidos no Header
    const links = [
        { href: "/", content: <div style={styles}> <Icon> <FaArrowLeft /> </Icon> VOLTAR </div> },
        { href: "/", content: <img src={Logo} alt="Logo LaonLabs" /> },
        { href: "/", content: "ENTRAR" },
    ];

    return <>
        <Header links={links}/>
        <div>
            <h1>Register</h1>
        </div>
    </>;
}

export default Register;