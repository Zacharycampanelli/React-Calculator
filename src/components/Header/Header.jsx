import { Box, Container, Typography } from "@mui/material"
import RadioGroupButton from "./RadioGroupButton"

const Header = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center', pt: '1.5rem', width: '90vw'}}>
      <Typography variant="h2" component="h2" sx={{color: 'white'}}>calc</Typography>

      <Box >
      <Typography variant="h3" component="span">Theme</Typography>
      <RadioGroupButton />
      </Box>
    </Box>
  )
}

export default Header