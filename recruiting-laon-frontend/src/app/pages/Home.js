import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import Loader from "react-js-loader";
import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import HeaderBetter from "../components/Header/HeaderBetter";


function Home() {

    const [loading, setLoading] = useState(true);

    //eslint-disable-next-line
    const [contents, setContents] = useState([]);
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {

        setLoading(true);

        axiosInstance.get('/contents')
            .then(response => {
                setContents(response.data);

                //Filtrando os conteúdos por tipo
                setMovies(response.data.filter(content => content.type_content === 'MOVIE').slice(0, 6));
                setSeries(response.data.filter(content => content.type_content === 'SERIE').slice(0, 6));

                setLoading(false);
            })
            .catch(error => {
                console.error(error);
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