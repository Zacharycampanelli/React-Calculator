import { Box, Typography } from "@mui/material"

const Display = ({inputDisplay}) => {
console.log(inputDisplay)

    return (
    <Box sx={{backgroundColor: 'veryDarkDesaturatedBlue3', borderRadius: '10px', height: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'end', color: 'white', mt: "2rem", p: '2rem'}}>
        <Typography variant="h1" component="h1" sx={{color: 'white', alignSelf: "baseline"}}>{inputDisplay.toLocaleString('en')}</Typography>
    </Box>
  )
}

export default Display
