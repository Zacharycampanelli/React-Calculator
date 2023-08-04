import { createTheme } from '@mui/material/styles';

export const basicTheme = createTheme({
  typography: {
    fontFamily: 'League Spartan',
    h1: {
      fontSize: {
        xs: 40,
        lg: 56,
        }
    },
    h2: {
        fontSize: '32px',
    },
    h3: {
        fontSize: '12px',
    },
    button: {
        fontSize: {
            xs: 32,
            lg: 40,
        }
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