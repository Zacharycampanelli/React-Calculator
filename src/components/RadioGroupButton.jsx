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
      <RadioGroup name="" row value={selected} onChange={selectionChangeHandler} sx={{ ml:"12px", mb: '5px', pb: '10px', position: 'relative',backgroundColor: '#abc123', borderRadius: '50px', height: '1.5rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
        <FormControlLabel value="1" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}} />} sx={{color: '#abc123', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: '#43ab43'}}}/>} label="1" labelPlacement='top' sx={{'&.MuiFormControlLabel-labelPlacementTop': {/*position: 'absolute', left: '0', top: '-1.5rem'*/}, '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px' }}} />
        <FormControlLabel value="2" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: '#abc123', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: '#43ab43'}}}/>} label="2" labelPlacement='top' sx={{'&.MuiFormControlLabel-labelPlacementTop': {/*position: 'absolute', left: '0', right: '0', top: '-1.5rem'*/}, '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px' }}} />
        <FormControlLabel value="3" control={<Radio icon={<CircleIcon sx={{ fontSize:'16px'}} />} checkedIcon={<CircleIcon sx={{ fontSize:'16px'}}/>} sx={{color: '#abc123', ml: '1px', mr:  '1px', mt: '1px', '&.MuiRadio-root': { p: 0, mb: '1rem'},'&.Mui-checked': { color: '#43ab43'}}}/>} label="3" labelPlacement='top' sx={{'&.MuiFormControlLabel-labelPlacementTop': {/*position: 'absolute', right: '0', top: '-1.5rem'*/}, '&.MuiFormControlLabel-root': {ml: '0px', mr: '0px' }}} />
      </RadioGroup>
    </FormControl>
  );
}
