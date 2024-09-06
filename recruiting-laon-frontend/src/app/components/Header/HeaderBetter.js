import { Link, matchPath, useLocation } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { FaArrowLeft, FaArrowRightToBracket } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "../../img/Logo.png";
import { useAuth } from "../../Utils/Auth/AuthContext";
import Input from "../Input/Input";

function HeaderBetter({onSearch, resetSearch}) {

    const location = useLocation();
    const [headerData, setHeaderData] = useState([]);
    const { signout } = useAuth();
    const [logoutVisible, setLogoutVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    const {user} = useAuth();
    const letterUser = user ? user.name.charAt(0) : null;
    

    //Função para mostrar ou esconder a barra de pesquisa
    const toggleSearch = () => {
        if(searchVisible){
            resetSearch();
        }
        setSearchVisible(!searchVisible);
    }

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
                    <span onClick={toggleSearch}> <Icon> <FaSearch /> </Icon> </span>
                    <span className="header-letter" onClick={() => setLogoutVisible(!logoutVisible)} > <Icon> {letterUser} </Icon> </span>
                </div>
        },
    ]

    const headerNoSearch = [
        {
            href: "/home",
            content: <img src={Logo} alt="Logo LaonLabs" />
        },
        {
            href: "",
            content:
                <div className="headerTools">
                    <span className="header-letter" onClick={() => setLogoutVisible(!logoutVisible)} > <Icon> {letterUser} </Icon> </span>
                </div>
        },
    ]

    //Verifica a rota atual e seta o header correspondente
    useEffect(() => {
        switch (true) {
            case location.pathname === '/register':
                setHeaderData(headerRegister);
                break;
            case location.pathname === '/login':
                setHeaderData(headerLogin);
                break;
            case matchPath('/contents/:id', location.pathname) !== null:
                setHeaderData(headerNoSearch);
                break;
            default:
                setHeaderData(headerOne);
                break;
        }

        //eslint-disable-next-line
    }, [logoutVisible, searchVisible, location.pathname]);

    //Função de logout
    const handleLogout = () => {
        signout();
    }

    //Função que envia o termo de busca para o componente pai
    const handleSearchTerm = (e) => {
        onSearch(e.target.value);
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

        {searchVisible && (
            <div className={`search`}>
                <Input
                    type="text"
                    placeholder="Buscar conteúdos..."
                    name="search"
                    handleChange={handleSearchTerm}
                />
            </div>
        )}

        {logoutVisible &&
            
            <span className="logout" onClick={handleLogout}>
                Logout <Icon> <FaArrowRightToBracket /> </Icon>
            </span>
        }
    </>
}
export default HeaderBetter;