import { Box, ThemeProvider, Typography } from "@mui/material";
import theme from "../../theme/Theme";
import AlertBetter from "../alert/AlertBetter";


export default function FormContent({ children, formTitle, message}) {
    return (
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
                {formTitle}
            </Typography>

            {message && <AlertBetter message={message} severity="error" />}
            
            <Box component="form" noValidate>
                <ThemeProvider theme={theme}>

                    {children}

                </ThemeProvider>

            </Box>
        </Box>
    )
}