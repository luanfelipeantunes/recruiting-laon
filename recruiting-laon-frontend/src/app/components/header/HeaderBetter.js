import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { FaArrowLeft, FaArrowRightToBracket } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "../../img/Logo.png";
import { useAuth } from "../../Utils/Auth/AuthContext";

function HeaderBetter() {

    const location = useLocation();
    const [headerData, setHeaderData] = useState([]);
    const { signout } = useAuth();
    const [logoutVisible, setLogoutVisible] = useState(false);

    //Variações de Headers
    const headerLogin = [
        {
            href: "/register",
            content:
                <div className="backItem">
                    <Icon> <FaArrowLeft /> </Icon>
                    <span className="element-hidden">VOLTAR</span>
                </div>
        },
        {
            href: "/",
            content: <img src={Logo} alt="Logo LaonLabs" />
        },
        {
            href: "/register",
            content: <span className="element-hidden">CADASTRAR</span>
        }
    ]

    const headerRegister = [
        {
            href: "/",
            content:
                <div className="backItem">
                    <Icon> <FaArrowLeft /> </Icon>
                    <span className="element-hidden">VOLTAR</span>
                </div>
        },
        {
            href: "/",
            content: <img src={Logo} alt="Logo LaonLabs" />
        },
        {
            href: "/",
            content: <span className="element-hidden"> ENTRAR </span>
        },
    ]

    const headerOne = [
        {
            href: "/home",
            content: <img src={Logo} alt="Logo LaonLabs" />
        },
        {
            href: "",
            content:
                <div className="headerTools">
                        <Icon> <FaSearch /> </Icon>
                    <span className="header-letter" onClick={() => setLogoutVisible(!logoutVisible)} > <Icon> S </Icon> </span>
                </div>
        },
    ]

    //Verifica a rota atual e seta o header correspondente
    useEffect(() => {
        switch (location.pathname) {
            case '/register':
                setHeaderData(headerRegister);
                break;
            case '/login':
                setHeaderData(headerLogin);
                break;
            default:
                setHeaderData(headerOne);
                break;
        }

        //eslint-disable-next-line
    }, [logoutVisible, location.pathname]);

    //Função de logout
    const handleLogout = () => {
        signout();
    }



    return <>
        <header className="header">
            <ul className="listItens">
                {headerData.map((headerData) => (
                    <li className={`semibold16 ${headerData.content.props.className === 'element-hidden' ? 'element-hidden' : ''}`}>
                        <Link to={headerData.href}>
                            {headerData.content}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>

        {logoutVisible &&
            <span className="logout" onClick={handleLogout}>
                Logout <Icon> <FaArrowRightToBracket /> </Icon>
            </span>
        }
    </>
}
export default HeaderBetter;