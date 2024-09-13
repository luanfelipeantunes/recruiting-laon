import { useEffect, useState } from "react";
import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Footer from "../components/Footer/Footer";
import axiosInstance from "../Utils/Utils";
import Loader from "react-js-loader";
import Button from "../components/Button/Button";
import HeaderBetter from "../components/Header/HeaderBetter";
import { Constants } from "../Utils/Contants";
import { FaPlus } from "react-icons/fa6";


function AllMovies() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(6);

    //Função para buscar conteúdos
    useEffect(() => {
        setLoading(true);
        axiosInstance.get('/contents?typeContent=MOVIE&limit=' + limit).then(response => {
            setContents(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [limit]);

    //Função para buscar conteúdos filtrados por termo
    const handleSearch = (term) => {
        setLoading(true);
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=MOVIE&limit=' + limit + '&search=' + term).then((response) => {
            setContents(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    //Função para resetar a busca
    const resetSearch = () => {
        setLoading(true);
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=MOVIE&limit=' + limit).then((response) => {
            setContents(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return <>
        <Background>
            <HeaderBetter onSearch={handleSearch} resetSearch={resetSearch} />

            <Container>
                {loading ?
                    <Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                    :
                    <>
                        <h1 className="semibold40"> Filmes </h1>
                        {contents.length === 0 ? <p className="semibold24" style={{color: "var(--gray-400)"}}>Nenhum filme encontrado</p>
                            :
                            <ContentsLine contents={contents} hiddeHeader={true} />}

                        {contents.length < limit ? null
                            :
                            <Button style={{ margin: 'auto' }} handleSubmit={() => setLimit(limit + 6)}>
                                Buscar mais <FaPlus />
                            </Button>
                        }

                    </>
                }
            </Container>
        </Background>

        <Footer />
    </>
}

export default AllMovies;