import React, { useState, useEffect } from 'react';
import BasicTabs from './Tabs'
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
    const [textValue, setTextValue] = useState('')
    const [data, setData] = useState([{}])

    useEffect(() => {
        // getTranslation();
    }, [])

    const getTranslation = async() => {
        await fetch(`https://ai-flashcard-creator.onrender.com/translate-text?sourceLang=${sourceLang}&targetLang=${targetLang}&text=${textValue}`).then(
            results => results.json()
        ).then(
            data => {
                setData(data)
                setTranslatedText(data["text"]);
            }
        );
    }

    const downloadDeck = async () => {
        try {
          // Construct the URL with query parameters
          const url = `https://ai-flashcard-creator.onrender.com/create-flashcards?sourceLang=${sourceLang}&targetLang=${targetLang}&text=${textValue}`;
      
          // Fetch the file from the server
          const response = await fetch(url);
      
          // Check for successful response
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Create a blob from the response
          const blob = await response.blob();
      
          // Create a link element
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'GeneratedDeck.apkg';  // Set the desired filename here
      
          // Append the link to the body, click it to trigger download, and remove it
          document.body.appendChild(link);
          link.click();
          link.remove();
      
          // Clean up the URL object
          URL.revokeObjectURL(link.href);
      
        } catch (error) {
          // Log any errors that occur
          console.error('Error downloading the file:', error);
        }
      };      
    
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
                sx={{
                    pr: 19,
                    borderTop: 1,
                    borderColor: 'grey.500',
                    display: 'flex',
                    flexDirection: 'column', // Arrange children vertically
                    alignItems: 'flex-start', // Align items to the start
                }}
            >
                {translatedText && <Results translatedText={translatedText} sx={{ mb: 2 }}/>}
                {translatedText && (
                    <Box
                        sx={{
                            width: '100%', // Make the Box take up full width
                            display: 'flex',
                            justifyContent: 'flex-end', // Align items to the right
                        }}
                    >
                        <Button 
                            variant="contained" 
                            sx={{ p: 1 }}
                            onClick={downloadDeck}
                        >
                            Download Deck
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
        </>
    );
}