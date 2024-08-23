import { useEffect, useState } from "react";
import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import axiosInstance from "../Utils/Utils";
import Loader from "react-js-loader";
import HeaderBetter from "../components/Header/HeaderBetter";


function AllMovies() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/contents?typeContent=MOVIE').then(response => {
            setContents(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return <>
        <Background>
            <HeaderBetter />

            <Container>
                {loading ?
                    <Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                    :
                    <>
                        <h1 className="semibold40"> Filmes </h1>
                        <ContentsLine contents={contents} hiddeHeader={true} />
                    </>
                }
            </Container>
        </Background>

        <Footer />
    </>
}

export default AllMovies;