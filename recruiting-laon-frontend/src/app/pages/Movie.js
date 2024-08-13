import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Icon from "../components/Icon/Icon";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/Logo.png";
import Footer from "../components/Footer/Footer";
import image from "../img/6c71afa89fd8ed8999b3e04d8d794a0e.webp"
import Button from "../components/Button/Button";
import style from "./Movie.module.css";

function Movie() {

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

            <div className={styles.container}>
                <div className={style.aside}>
                    <img src={image} alt="Thumbnail" />
                    <Button style={{width: '306px', height: '56px'}}> Assistir trailer </Button>
                </div>

                <div className={styles.infoContent}>
                    <div className={style.sinopse}>
                        <infoContent />
                    </div>

                    <div className={style.itens}>
                        <infoContent />
                        <infoContent />
                        <infoContent />
                        <infoContent />
                    </div>
                </div>
            </div>

        </Container>

        <Footer />
    </>
}

export default Movie; 