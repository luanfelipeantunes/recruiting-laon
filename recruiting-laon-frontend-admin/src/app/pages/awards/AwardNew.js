import { TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";


export default function AwardsNew(){
    return(
        <Container>
            <HeaderBetter titlePage="Novo Prêmio" />
            <FormContent formTitle="Adicionar Prêmio">
                <TextField
                    required
                    fullWidth
                    id="award"
                    label="Nome Prêmio"
                    name="award"
                    autoComplete="award"
                    autoFocus
                />
            </FormContent>
        </Container>
    );
}