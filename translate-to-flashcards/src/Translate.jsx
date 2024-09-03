import React, { useState } from 'react';
import BasicTabs from './Tabs'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Results from './Results';
import { spacing } from '@mui/system';
import SourceLangSelect from './SourceLangSelect';
import TargetLangSelect from './TargetLangSelect';
import * as deepl from 'deepl-node';

export default function Translate() {
    const [sourceLang, setSourceLang] = React.useState('');
    const [targetLang, setTargetLang] = React.useState('');
    const [translatedText, setTranslatedText] = React.useState('');
    const [textValue, setTextValue] = useState('')

    const getTranslation = () => {
        //const result = await textAPICall(sourceLang, targetLang, textValue)
        console.log(textValue);
        console.log(sourceLang);
        console.log(targetLang)

        //setTranslatedText(result);
    }

    // const textAPICall = async (sourceLang, targetLang, textValue) => {
    //     const authKey = "b3bd7aba-04db-4a04-8422-55091c2d2053:fx"; // Replace with your key
    //     const result = await translator.translateText(textValue, sourceLang, targetLang);

    //     return result.text;
    // }


    
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
                <BasicTabs textValue={textValue} setTextValue={setTextValue}/>
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