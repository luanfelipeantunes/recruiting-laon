import { Button } from "@mui/material";

export default function ButtonTable({ children, ...props }) {
  
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ margin: '20px 5%' }}
      {...props}
    >
      {children}
    </Button>
  );
}