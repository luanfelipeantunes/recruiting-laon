import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import AutoCompleteBetter from "../../components/input/AutoCompleteBetter";
import ButtonSubmit from "../../components/button/ButtonSubmit";
import { useEffect, useState } from "react";
import { Constants } from "../../utils/Constants";
import axiosInstance from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import AlertBetter from "../../components/alert/AlertBetter";
import ButtonFileUpload from "../../components/button/ButtonFileUpload";


export default function ContentNew() {
    const [content, setContent] = useState({});
    const [categories, setCategories] = useState([]);
    const [actors, setActors] = useState([]);
    const [awards, setAwards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    //Função de busca de categorias
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    //Função de busca de atores
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/actors')
            .then(response => {
                setActors(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    //Função de busca de prêmios
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/awards')
            .then(response => {
                setAwards(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    //Função de adicionar conteúdo
    const handleSubmit = () => {
        setLoading(true);
        axiosInstance.post(Constants.baseUrl + '/contents', content)
            .then(() => {
                navigate('/contents');
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setMessage('Erro ao adicionar conteúdo');
            })
    }

    return (
        <>
            <Container>
                <HeaderBetter titlePage="Nova Série ou Filme" />

                {message &&
                    <div style={{
                        width: '90%',
                        margin: '20px auto'
                    }}>
                        <AlertBetter severity="error" message={message} />
                    </div>}

                <FormContent
                    formTitle="Adicionar Série ou Filme"
                >
                    <div style={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="Título"
                            name="title"
                            autoComplete="title"
                            autoFocus
                        />
                        <TextField
                            required
                            fullWidth
                            id='original_title'
                            label='Título Original'
                            name='original_title'
                            autoComplete='original_title'
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <TextField
                            required
                            fullWidth
                            id="year"
                            label="Ano"
                            name="year"
                            autoComplete="year"
                        />
                        <TextField
                            required
                            fullWidth
                            id="duration"
                            label="Duração"
                            name="duration"
                            autoComplete="duration"
                        />
                    </div>

                    <TextField
                        required
                        fullWidth
                        id="synopsis"
                        label="Sinopse"
                        name="synopsis"
                        autoComplete="synopsis"
                    />

                    <TextField
                        required
                        fullWidth
                        id="director"
                        label="Diretor"
                        name="director"
                        autoComplete="director"
                    />

                    <AutoCompleteBetter
                        options={categories}
                        label="Categorias"
                    />

                    <AutoCompleteBetter
                        options={actors}
                        label="Atores"
                    />

                    <AutoCompleteBetter
                        options={awards}
                        label="Prêmios"
                    />

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="MOVIE" control={<Radio />} label="Filme" />
                        <FormControlLabel value="SERIE" control={<Radio />} label="Série" />
                    </RadioGroup>

                    <ButtonFileUpload
                        label="Thumbnail"
                        onChange={(event) => console.log(event.target.files)}
                    />

                    <div style={{
                        marginTop: "20px",
                    }}>
                        <ButtonSubmit
                            text="Adicionar"
                            loading={loading}
                            handleClick={() => { }}
                        />
                    </div>
                </FormContent>
            </Container>
        </>
    );
}