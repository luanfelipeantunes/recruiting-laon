import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Icon from "../components/Icon/Icon";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/Logo.png";
import Footer from "../components/Footer/Footer";
import image from "../img/6c71afa89fd8ed8999b3e04d8d794a0e.webp"
import Button from "../components/Button/Button";
import styles from "./styles/Movie.module.css";
import Infos from "../components/Infos/Infos";
import Background from "../components/Container/Background";

function Movie() {

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
                <div className={styles.container}>
                    <div className={styles.thumb}>
                        <img src={image} alt="Thumbnail" />
                        <span className={styles.hiddenMobile}> <Button style={{ width: '306px', height: '56px' }}> Assistir trailer </Button> </span>
                    </div>
                    <div className={styles.infosAside}>
                        <div className={styles.headerInfos}>
                            <h1 className="semibold40"> Bela vingança </h1>
                            <p className="semibold16"> Título original: <span className="regular16">Promising Young woman Promising Young woman Promising Young woman</span></p>
                            <p className="semibold16"> Ano: <span className="regular16">2020</span></p>
                            <p className="semibold16"> Duração: <span className="regular16">1h 53min</span></p>
                        </div>
                        <div className={styles.infoContent}>
                            <Infos style={{width: '100%'}} title="Sinopse" subtitle="lorem ipsum"/>
                            <Infos style={{width: '49%', marginRight: '2%'}} title="Elenco" subtitle="lorem ipsum"/>
                            <Infos style={{width: '49%'}} title="Prêmios" subtitle="lorem ipsum"/>
                            <Infos style={{width: '49%', marginRight: '2%'}} title="Diretor" subtitle="lorem ipsum"/>
                            <Infos style={{width: '49%'}} title="Avaliações" subtitle="lorem ipsum"/>
                        </div>
                    </div>
                </div>
            </Container>
        </Background>

        <Footer />
    </>
}

export default Movie; 