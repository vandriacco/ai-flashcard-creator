import TextField from '@mui/material/TextField';

export default function Input() {
    return (
        <TextField
            id="outlined-multiline-static"
            label="Text"
            multiline
            rows={5}
            fullWidth
            />
    );
}
