import React from 'react';
import HeaderBetter from '../../components/headerBetter/HeaderBetter';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';

export default function UsersIndex() {

  const navigate = useNavigate();

  return <>
    <Container>
      <HeaderBetter titlePage="Usuários" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/users/new")}
        sx={{ margin: '20px 5%' }}
      >
        Novo Usuário
      </Button>

      <TableContainer component={Paper} sx={{
        borderRadius: "0",
        width: "90%",
        margin: "20px auto"
      }}>
        <Table aria-label='simple table'>
          <TableHead sx={{ backgroundColor: "var(--gray-400)" }}>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='center'>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "var(--gray-500)" }}>
            <TableRow>
              <TableCell component="th" scope='row'>João</TableCell>
              <TableCell align='right'>joao@emal.com</TableCell>
              <TableCell align='center' sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button variant="contained" color="primary">Editar</Button>
                <Button variant="contained" color="error">Excluir</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  </>
}