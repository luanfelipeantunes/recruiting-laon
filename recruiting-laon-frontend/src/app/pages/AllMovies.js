import { useEffect, useState } from "react";
import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Logo from "../img/Logo.png";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../Utils/Utils";


function AllMovies() {

    const [contents, setContents] = useState([]);

    useEffect(() => {
        axiosInstance.get('/contents')
            .then(response => {
                setContents(response.data.filter(content => content.type_content === 'MOVIE'));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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

    return <>
        <Background>
            <Header links={links} />
            <Container>
                <h1 className="semibold40"> Filmes </h1>
                <ContentsLine contents={contents} hiddeHeader={true} />
            </Container>
        </Background>
        <Footer />
    </>
}

export default AllMovies;