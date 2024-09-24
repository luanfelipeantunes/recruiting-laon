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
    const [fileName, setFileName] = useState('');
    const [categoriesSelected, setCategoriesSelected] = useState([]);
    const [actorsSelected, setActorsSelected] = useState([]);
    const [awardsSelected, setAwardsSelected] = useState([]);
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

    //Função de mudança de informações
    const handleChange = (e) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        })
        console.log(content);
    }

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

    //Função para lidar com a mudança no carregamento do arquivo
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    }

    //Função para lidar com a mudança de categorias
    const handleCategoriesChange = (value) => {
        setCategoriesSelected(value);
        console.log(value);
    };

    //Função para lidar com a mudança de atores
    const handleActorsChange = (value) => {
        setActorsSelected(value);
        console.log(value);
    };

    //Função para lidar com a mudança de prêmios
    const handleAwardsChange = (value) => {
        setAwardsSelected(value);
        console.log(value);
    };

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

                <FormContent formTitle="Adicionar Série ou Filme">
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
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            id='original_title'
                            label='Título Original'
                            name='original_title'
                            autoComplete='original_title'
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            id="duration"
                            label="Duração (min)"
                            name="duration"
                            autoComplete="duration"
                            onChange={handleChange}
                        />
                    </div>

                    <TextField
                        required
                        fullWidth
                        id="synopsis"
                        label="Sinopse"
                        name="synopsis"
                        autoComplete="synopsis"
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        fullWidth
                        id="director"
                        label="Diretor"
                        name="director"
                        autoComplete="director"
                        onChange={handleChange}
                    />

                    <AutoCompleteBetter
                        options={categories}
                        label="Categorias"
                        handleChange={handleCategoriesChange}
                    />

                    <AutoCompleteBetter
                        options={actors}
                        label="Atores"
                        handleChange={handleActorsChange}
                    />

                    <AutoCompleteBetter
                        options={awards}
                        label="Prêmios"
                        handleChange={handleAwardsChange}
                    />

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="type_content"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="MOVIE" control={<Radio />} label="Filme" />
                        <FormControlLabel value="SERIE" control={<Radio />} label="Série" />
                    </RadioGroup>

                    <div style={{
                        display: 'flex',
                    }}>
                        <ButtonFileUpload
                            label="Thumbnail"
                            onChange={handleFileChange}
                        />
                        <TextField
                            id="filled-read-only-input"
                            label="Arquivo"
                            variant="filled"
                            value={fileName}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                            sx={{
                                margin: "0 0 0 20px",
                                width: "79%"
                            }}
                        />
                    </div>

                    <div style={{
                        marginTop: "20px",
                    }}>
                        <ButtonSubmit
                            text="Adicionar"
                            loading={loading}
                            handleClick={() => { handleSubmit() }}
                        />
                    </div>
                </FormContent>
            </Container>
        </>
    );
}