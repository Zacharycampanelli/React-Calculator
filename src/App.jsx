import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme="">
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          margin: 0,
          padding: 0,
          backgroundColor: 'primary.main',
          backgroundSize: 'contain',
          height: '100vh',
          width: '100vw',
        }}
      ></Box>
    </ThemeProvider>
  );
}

export default App;
