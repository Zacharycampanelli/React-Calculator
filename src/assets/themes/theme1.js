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
      // = Background + button
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
      veryDarkGrayishBlue: '#434A59',
      // Key toggle, text
      white: '#FFFFFF'

    },
    components: {
      MuiButton: {
        variants: [{
          props: { variant: 'number'},
          style: {
            // maxHeight: '100%',
            backgroundColor: '#EAE3DC',
            color: '#434A59',
            boxShadow: '0px 5px 0px 0px rgba(180,165,151,1)',
            minWidth: '100%',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            }
          }
        },
      {
        props: { variant: 'remove'},
        style: {
          // fontSize: {
          //   xs: '20px',
          //   lg: '28px'
          // },
          // padding: 'px',
          backgroundColor: '#647198',
          color: '#FFFFFF',
          boxShadow: '0px 5px 0px 0px rgba(65,78,115,1)',
          minWidth: '90%',
          '&:hover': {
            backgroundColor: '#A2B2E1'
          }
        }
      },
    {
      props: { variant: 'equal'},
      style: {
        backgroundColor: '#D03F2F',
        color: '#FFFFFF',
        boxShadow: '0px 5px 0px 1px rgba(147,38,26,1)',
        minWidth: '50vw',
        '&:hover': {
          backgroundColor: '#F96B5B'
      }}
    }]
      }
    }
})
