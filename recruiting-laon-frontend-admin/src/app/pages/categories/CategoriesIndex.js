import { Link } from 'react-router-dom';
import ButtonTable from '../../components/button/ButtonTable';
import Container from '../../components/container/Container';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import TableBetter from '../../components/tableBetter/TableBetter';

export default function CategoriesIndex() {
    return (
        <Container>
            <HeaderBetter titlePage="Categorias"/>
            <ButtonTable>
                <Link to="/categories/new"> Nova Categoria </Link>
            </ButtonTable>
            <TableBetter />
        </Container>
    )
}