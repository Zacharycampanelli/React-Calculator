import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

export const colorTheme1 = createTheme({...basicTheme, 
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
