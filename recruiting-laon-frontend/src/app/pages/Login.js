import FormBox from "../components/FormBox/FormBox";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Logo from "../img/Logo.png";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import styles from "./styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signin } from "../Utils/Auth/AuthActions";
import Alert from "../components/Alert/Alert";

function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signin(credentials);
    console.log(data);


    if (data.status === 200) {
      navigate("/home");
    } else {
      setMessage("Credenciais incorretas!");
    }
  }

  //Estilo a ser aplicado na div que contém o ícone e o texto de "Voltar"
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  //Links que serão exibidos no Header
  const links = [
    { href: "/register", content: <div style={style}> <Icon> <FaArrowLeft /> </Icon> <span className="element-hidden">VOLTAR</span> </div> },
    { href: "/", content: <img src={Logo} alt="Logo LaonLabs" /> },
    { href: "/register", content: <span className="element-hidden">CADASTRAR</span> },
  ];

  return <>

    <Header links={links} />

    <FormBox>
      { message && <Alert />}

      <h1 className="semibold24"> Entrar </h1>
      <h2 className={`regular16 ${styles.subtitle}`} > Bem vindo(a) de volta! </h2>
      <Input type="text" placeholder="E-mail" name="email" handleChange={handleChange} />
      <Input type="password" placeholder="Senha" name="password" handleChange={handleChange} />
      <Button handleSubmit={handleSubmit}> Entrar </Button>

      <span className={`semibold16 ${styles.mobileLink}`}> <Link to='/register'> CADASTRAR </Link> </span>
    </FormBox>
    
  </ >
}

export default Login; 