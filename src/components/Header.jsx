import { Box, Typography } from "@mui/material"
import RadioGroupButton from "./RadioGroupButton"

const Header = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center', mt: '1.5rem'}}>
      <Typography variant="h2" component="h2">calc</Typography>
      <RadioGroupButton />
    </Box>
  )
}

export default Header
