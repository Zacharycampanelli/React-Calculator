import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

export const colorTheme1 = createTheme({...basicTheme, 
    palette: {
      // Main
      mainBackgroundColor: '#3A4764',
      // Toggle background, keypad background
      toggleKeypadBackground: '#232C43',
      // Screen background (answer)
      displayBackground: '#182034',
      // Logo and toggle
      logoToggleText: '#FFFFFF',
      // Slider button
      sliderBtn: '#D03F2F',
      // Slider button hover
      sliderBtnHover: '#F96B5B'

    },
    components: {
      MuiButton: {
        variants: [{
          props: { variant: 'number'},
          style: {
            backgroundColor: '#EAE3DC',
            color: '#434A59',
            boxShadow: '0px 5px 0px 0px #B4A597',
            minWidth: '100%',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            }
          }
        },
      {
        props: { variant: 'remove'},
        style: {
          backgroundColor: '#647198',
          color: '#FFFFFF',
          boxShadow: '0px 5px 0px 0px #414E73',
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
        boxShadow: '0px 5px 0px 1px #93261A',
        minWidth: '50vw',
        '&:hover': {
          backgroundColor: '#F96B5B'
      }}
    }]
      }
    }
})
