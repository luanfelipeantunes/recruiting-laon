import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Loader from "react-js-loader";
import Logo from "../img/Logo.png";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/Auth/AuthContext";


function Home() {

    const [contents, setContents] = useState([]);
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    //Verifica se o usuário está autenticado, se não, redireciona para a página de login
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '96px'
    }

    const links = [
        { href: "/home", content: <img src={Logo} alt="Logo LaonLabs" /> },
        { href: "/home", content: <div style={styles}> <Icon> <FaSearch /> </Icon> <span className="header-letter"> <Icon> S </Icon> </span> </div> },
    ];

    useEffect(() => {

        axiosInstance.get('/contents')
            .then(response => {
                setContents(response.data);

                //Filtrando os conteúdos por tipo
                setMovies(response.data.filter(content => content.type_content === 'MOVIE').slice(0, 6));
                setSeries(response.data.filter(content => content.type_content === 'SERIE').slice(0, 6));
            })
            .catch(error => {
                console.error(error);
            });

        // eslint-disable-next-line
    }, []);

    return <>
        <Background>
            <Header links={links} />
            <Container>
                {!contents ? (<Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                ) : (
                    <>
                        <h1 className="semibold40"> Populares </h1>
                        <ContentsLine title="FILMES" contents={movies} />
                        <ContentsLine title="SERIES" contents={series} />
                    </>
                )


                }
            </Container>
        </Background>

        <Footer />
    </>
}

export default Home;