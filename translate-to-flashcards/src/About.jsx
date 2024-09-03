import * as React from 'react';
import Box from '@mui/material/Box';
import Translate from './Translate';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function About() {
    return (
        <Box 
            padding={2}
            sx={{ 
                width: '100%', 
                maxWidth: 500, 
                margin: '0 auto', // Center the content with automatic margins on left and right
                marginTop: 4, // Add margin on top
                marginBottom: 4 // Add margin on bottom
            }}
            >
            <Typography variant="h1" gutterBottom>
                What is this?
            </Typography>
            <Typography variant="body1" gutterBottom>
                Turn translated words into an Anki Deck!
            </Typography>
        </Box>
    );
}