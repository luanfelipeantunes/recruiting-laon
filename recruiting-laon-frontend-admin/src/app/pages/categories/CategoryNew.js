import { TextField } from "@mui/material";
import Container from "../../components/container/Container";
import FormContent from "../../components/formContent/FormContent";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";


export default function CategoryNew() {
    return (
        <Container>
            <HeaderBetter titlePage="Nova Categoria" />
            <FormContent formTitle="Adicionar Categoria">

                <TextField
                    required
                    fullWidth
                    id="category"
                    label="Nome Categoria"
                    name="category"
                    autoComplete="category"
                    autoFocus
                />
                
            </FormContent>
        </Container>
    );
}