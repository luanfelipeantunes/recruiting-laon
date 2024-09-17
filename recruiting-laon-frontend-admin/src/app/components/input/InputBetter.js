import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel } from '@mui/material';

export default function InputBetter({ label, type }) {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{width: '100%'}}
        >
      <FormControl variant="standard" sx={{width: "80%"}}>
        <InputLabel htmlFor="component-simple" sx={{color: 'var(--gray-400)'}}>{label}</InputLabel>
        <Input id="component-simple" type={type} defaultValue="" sx={{color: "var(--white)"}}/>
      </FormControl>
        </Box>
    );
}
