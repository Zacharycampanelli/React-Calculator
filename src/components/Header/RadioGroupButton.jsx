import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

export default function RadioGroupButton({theme, setTheme}) {
const [selectedTheme, setSelectedTheme] = useState('1')

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
      default: 
        setTheme('colorTheme1');
        break;
  }}, [selectedTheme])
      
const selectTheme = e => {
  let choice = e.target.value;
  switch (choice) {
    case '1': 
      setSelectedTheme('1')
      break;
    case '2': 
      setSelectedTheme('2')
      break;
    case '3': 
      setSelectedTheme('3')
      break;
    case 'default': 
      setSelectedTheme('1')
      break;
  }
}

  const selectionChangeHandler = (event) => {
    setTheme(event.target.value);
  };

  return (
    <FormControl sx={{width: "5rem"}}>
      <RadioGroup name="" row value={selectedTheme} onChange={selectionChangeHandler} sx={{ ml:"12px", mb: '5px', pb: '10px', position: 'relative', backgroundColor: 'veryDarkDesaturatedBlue2', borderRadius: '50px', height: '1.5rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
        <FormControlLabel value="1" onClick={selectTheme} control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}} />} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="1" labelPlacement='top' sx={{ '&.MuiFormControlLabel-label': {fontSize: '12px'}, '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px', color: 'white', fontSize: '12px'}}} />
        <FormControlLabel value="2" onClick={selectTheme} control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="2" labelPlacement='top' sx={{ fontSize: '12px' , '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px',color: 'white', }}} />
        <FormControlLabel value="3" onClick={selectTheme} control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="3" labelPlacement='top' sx={{ fontSize: '12px' , '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px', color: 'white', }}} />
      </RadioGroup>
    </FormControl>
  );
}
