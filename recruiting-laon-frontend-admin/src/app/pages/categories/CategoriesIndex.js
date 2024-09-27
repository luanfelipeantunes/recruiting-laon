import { Link } from 'react-router-dom';
import ButtonTable from '../../components/button/ButtonTable';
import Container from '../../components/container/Container';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import TableBetter from '../../components/tableBetter/TableBetter';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/Utils';
import { Constants } from '../../utils/Constants';
import AlertBetter from '../../components/alert/AlertBetter';
import LoaderBetter from '../../components/loader/LoaderBetter';

export default function CategoriesIndex() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState('');

    const columns = [
        { id: 'name', label: 'Nome' },
        { id: 'actions', label: 'Ações', align: 'center' }
    ];

    //Busca de categorias
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/categories').then(response => {
            setCategories(response.data);
        }).catch(error => {
            console.error(error);
            setTypeMessage('error');
            setMessage('Erro ao buscar categorias');
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    //Função de deletar categoria
    const handleDelete = (id) => {
        setLoading(true);
        axiosInstance.delete(Constants.baseUrl + '/categories/' + id).then(response => {
            setTypeMessage('success');
            setMessage('Categoria deletada com sucesso');
            setCategories(categories.filter(category => category.id !== id));
        }).catch(error => {
            console.error(error);
            setTypeMessage('error');
            setMessage('Erro ao deletar categoria');
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <Container>
            <HeaderBetter titlePage="Categorias" />
            {message &&
                <div style={{ width: "90%", margin: "20px auto" }}>
                    <AlertBetter
                        severity={typeMessage}
                        message={message}
                    />
                </div>
            }

            <ButtonTable>
                <Link to="/categories/new"> Nova Categoria </Link>
            </ButtonTable>

            {loading ? (
                <LoaderBetter />
            ) : (
                <TableBetter
                    columns={columns}
                    data={categories}
                    handleDelete={handleDelete}
                    link={'/categories'}
                />
            )}

        </Container>
    )
}