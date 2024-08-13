import FormBox from "../components/FormBox/FormBox";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Logo from "../img/Logo.png";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

function Login() {

  //Estilo a ser aplicado na div que contém o ícone e o texto de "Voltar"
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  //Links que serão exibidos no Header
  const links = [
    { href: "/register", content: <div style={styles}> <Icon> <FaArrowLeft /> </Icon> <span className="element-hidden">VOLTAR</span> </div> },
    { href: "/", content: <img src={Logo} alt="Logo LaonLabs" /> },
    { href: "/register", content: <span className="element-hidden">CADASTRAR</span> },
  ];

  return <>
    <Header links={links} />
    <FormBox title="Entrar" subtitle="Bem vindo(a) de volta!">
      <Input type="text" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Button> Entrar </Button>
    </FormBox>
  </ >
}

export default Login; 