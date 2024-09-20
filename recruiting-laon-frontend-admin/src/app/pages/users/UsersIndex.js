import {useState, useEffect } from 'react';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import Container from '../../components/container/Container';
import TableBetter from '../../components/tableBetter/TableBetter';
import ButtonTable from '../../components/button/ButtonTable';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/Utils';

export default function UsersIndex() {

  const [users, setUsers] = useState([]);

  //Busca usuários na API
  useEffect(() => {
    axiosInstance.get('/users')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  //Definindo as colunas da tabela
  const columns = [
    { id: 'name', label: 'Nome' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Ações', align: 'center' }
  ];
    

  return <>
    <Container>
      <HeaderBetter titlePage="Usuários" />
      <ButtonTable>
        <Link to="/users/new"> Novo Usuário </Link>
      </ButtonTable>
      <TableBetter data={users} columns={columns} link="/users"/>
    </Container>
  </>
}