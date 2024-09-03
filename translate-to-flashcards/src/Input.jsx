import TextField from '@mui/material/TextField';

export default function Input({textValue, setTextValue}) {
    
    const handleChange = (event) => {
        setTextValue(event.target.value);
    };    

    return (
        <TextField
            id="outlined-multiline-static"
            label="Text"
            multiline
            rows={5}
            fullWidth
            value={textValue}
            onChange={handleChange}
            />
    );
}
