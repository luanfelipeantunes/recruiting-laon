import { FormControlLabel, Switch, TextField } from "@mui/material";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import FormContent from "../../components/formContent/FormContent";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/Utils";
import SaveIcon from '@mui/icons-material/Save';
import { Constants } from "../../utils/Constants";
import { LoadingButton } from "@mui/lab";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    //Busca usuário na API
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/users/' + id)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id]);

    //Função que salva as mudanças no formulário
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "is_admin") {
            setUser({
                ...user,
                [e.target.name]: e.target.checked
            });
        }
    }

    //Função que envia os dados do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axiosInstance.patch(Constants.baseUrl + "/users/" + id, user)
            .then((response) => {
                navigate("/users");
            })
            .catch((error) => {
                console.error(error);
                setMessage("Erro ao editar usuário");
                setLoading(false);
            })
    }

    return <>
        <Container>
            <HeaderBetter titlePage="Editar Usuário" />

            <FormContent
                formTitle="Editar Usuário"
                message={message}
            >
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={user.name || ''}
                    onChange={handleChange}
                />

                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={user.email || ''}
                    onChange={handleChange}
                />

                <TextField
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />

                <FormControlLabel
                    control={
                        <Switch
                            defaultChecked={false} name="is_admin"
                            onChange={handleChange}
                            checked={user.is_admin || false}
                        />
                    }
                    label="Administrador"
                />

                <div >
                    <LoadingButton
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="filled"
                        fullWidth
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "var(--gray-100)",
                            color: "var(--white)",
                            marginTop: "20px",
                            boxShadow: "1px 1px 5px var(--gray-100)"
                        }}
                    >
                        Cadastrar
                    </LoadingButton>
                </div>
            </FormContent>

        </Container>
    </>
}