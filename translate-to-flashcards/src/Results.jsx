import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Results( {translatedText} ) {

    return (
        <>
            <Typography variant="h6" gutterBottom color='grey.700'>Results</Typography>
            <Box
                boxSizing="border-box"
                sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1 }}
            > 
                <Typography variant="body1" gutterBottom sx={{ p: 2}}>{translatedText}</Typography>
            </Box>
        </>
    );
}