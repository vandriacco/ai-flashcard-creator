import React from 'react';
import TabPanel from './Tabs'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Results from './Results';
import { spacing } from '@mui/system';

export default function Translate() {
    return (
        <>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="center"
            minHeight="100vh"
            maxWidth="100vw"
            padding={2}
            boxSizing="border-box"
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding={2}
                boxSizing="border-box"
            >
                <TabPanel/>
                <Button variant="contained">Translate</Button>
            </Box>
            <Box
                padding={5}
                sx={{pr: 19, borderTop: 1, borderColor: 'grey.500'}}
            >
                <Results />
            </Box>
        </Box>
        </>
    );
}