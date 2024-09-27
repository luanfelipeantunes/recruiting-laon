import { TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import { useState } from "react";
import axiosInstance from "../../utils/Utils";
import { Constants } from "../../utils/Constants";
import AlertBetter from "../../components/alert/AlertBetter";
import { useNavigate } from "react-router-dom";


export default function CategoryNew() {

    const [category, setCategory] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCategory({ ...category, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!category.name) {
            setMessage('Preencha o campo nome da categoria');
            return;
        }
        axiosInstance.post(Constants.baseUrl + '/categories', category).then(response => {
            navigate('/categories');
        }).catch(error => {
            setMessage('Erro ao adicionar categoria');
        });
    };

    return (
        <Container>
            <HeaderBetter titlePage="Nova Categoria" />

            {message &&
                <div style={{
                    width: '90%',
                    margin: '20px auto'
                }}>
                    <AlertBetter severity="error" message={message} />
                </div>}

            <FormContent
                formTitle="Adicionar Categoria"
                handleSubmit={handleSubmit}
            >

                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome Categoria"
                    name="name"
                    autoComplete="category"
                    onChange={handleChange}
                    autoFocus
                />
            </FormContent>
        </Container>
    );
}