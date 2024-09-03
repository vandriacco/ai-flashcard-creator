import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SourceLangSelect( { text, selectedLang, setSelectedLang } ) {

  const handleChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 200, width: '100%', mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLang}
          label={text}
          onChange={handleChange}
        >
          <MenuItem value={"AR"}>Arabic</MenuItem>
          <MenuItem value={"BG"}>Bulgarian</MenuItem>
          <MenuItem value={"CS"}>Czech</MenuItem>
          <MenuItem value={"DA"}>Danish</MenuItem>
          <MenuItem value={"DE"}>German</MenuItem>
          <MenuItem value={"EL"}>Greek</MenuItem>
          <MenuItem value={"EN"}>English</MenuItem>
          <MenuItem value={"ES"}>Spanish</MenuItem>
          <MenuItem value={"ET"}>Estonian</MenuItem>
          <MenuItem value={"FI"}>Finnish</MenuItem>
          <MenuItem value={"FR"}>French</MenuItem>
          <MenuItem value={"HU"}>Hungarian</MenuItem>
          <MenuItem value={"ID"}>Indonesian</MenuItem>
          <MenuItem value={"IT"}>Italian</MenuItem>
          <MenuItem value={"JA"}>Japanese</MenuItem>
          <MenuItem value={"KO"}>Korean</MenuItem>
          <MenuItem value={"LT"}>Lithuanian</MenuItem>
          <MenuItem value={"LV"}>Latvian</MenuItem>
          <MenuItem value={"NB"}>Norwegian</MenuItem>
          <MenuItem value={"NL"}>Dutch</MenuItem>
          <MenuItem value={"PL"}>Polish</MenuItem>
          <MenuItem value={"PT"}>Portuguese</MenuItem>
          <MenuItem value={"RO"}>Romanian</MenuItem>
          <MenuItem value={"RU"}>Russian</MenuItem>
          <MenuItem value={"SK"}>Slovak</MenuItem>
          <MenuItem value={"SL"}>Slovenian</MenuItem>
          <MenuItem value={"SV"}>Swedish</MenuItem>
          <MenuItem value={"TR"}>Turkish</MenuItem>
          <MenuItem value={"UK"}>Ukrainian</MenuItem>
          <MenuItem value={"ZH"}>Chinese</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}