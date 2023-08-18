import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const Display = ({final, currentNumbers, currentOperator, prevNumbers}) => {
const [numDisplay, setNumDisplay] = useState('0');  
let choice;

// Decides which number to display on the calculator
useEffect(() =>{
 choice = currentNumbers ? currentNumbers : final
 if(isNaN(choice) || choice === '') choice = prevNumbers
 if(isNaN(choice) || choice === '') choice = '0';
 setNumDisplay(choice);

 }, [currentNumbers, final, prevNumbers])

    
return (
    <Box sx={{backgroundColor: 'displayBackground', borderRadius: '10px', height: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'end', color: 'white', mt: "2rem", p: '2rem'}}>
        <Typography variant="h1" component="h1" sx={{color: 'logoToggleText', alignSelf: "baseline"}}>{parseFloat(numDisplay).toLocaleString('en')}{' '}{currentOperator}</Typography>
    </Box>
  )
}

export default Display
