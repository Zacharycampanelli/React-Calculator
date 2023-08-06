import { createTheme } from '@mui/material/styles';

export const basicTheme = createTheme({
  typography: {
    fontFamily: 'League Spartan',
    h1: {
      fontSize: {
        xs: 40,
        lg: 56,
      },
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
    },
    h3: {
        fontSize: '12px',
        fontWeight: 700,
    },
    button: {
        fontSize: {
            xs: 32,
            lg: 40,
        },   
        fontWeight: 700,
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


