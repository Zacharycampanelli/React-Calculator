import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { basicTheme } from './assets/themes/basicTheme.js';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { colorTheme1 } from './assets/themes/theme1.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={colorTheme1}>
  <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
)
