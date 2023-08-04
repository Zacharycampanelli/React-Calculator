import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { basicTheme } from './assets/themes/theme.js';
import { ThemeProvider, CssBaseline } from '@mui/material';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={basicTheme}>
  <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
)
