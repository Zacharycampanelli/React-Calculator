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
      // Backgrounds
      // Main
      veryDarkDesaturatedBlue: '#3A4764',
      // Toggle background, keypad background
      veryDarkDesaturatedBlue2: '#232C43',
      // Screen background (answer)
      veryDarkDesaturatedBlue3: '#182034',
      
      // Keys
      // Reset + delete background
      desaturatedDarkBlue: '#637097',
      // Reset + delete shadow
      desaturatedDarkBlue2: '#404E72',
      // Reset + delete toggle 
      desaturatedLightBlue: '#A2B2E1',
      // Reset + delete toggle shadow
      desaturatedLightBlue2: '#414E73',
      // = Background 
      red: '#D03F2F',
      // = shadow, toggle shadow
      darkRed: '#93261A',
      // = toggle
      desaturatedRed: '#F96B5B',
      // Key background 
      lightGrayishOrange: '#EAE3DC',
      // Key shadow background
      grayishOrange: '#B4A597',

      // Text
      veryDarkGrayishBlue: '#444B5A',
      // Key toggle, text
      white: '#FFFFFF'

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