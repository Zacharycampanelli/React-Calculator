import { createTheme } from '@mui/material/styles';

const basicTheme = createTheme({
  typography: {
    fontFamily: 'League Spartan',
    h1: {
      xs: 40,
      lg: 56,
    },
    h2: 32,
    h3: 12,
    button: {
      xs: 32,
      lg: 40,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 750,
      lg: 1100,
      xl: 1440,
    },
  },
});

const colorTheme1 = createTheme({basicTheme, 
    palette: {
        
    }
})

const colorTheme2 = createTheme({basicTheme, 
    palette: {

    }
})

const colorTheme3 = createTheme({basicTheme, 
    palette: {

    }
})