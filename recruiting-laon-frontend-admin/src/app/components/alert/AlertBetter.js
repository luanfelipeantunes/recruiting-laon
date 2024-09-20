import { Alert } from "@mui/material";


export default function AlertBetter({ message, severity }) {
    return (
        <div>
            {message && (
                <Alert
                    variant="outlined"
                    severity={severity}
                >
                    {message}
                </Alert>
            )}
        </div>
    )
}