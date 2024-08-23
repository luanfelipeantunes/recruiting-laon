import { useEffect, useState } from "react";
import axiosInstance from "../Utils/Utils";
import { Constants } from "../Utils/Contants";
import ContentsLine from "../components/ContentsLine/ContentsLine";
import Background from "../components/Container/Background";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Loader from "react-js-loader";
import HeaderBetter from "../components/Header/HeaderBetter";

function AllSeries() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/contents?typeContent=SERIE').then((response) => {
            setContents(response.data);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    return <>
        <Background>
            <HeaderBetter />

            <Container>
                {loading ?
                    <Loader type="box-rectangular" bgColor="var(--white)" size={100} />
                    :
                    <>
                        <h1 className="semibold40"> Series </h1>
                        <ContentsLine contents={contents} hiddeHeader={true} />
                    </>
                }
            </Container>
        </Background>
        
        <Footer />
    </>
}

export default AllSeries;