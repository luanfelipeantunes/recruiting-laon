import styles from './Login.module.css';
import InputBetter from '../components/input/InputBetter';
import logo from '../img/Logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth/AuthContext';
import ButtonSubmit from '../components/button/ButtonSubmit';
import AlertBetter from '../components/alert/AlertBetter';

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const { signin } = useAuth();

  //Função para atualizar os campos do formulário
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  //Função de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const data = await signin(credentials);

    if (data.status === 200) {
      navigate('/dashboard');
    } else {
      setMessage('E-mail ou senha incorretos');
      setButtonLoading(false);
    }
  }

  //Função para submeter o formulário ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className={styles.FormContainer}>

      {message &&
        <div style={{ marginBottom: "20px" }}>
          <AlertBetter message={message} severity="error" />
        </div>
      }

      <img src={logo} alt="Logo" className={styles.logo} />
      <hr className={styles.hr} />
      <h1 className="semibold40"> Login </h1>
      <div className={styles.input}>
        <InputBetter
          label={"E-mail"}
          type="text"
          handleChange={handleChange}
          name="email"
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={styles.input}>
        <InputBetter
          label={"Senha"}
          type="password"
          handleChange={handleChange}
          name="password"
          onKeyPress={handleKeyPress}
        />
      </div>

      <div style={{ position: 'relative', top: "20px" }}>
        <ButtonSubmit
          text={"Entrar"}
          handleClick={handleSubmit}
          loading={buttonLoading}
        />
      </div>
    </div >
  );
}