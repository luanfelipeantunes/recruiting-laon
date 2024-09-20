import { TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";


export default function ActorNew() {
    return (
        <Container>
            <HeaderBetter titlePage="Novo Ator" />
            <FormContent formTitle="Adicionar Ator">
                <TextField
                    required
                    fullWidth
                    id="actor"
                    label="Nome do Ator/Atriz"
                    name="actor"
                    autoComplete="actor"
                    autoFocus
                />
            </FormContent>
        </Container>
    )
}