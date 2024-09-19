import { createTheme } from "@mui/material";


const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '20px 0'
                }
            }
        },
    }
})

export default theme;