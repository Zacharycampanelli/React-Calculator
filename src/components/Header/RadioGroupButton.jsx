import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../../useLocalStorage';

import CircleIcon from '@mui/icons-material/Circle';

export default function RadioGroupButton({ theme, setTheme }) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage("prefers-color-scheme", 'colorTheme1');
  // const [selectedTheme, setSelectedTheme] = useState("1");
  // Sets the theme state value equal to the name of the theme file imports used to change the theme.
  console.log(selectedTheme)
  useEffect(() => {
    switch (selectedTheme) {
      case '1':
        setTheme('colorTheme1');
        break;
      case '2':
        setTheme('colorTheme2');
        break;
      case '3':
        setTheme('colorTheme3');
        break;
      // default:
      //   setTheme('colorTheme1');
      //   break;
    }
  }, [selectedTheme]);

  // When the user chooses a theme, localStorage makes it so upon returning it will use that theme.
  useEffect(() => {
    // if(theme === undefined || theme === null) setTheme(1)
    localStorage.setItem('prefers-color-scheme', JSON.stringify(theme));
  }, [selectedTheme])

  // Compares the value of the slider toggle to the user's selection.
  const selectTheme = (e) => {
    let choice = e.target.value;
    switch (choice) {
      case '1':
        setSelectedTheme('1');
        break;
      case '2':
        setSelectedTheme('2');
        break;
      case '3':
        setSelectedTheme('3');
        break;
      // case 'default':
      //   setSelectedTheme('1');
      //   break;
    }
  };



  return (
    <FormControl sx={{ width: '5rem' }}>
      <RadioGroup
        name=""
        row
        defaultValue="1"
        value={selectedTheme}
        sx={{
          ml: '12px',
          mb: '5px',
          pb: '10px',
          position: 'relative',
          backgroundColor: 'toggleKeypadBackground',
          borderRadius: '50px',
          height: '1.5rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <FormControlLabel
          value="1"
          
          onClick={selectTheme}
          control={
            <Radio
              icon={<CircleIcon sx={{ fontSize: '16px' }} />}
              checkedIcon={<CircleIcon sx={{ fontSize: '16px' }} />}
              sx={{
                color: 'toggleKeypadBackground',
                ml: '1px',
                mr: '1px',
                mt: '1px',
                '&.MuiRadio-root': { p: 0, mb: '1rem' },
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover'} },
                // '&.Mui-checked'
              }}
            />
          }
          label="1"
          labelPlacement="top"
          sx={{
            '&.MuiFormControlLabel-label': { fontSize: '12px' },
            '&.MuiFormControlLabel-root': { ml: '0px', mr: '0px', color: 'logoToggleText', fontSize: '12px' },
          }}
        />
        <FormControlLabel
          value="2"
          onClick={selectTheme}
          control={
            <Radio
              icon={<CircleIcon sx={{ fontSize: '16px' }} />}
              checkedIcon={<CircleIcon sx={{ fontSize: '16px' }} />}
              sx={{
                color: 'toggleKeypadBackground',
                ml: '1px',
                mr: '1px',
                mt: '1px',
                '&.MuiRadio-root': { p: 0, mb: '1rem' },
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover'} },
              }}
            />
          }
          label="2"
          labelPlacement="top"
          sx={{ fontSize: '12px', '&.MuiFormControlLabel-root': { ml: '0px', mr: '0px', color: 'logoToggleText' } }}
        />
        <FormControlLabel
          value="3"
          onClick={selectTheme}
          control={
            <Radio
              icon={<CircleIcon sx={{ fontSize: '16px' }} />}
              checkedIcon={<CircleIcon sx={{ fontSize: '16px' }} />}
              sx={{
                color: 'toggleKeypadBackground',
                ml: '1px',
                mr: '1px',
                mt: '1px',
                '&.MuiRadio-root': { p: 0, mb: '1rem' },
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover'} },
              }}
            />
          }
          label="3"
          labelPlacement="top"
          sx={{ fontSize: '12px', '&.MuiFormControlLabel-root': { ml: '0px', mr: '0px', color: 'logoToggleText' } }}
        />
      </RadioGroup>
    </FormControl>
  );
}
