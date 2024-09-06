import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Loader from "react-js-loader";
import Button from "../components/Button/Button";
import HeaderBetter from "../components/Header/HeaderBetter";

function AllSeries() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(6);

    //Função para buscar conteúdos
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE&limit=' + limit).then((response) => {
            setContents(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [limit]);

    //Função para buscar conteúdos filtrados por termo
    const handleSearch = (term) => {
        setLoading(true);
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE&limit=' + limit + '&search=' + term).then((response) => {
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
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE&limit=' + limit).then((response) => {
            setContents(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return <>
        <Background>
            <HeaderBetter onSearch={handleSearch} resetSearch={resetSearch}/>

            <Container>
                {loading ?
                    <Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                    :
                    <>
                        <h1 className="semibold40"> Series </h1>
                        <ContentsLine contents={contents} hiddeHeader={true} />

                        {contents.length < limit ? null
                            :
                            <Button style={{ margin: 'auto' }} handleSubmit={() => setLimit(limit + 6)}> Buscar mais </Button>
                        }
                    </>
                }
            </Container>
        </Background>
        
        <Footer />
    </>
}

export default AllSeries;