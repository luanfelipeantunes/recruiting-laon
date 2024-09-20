import { Link } from "react-router-dom";
import ButtonTable from "../../components/button/ButtonTable";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import TableBetter from "../../components/tableBetter/TableBetter";


export default function Contents() {
    return (
            <Container>
                <HeaderBetter titlePage="Séries e Filmes" />
                <ButtonTable>
                    <Link to="/contents/new"> Novo Conteúdo </Link> 
                </ButtonTable>
                <TableBetter />
            </Container>
    );
}