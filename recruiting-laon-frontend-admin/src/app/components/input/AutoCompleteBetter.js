import { Autocomplete, TextField } from "@mui/material";


export default function AutoCompleteBetter({ options, label}) {
    return (
        <Autocomplete
            required
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={options}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={label} />
            )}
            sx={{ width: '100%' }}
        />
    )
}