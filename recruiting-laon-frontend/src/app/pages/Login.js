import FormBox from "../components/FormBox/FormBox";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import styles from "./styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../components/Alert/Alert";
import { useAuth } from "../Utils/Auth/AuthContext";
import HeaderBetter from "../components/Header/HeaderBetter";

function Login() {


  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const { signin, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    //eslint-disable-next-line
    navigate("/home");
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    setButtonLoading(true);
    const data = await signin(credentials);
    console.log(data);


    if (data.status === 200) {
      navigate("/home");
    } else {
      setMessage("Credenciais incorretas!");
    }

    setButtonLoading(false);
  }

  return <>

    <HeaderBetter/>

    <FormBox>
      {message && <Alert message={message}/>}

      <h1 className="semibold24"> Entrar </h1>
      <h2 className={`regular16 ${styles.subtitle}`} > Bem vindo(a) de volta! </h2>
      <Input type="text" placeholder="E-mail" name="email" handleChange={handleChange} />
      <Input type="password" placeholder="Senha" name="password" handleChange={handleChange} />
      <Button handleSubmit={handleSubmit} isLoading={buttonLoading}> Entrar </Button>

      <span className={`semibold16 ${styles.mobileLink}`}> <Link to='/register'> CADASTRAR </Link> </span>
    </FormBox>

  </ >
}

export default Login; 