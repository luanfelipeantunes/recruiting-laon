import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


function AllContents() {

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
                
            </Container>
        </Background>
        <Footer />
    </>
}

export default AllContents;