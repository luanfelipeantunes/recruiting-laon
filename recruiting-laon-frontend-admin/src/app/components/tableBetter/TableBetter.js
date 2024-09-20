import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';


export default function TableBetter({ data, columns, link }) {
  return (
    <TableContainer component={Paper} sx={{
      borderRadius: "0",
      width: "90%",
      margin: "20px auto"
    }}>
      <Table aria-label='simple table'>
        <TableHead sx={{ backgroundColor: "var(--gray-400)" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || 'left'}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "var(--gray-500)" }}>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.id === 'actions' ? (
                    <>
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button variant="contained" color="primary" sx={{ marginRight: "5%" }}>
                          <Link to={link + "/edit/" + row.id}>Editar</Link>
                        </Button>
                        <Button variant="contained" color="error" sx={{ marginRight: "5%" }}>
                          Excluir
                        </Button>
                      </div>
                    </>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}