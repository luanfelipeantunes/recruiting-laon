import { FormControlLabel, Switch, TextField } from "@mui/material";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import FormContent from "../../components/formContent/FormContent";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import axiosInstance from "../../utils/Utils";
import { Constants } from "../../utils/Constants";
import { useNavigate } from "react-router-dom";

export default function UserNew() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  //Função para atualizar os campos do formulário
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "is_admin") {
      setData({
        ...data,
        [e.target.name]: e.target.checked
      });
    }
  }

  //Função para submeter o formulário ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  //Função para enviar os dados do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Dados enviados: ", data);


    axiosInstance.post(Constants.baseUrl + "/users", data)
      .then((response) => {
        console.log(response);
        navigate("/users");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Erro ao cadastrar usuário");
        setLoading(false);
      })


  }

  return <>
    <Container>
      <HeaderBetter titlePage="Novo Usuário" />

      <FormContent
        formTitle="Novo Usuário"
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
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />

        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
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
          onKeyDown={handleKeyPress}
        />

        <FormControlLabel
          control={
            <Switch defaultChecked={false} name="is_admin" onChange={handleChange} />
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