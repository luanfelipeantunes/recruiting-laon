import { useState, useEffect } from 'react';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import Container from '../../components/container/Container';
import TableBetter from '../../components/tableBetter/TableBetter';
import ButtonTable from '../../components/button/ButtonTable';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/Utils';
import { Constants } from '../../utils/Constants';
import LoaderBetter from '../../components/loader/LoaderBetter';
import AlertBetter from '../../components/alert/AlertBetter';

export default function UsersIndex() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState('');

  //Busca usuários na API
  useEffect(() => {
    axiosInstance.get('/users')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  //Definindo as colunas da tabela
  const columns = [
    { id: 'name', label: 'Nome' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Ações', align: 'center' }
  ];

  //Função que deleta um usuário
  const handleDelete = (id) => {
    setLoading(true);
    axiosInstance.delete(Constants.baseUrl + '/users/' + id)
      .then((response) => {
        console.log(response);
        setUsers(users.filter(user => user.id !== id));
        setTypeMessage('success');
        setMessage('Usuário deletado com sucesso');
      }).catch((error) => {
        console.error(error);
        setTypeMessage('error');
        setMessage('Erro ao deletar usuário');
      }).finally(() => {
        setLoading(false);
      });
  }


  return <>
    <Container>
      <HeaderBetter titlePage="Usuários" />

      {message &&
        <div style={{ width: "90%", margin: "20px auto" }}>
          <AlertBetter
            severity={typeMessage}
            message={message}
          />
        </div>
      }

      <ButtonTable>
        <Link to="/users/new"> Novo Usuário </Link>
      </ButtonTable>

      {loading ? (<LoaderBetter />
      ) : (
        <TableBetter
          data={users}
          columns={columns}
          link="/users"
          handleDelete={handleDelete}
          
        />
      )
      }
    </Container>
  </>
}