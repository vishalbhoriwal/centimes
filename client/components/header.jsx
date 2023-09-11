import React from 'react';
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  Toolbar,
  FormControl,
  NativeSelect,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LangDropDown() {
  const [lang, setLang] = React.useState('');
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100, background: 'white', paddingLeft: '4px' }}>
      <FormControl variant="standard" fullWidth>
        <NativeSelect
          labelId="lang"
          id="lang"
          value={lang}
          label="Age"
          onChange={handleChange}
          defaultValue={"en"}
        >
          <option value={'en'}>English</option>
          <option value={'fr'}>French</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

function AppBar() {
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="xl" sx={{ background: '#006165' }}>
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          disableGutters
        >
          <Link to="/">
            <img
              width={'100px'}
              src="https://assets-global.website-files.com/6463a648616f8cc20543156a/6474babf2abaf5235c359f76_centime-logo-white.svg"
            />
          </Link>
          <LangDropDown />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
