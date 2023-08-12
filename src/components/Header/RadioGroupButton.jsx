import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

export default function RadioGroupButton() {
  const [selected, setSelected] = useState('1');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <FormControl sx={{width: "5rem"}}>
      <RadioGroup name="" row value={selected} onChange={selectionChangeHandler} sx={{ ml:"12px", mb: '5px', pb: '10px', position: 'relative', backgroundColor: 'veryDarkDesaturatedBlue2', borderRadius: '50px', height: '1.5rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
        <FormControlLabel value="1" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}} />} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="1" labelPlacement='top' sx={{ '&.MuiFormControlLabel-label': {fontSize: '12px'}, '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px', color: 'white', fontSize: '12px'}}} />
        <FormControlLabel value="2" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="2" labelPlacement='top' sx={{ fontSize: '12px' , '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px',color: 'white', }}} />
        <FormControlLabel value="3" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: 'veryDarkDesaturatedBlue2', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: 'white'}}}/>} label="3" labelPlacement='top' sx={{ fontSize: '12px' , '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px', color: 'white', }}} />
      </RadioGroup>
    </FormControl>
  );
}
