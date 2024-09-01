import React from 'react';
import TabPanel from './Tabs'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Results from './Results';
import { spacing } from '@mui/system';
import SourceLangSelect from './SourceLangSelect';
import TargetLangSelect from './TargetLangSelect';

export default function Translate() {
    const [sourceLang, setSourceLang] = React.useState('');
    const [targetLang, setTargetLang] = React.useState('');

    const [translatedText, setTranslatedText] = React.useState('');

    function getTranslation() {
        const text = doAPICall()
        setTranslatedText(text);
    }

    function doAPICall() {
        
    }    
    
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
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    padding={2}
                    boxSizing="border-box"
                    sx={{ height: '50%' }}
                >
                    <Button 
                        variant="contained" 
                        sx={{ mb: 2 }}
                        onClick={getTranslation}
                    >
                        Translate
                    </Button>
                    <SourceLangSelect text="Source Language" selectedLang={sourceLang} setSelectedLang={setSourceLang}/>
                    <TargetLangSelect sx={{ mt: 2 }}text="Target Language" selectedLang={targetLang} setSelectedLang={setTargetLang}/>
                </Box>
            </Box>
            <Box
                padding={5}
                sx={{pr: 19, borderTop: 1, borderColor: 'grey.500'}}
            >
                {translatedText && <Results translatedText={translatedText} />}
            </Box>
        </Box>
        </>
    );
}