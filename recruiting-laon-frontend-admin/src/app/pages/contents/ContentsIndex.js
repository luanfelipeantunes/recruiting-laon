import { Link } from "react-router-dom";
import ButtonTable from "../../components/button/ButtonTable";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import TableBetter from "../../components/tableBetter/TableBetter";
import { useEffect, useState } from "react";
import LoaderBetter from "../../components/loader/LoaderBetter";
import AlertBetter from "../../components/alert/AlertBetter";
import axiosInstance from "../../utils/Utils";


export default function Contents() {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState('');

    const columns = [
        { id: 'title', label: 'Título' },
        { id: 'type_content', label: 'Tipo de Conteúdo' },
        { id: 'actions', label: 'Ações', align: 'center' }
    ];

    //Função para traduzir o tipo de conteúdo
    const translateContentType = (type) => {
        switch (type) {
            case 'MOVIE':
                return 'Filme';
            case 'SERIE':
                return 'Série';
            default:
                return type;
        }
    }

    //Função de busca de conteúdos
    useEffect(() => {
        axiosInstance.get('/contents')
            .then(response => {
                const translatedContents = response.data.map(content => {
                    return {
                        ...content,
                        type_content: translateContentType(content.type_content)
                    }
                });
                setContents(translatedContents);
            })
            .catch(error => {
                console.error(error);
                setTypeMessage('error');
                setMessage('Erro ao buscar conteúdos');
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    //Função de deletar conteúdo
    const handleDelete = (id) => {
        setLoading(true);
        axiosInstance.delete('/contents/' + id)
            .then(() => {
                setContents(contents.filter(content => content.id !== id));
                setTypeMessage('success');
                setMessage('Conteúdo deletado com sucesso');
            }).catch((error) => {
                console.error(error);
                setTypeMessage('error');
                setMessage('Erro ao deletar conteúdo');
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <Container>
            <HeaderBetter titlePage="Séries e Filmes" />
            {message &&
                <div style={{ width: "90%", margin: "20px auto" }}>
                    <AlertBetter
                        severity={typeMessage}
                        message={message}
                    />
                </div>
            }
            <ButtonTable>
                <Link to="/contents/new"> Novo Conteúdo </Link>
            </ButtonTable>

            {loading ? (<LoaderBetter />
            ) : (
                <TableBetter
                    data={contents}
                    columns={columns}
                    link="/contents"
                    handleDelete={handleDelete}
                />)
            }
        </Container>
    );
}