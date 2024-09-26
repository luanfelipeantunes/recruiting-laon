import { Autocomplete, TextField } from "@mui/material";


export default function AutoCompleteBetter({ options, label, handleChange }) {
    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={options}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => handleChange(value)}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={label} />
            )}
            sx={{ width: '100%' }}
        />
    )
}