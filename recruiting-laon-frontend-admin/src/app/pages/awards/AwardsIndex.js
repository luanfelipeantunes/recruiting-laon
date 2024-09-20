import { Link } from "react-router-dom";
import ButtonTable from "../../components/button/ButtonTable";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import TableBetter from "../../components/tableBetter/TableBetter";

export default function AwardsIndex() {
    return(
        <Container>
            <HeaderBetter titlePage="Prêmios" />
            <ButtonTable>
                <Link to="/awards/new"> Novo Prêmio </Link>
            </ButtonTable>
            <TableBetter />
        </Container>
    )
}