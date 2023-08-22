import React from 'react';
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';

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
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
