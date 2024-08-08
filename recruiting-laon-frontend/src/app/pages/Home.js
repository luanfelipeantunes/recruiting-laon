import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Logo from "../img/Logo.png";
import { FaSearch } from "react-icons/fa";


function Home() {

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

    return <>
        <Header links={links} />
        <Container>
            <h1 className="semibold40"> Populares </h1>

            <ContentsLine />

        </Container>
    </>;
}

export default Home;