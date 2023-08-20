import { createTheme } from '@mui/material';
import { basicTheme } from './basicTheme';

export const colorTheme2 = createTheme({
  ...basicTheme,
  palette: {
    // Main
    mainBackgroundColor: '#E6E6E6',
    // Toggle background, keypad background
    toggleKeypadBackground: '#D1CCCC',
    // Screen background (answer)
    displayBackground: '#EDEDED',
    // Logo and toggle
    logoToggleText: '#37372C',
    // Slider button
    sliderBtn: '#D03F2F',
    // Slider button hover
      sliderBtnHover: '#F98A38'
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'number' },
          style: {
            backgroundColor: '#EAE3DC',
            color: '#434A59',
            boxShadow: '0px 5px 0px 0px #A79E91',
            minWidth: '100%',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            },
          },
        },
        {
          props: { variant: 'remove' },
          style: {
            backgroundColor: '#378187',
            color: '#FFFFFF',
            boxShadow: '0px 5px 0px 0px #1B6066',
            minWidth: '90%',
            '&:hover': {
              backgroundColor: '#62B5BC',
            },
          },
        },
        {
          props: { variant: 'equal' },
          style: {
            backgroundColor: '#D03F2F',
            color: '#FFFFFF',
            boxShadow: '0px 5px 0px 1px #873901',
            minWidth: '50vw',
            '&:hover': {
              backgroundColor: '#F98A38',
            },
          },
        },
      ],
    },
  },
});
