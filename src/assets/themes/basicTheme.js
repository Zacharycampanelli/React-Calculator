import { createTheme } from '@mui/material/styles';

export const basicTheme = createTheme({
  typography: {
    fontFamily: 'League Spartan',
    h1: {
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
    
        fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 750,
      lg: 1028,
      xl: 1440,
    },
  },
  
});


basicTheme.typography.h1 = {
   fontSize: '40px',
    
  "@media (min-width:1028px)": {
    fontSize: "56px"
  },

}

basicTheme.typography.button = {
  fontSize: '32px',
   
 "@media (min-width:1028px)": {
   fontSize: "40px"
 },

}