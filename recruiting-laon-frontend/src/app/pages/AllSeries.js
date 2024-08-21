import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Background from "../components/Container/Background";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Icon from "../components/Icon/Icon";
import { FaSearch } from "react-icons/fa";
import Logo from "../img/Logo.png";
import Loader from "react-js-loader";

function AllSeries() {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

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
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE')
            .then((response) => {
                setContents(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return <>
        <Background>
            <Header links={links} />
            <Container>
            {loading ? (<Loader type="box-rectangular" bgColor="var(--white)" size={100}/>
                ) : (
                    <>
                        <h1 className="semibold40"> Series </h1>
                        <ContentsLine contents={contents} hiddeHeader={true} />
                    </>
                )}
            </Container>
        </Background>
        <Footer />
    </>
}

export default AllSeries;