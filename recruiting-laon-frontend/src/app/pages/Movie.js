import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Icon from "../components/Icon/Icon";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/Logo.png";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import styles from "./styles/Movie.module.css";
import Infos from "../components/Infos/Infos";
import Background from "../components/Container/Background";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import Loader from 'react-js-loader';
import { useAuth } from "../Utils/Auth/AuthContext";

function Movie() {

    const id = useParams().id;
    const [content, setContent] = useState();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    //Verifica se o usuário está autenticado, se não, redireciona para a página de login
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '96px'
    }

    const links = [
        { href: "/home", content: <img src={Logo} alt="Logo LaonLabs" /> },
        { href: "/home", content: <div style={style}> <Icon> <FaSearch /> </Icon> <span className="header-letter"> <Icon> S </Icon> </span> </div> },
    ];

    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/contents/' + id)
            .then((response) => {
                setContent(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return <>
        <Background>
            <Header links={links} />
            <Container>

                {!content ? (<Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                ) : (
                    <div className={styles.container}>
                        <div className={styles.thumb}>
                            <img src={`${Constants.urlRaiz}/${content.thumbnail}`} alt="Thumbnail" />
                            <span className={styles.hiddenMobile}>
                                <Button style={{ width: '306px', height: '56px' }}> Assistir trailer </Button>
                            </span>
                        </div>
                        <div className={styles.infosAside}>
                            <div className={styles.headerInfos}>
                                <h1 className="semibold40"> {content.title} </h1>
                                <p className="semibold16"> Título original: <span className="regular16">{content.original_title}</span></p>
                                <p className="semibold16"> Ano: <span className="regular16">{content.year}</span></p>
                                <p className="semibold16"> Duração: <span className="regular16">{content.duration}</span></p>
                            </div>
                            <div className={styles.infoContent}>
                                <Infos style={{ width: '100%' }} title="Sinopse" subtitle={content.synopsis} />
                                <Infos style={{ width: '49%', marginRight: '2%' }} title="Elenco" subtitle={content.cast} />
                                <Infos style={{ width: '49%' }} title="Prêmios" subtitle={content.awards} />
                                <Infos style={{ width: '49%', marginRight: '2%' }} title="Diretor" subtitle={content.director} />
                                <Infos style={{ width: '49%' }} title="Avaliações" subtitle={content.ratings} />
                            </div>
                        </div>
                    </div>
                )}

            </Container>
        </Background>

        <Footer />
    </>
}

export default Movie; 