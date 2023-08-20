import { Box, Typography } from '@mui/material';
import RadioGroupButton from './RadioGroupButton';

const Header = ({ theme, setTheme }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: '2.5rem',
        width: { xs: '90vw', md: '100%' },
      }}
    >
      <Typography variant="h2" component="h2" sx={{ color: 'logoToggleText' }}>
        calc
      </Typography>

      <Box>
        <Typography variant="h3" component="span" sx={{ color: 'logoToggleText' }}>
          THEME
        </Typography>
        <RadioGroupButton theme={theme} setTheme={setTheme} />
      </Box>
    </Box>
  );
};

export default Header;
