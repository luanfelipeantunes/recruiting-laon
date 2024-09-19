import { Box, Button, TextField, ThemeProvider, Typography } from "@mui/material";
import Container from "../../components/container/Container";
import HeaderBetter from "../../components/headerBetter/HeaderBetter";
import theme from "../../theme/Theme";

export default function UserNew() {

  return <>
    <Container>
      <HeaderBetter titlePage="Novo Usuário" />
      <Box sx={{
        width: "60%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "var(--gray-400)"

      }}>
        <Typography variant="h6" sx={{
          textAlign: "center",
          fontWeight: "700",
          textShadow: "1px 1px 1px var(--gray-100)",
          fontSize: "1.5rem"
        }}>
          Cadastro de novo usuário
        </Typography>
        <Box component="form" noValidate>
          <ThemeProvider theme={theme}>
            <TextField
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />

            <TextField
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
          </ThemeProvider>

        </Box>
      </Box>
    </Container>
  </>
}