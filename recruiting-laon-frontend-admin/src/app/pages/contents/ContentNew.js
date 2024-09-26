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
    const [file, setFile] = useState(null);
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
        const categoriesIds = categoriesSelected.map(category => category.id);
        const actorsIds = actorsSelected.map(actor => actor.id);
        const awardsIds = awardsSelected.map(award => award.id);

        setContent({
            ...content,
            categories: categoriesIds,
            actors: actorsIds,
            awards: awardsIds,
        })

        const formData = new FormData();
        formData.append('thumbnail', file);
        formData.append('title', content.title);
        formData.append('original_title', content.original_title);
        formData.append('year', content.year);
        formData.append('duration', content.duration);
        formData.append('synopsis', content.synopsis);
        formData.append('director', content.director);
        formData.append('type_content', content.type_content);
        /*        formData.append('categories', categoriesIds);
                formData.append('actors', actorsIds);
                formData.append('awards', awardsIds);
        */

        categoriesIds.forEach(id => {formData.append('categories[]', id)});
        actorsIds.forEach(id => {formData.append('actors[]', id)});
        awardsIds.forEach(id => {formData.append('awards[]', id)});
        
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        setLoading(false);

        axiosInstance.post(Constants.baseUrl + '/contents', formData)
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
            setFile(file);
            console.log(file);
        }
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

                <FormContent formTitle="Adicionar Série ou Filme">
                    <div style={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <TextField
                            fullWidth
                            id="title"
                            label="Título"
                            name="title"
                            autoComplete="title"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
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
                            fullWidth
                            id="year"
                            label="Ano"
                            name="year"
                            autoComplete="year"
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            id="duration"
                            label="Duração (min)"
                            name="duration"
                            autoComplete="duration"
                            onChange={handleChange}
                        />
                    </div>

                    <TextField
                        fullWidth
                        id="synopsis"
                        label="Sinopse"
                        name="synopsis"
                        autoComplete="synopsis"
                        onChange={handleChange}
                    />

                    <TextField
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
                        handleChange={(value) => setCategoriesSelected(value)}
                    />

                    <AutoCompleteBetter
                        options={actors}
                        label="Atores"
                        handleChange={(value) => setActorsSelected(value)}
                    />

                    <AutoCompleteBetter
                        options={awards}
                        label="Prêmios"
                        handleChange={(value) => setAwardsSelected(value)}
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
                            value={file ? file.name : ''}
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