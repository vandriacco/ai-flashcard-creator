import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Results() {
    return (
        <TextField
                id="outlined-multiline-static"
                label="Results"
                multiline
                rows={5}
                fullWidth
                />
    );
}