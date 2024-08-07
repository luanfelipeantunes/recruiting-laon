import { useState } from "react";
import FormBox from "../components/FormBox/FormBox";
import Header from "../components/header/Header";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Logo from "../img/Logo.png";
import { FaArrowLeft } from "react-icons/fa6";

function Login() {

  //Estilo a ser aplicado na div que contém o ícone e o texto de "Voltar"
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "120px",
  };

  //Links que serão exibidos no Header
  const links = [
    { href: "/register", content: <div style={styles}> <Icon> <FaArrowLeft /> </Icon> VOLTAR </div>},
    { href: "/", content: <img src={Logo} alt="Logo LaonLabs" /> },
    { href: "/register", content: "CADASTRAR" },
  ];

  const [passwordVisible, setPasswordVisible] = useState(false);
  return <>
    <Header links={links} />
    <div style={{height: '80vh', display:'flex'}}>
      <FormBox>
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha"/>
      </FormBox>
    </div>
  </ >
}

export default Login; 