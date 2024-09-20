import { TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";


export default function ContentNew() {
    return (
        <>
            <Container>
                <HeaderBetter titlePage="Nova Série ou Filme" />
                <FormContent
                    formTitle="Adicionar Série ou Filme"
                >
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
                        id="description"
                        label="Descrição"
                        name="description"
                        autoComplete="description"
                    />
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
                </FormContent>
            </Container>
        </>
    );
}