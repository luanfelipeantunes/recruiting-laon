import styles from './Footer.module.css';
import Logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube   } from "react-icons/fa6";
import Icon from '../Icon/Icon';


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerList}>
                <li className={styles.logo}> <img src={Logo} alt='Logo LaonLabs' /> </li>

                <ul className={styles.links}>
                    <li> <Link> Início </Link> </li>
                    <li> <Link> Entrar ou Cadastrar </Link> </li>
                    <li> <Link> Termos e Condições </Link> </li>
                    <li> <Link> Política de Privaciade </Link> </li>
                    <li> <Link> Ajuda </Link> </li>
                </ul>

                <ul className={styles.medias}>
                    <li> <Link> <Icon> <FaFacebookF /> </Icon> </Link> </li>
                    <li> <Link> <Icon> <FaTwitter /> </Icon> </Link> </li>
                    <li> <Link> <Icon> <FaYoutube /> </Icon> </Link> </li>
                </ul>
            </ul>
        </footer>
    );
}

export default Footer;