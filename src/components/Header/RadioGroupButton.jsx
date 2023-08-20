import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { colorTheme1 } from '../../assets/themes/theme1';
import { colorTheme2 } from '../../assets/themes/theme2';
import { colorTheme3 } from '../../assets/themes/theme3';
import CircleIcon from '@mui/icons-material/Circle';

export default function RadioGroupButton({ setTheme }) {
  // Controls the dot in the theme selector
  const [selectedTheme, setSelectedTheme] = useState('1');

  // Compares the value of the slider toggle to the user's selection.
  const selectTheme = (e) => {
    let choice = e.target.value;
    switch (choice) {
      case '1':
        setSelectedTheme('1');
        setTheme(colorTheme1);
        break;
      case '2':
        setSelectedTheme('2');
        setTheme(colorTheme2);
        break;
      case '3':
        setSelectedTheme('3');
        setTheme(colorTheme3);
        break;
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
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover' } },
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
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover' } },
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
                '&.Mui-checked': { color: 'sliderBtn', '&:hover': { color: 'sliderBtnHover' } },
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
