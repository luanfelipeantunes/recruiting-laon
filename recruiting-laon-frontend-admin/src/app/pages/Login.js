import styles from './Login.module.css';
import InputBetter from '../components/input/InputBetter';
import logo from '../img/Logo.png'

export default function Login() {
  return (
    <div className={styles.FormContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <hr className={styles.hr}/>
      <h1 className="semibold40"> Login </h1>
      <div className={styles.input}>
        <InputBetter label={"E-mail"} type="text"/>
      </div>
      <div className={styles.input}>
        <InputBetter label={"Senha"} type="password"/>
      </div>
    </div>
  );
}