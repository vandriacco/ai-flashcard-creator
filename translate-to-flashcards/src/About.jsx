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
                width: '75%', 
                marginTop: 10, // Add margin on top
                marginBottom: 4 // Add margin on bottom
            }}
            >
            <Typography variant="h4" gutterBottom>
                What is this?
            </Typography>
            <Typography variant="body1" sx={{ mb: 5 }}>
                This allows you to enter in a piece of text in a language of your choosing. When you hit "translate" it will give
                you the meaning in the language of your choice. Then, you have the option to download an anki flashcard deck
                made up of words in the text you provided. Once downloaded, just open the file and it will import the new Deck
                into your Anki. Just give the deck a meaningful name and you are ready to learn new vocabulary!
            </Typography>
            <Typography variant="h4" gutterBottom>
                Why this project?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                As a Computer Engineering major with an Italian Minor, I have two interests which normally do not have much crossover.
                However, this project provided me with the opportunity to combine these interests while creating a tool which will actually
                be useful to me! After one internship working exclusively on front-end and another on back-end, I was excited to take what
                I had learned and incorporate it into my first full-stack project.
            </Typography>
            <Typography variant="h4" gutterBottom>
                How was this made?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                The front-end of this project is made using React.js and the Material UI component library, hosted on vercel. The ui is not the best, as I am
                more passionate about creating a working back-end than a well polished user experience. For the back-end, I made a python
                flask api and hosted it on Render. Within the API I used the DeepL library and api to handle the translation using their
                advanced neural network. Once I had the translated text, I used the genanki library to turn those words into a .apkg file
                which automatically downloads upon being generated. Since this is a small scale project, I decided to use a monorepo for simplicity.
            </Typography>
            <Typography variant="h4" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Although this is my most interesting project so far, feel free to check out{' '}
                <Typography
                component="a"
                href="https://vandriacco.github.io/"
                variant="body1"
                sx={{ textDecoration: 'none', color: 'primary.main' }}
                >
                my website
            </Typography>
                {' '}or{' '}
                <Typography
                component="a"
                href="https://github.com/vandriacco"
                variant="body1"
                sx={{ textDecoration: 'none', color: 'primary.main' }}
                >
                my github
            </Typography>
                {' '}for info on my experience and other projects,
                as well as ways to contact me.
            </Typography>
            
        </Box>
    );
}