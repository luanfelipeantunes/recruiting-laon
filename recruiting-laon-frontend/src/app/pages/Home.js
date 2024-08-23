import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import Loader from "react-js-loader";
import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import HeaderBetter from "../components/Header/HeaderBetter";
import { Constants } from "../Utils/Contants";


function Home() {
    const [loading, setLoading] = useState(true);
    //eslint-disable-next-line
    const [contents, setContents] = useState([]);
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        //Pegando os 6 primeiros MOVIES 
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=MOVIE&limit=6').then((response) => {
            setMovies(response.data);
        }).catch((error) => {
            console.log(error);
        });

        //pegando os 6 primeiros SERIES
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE&limit=6').then((response) => {
            setSeries(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
        // eslint-disable-next-line
    }, []);

    return <>
        <Background>
            <HeaderBetter />
            <Container>
                {loading ? (<Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                ) : (
                    <>
                        <h1 className="semibold40"> Populares </h1>
                        <ContentsLine title="FILMES" contents={movies} link="/movies" />
                        <ContentsLine title="SERIES" contents={series} link='/series' />
                    </>
                )


                }
            </Container>
        </Background>

        <Footer />
    </>
}

export default Home;