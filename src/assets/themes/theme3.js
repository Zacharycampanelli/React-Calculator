import { createTheme } from "@mui/material";
import { basicTheme } from "./basicTheme";

export const colorTheme3 = createTheme({...basicTheme, 
    palette: {
      // Main
      mainBackgroundColor: '#17062A',
      // Toggle background, keypad background
      toggleKeypadBackground: '#1E0936',
      // Screen background (answer)
      displayBackground: '#1E0936',
      // Logo and toggle
    logoToggleText: '#FDE53C',
    // Slider button
    sliderBtn: '#3CDED0',
    // Slider button hover
    sliderBtnHover: '#93FDF8'

    },
    components: {
      MuiButton: {
        variants: [{
          props: { variant: 'number'},
          style: {
            backgroundColor: '#331C4E',
            color: '#FDE53C',
            boxShadow: '0px 5px 0px 0px #881C9E',
            minWidth: '100%',
            '&:hover': {
              backgroundColor: '#6C34AC',
            }
          }
        },
      {
        props: { variant: 'remove'},
        style: {
          backgroundColor: '#560F7C',
          color: '#FFFFFF',
          boxShadow: '0px 5px 0px 0px #BE2AF4',
          minWidth: '90%',
          '&:hover': {
            backgroundColor: '#8631AF'
          }
        }
      },
    {
      props: { variant: 'equal'},
      style: {
        backgroundColor: '#3CDED0',
        color: '#1A2327',
        boxShadow: '0px 5px 0px 1px #6CF9F1',
        minWidth: '50vw',
        '&:hover': {
          backgroundColor: '#93FDF8'
      }}
    }]
      }
    }
})
