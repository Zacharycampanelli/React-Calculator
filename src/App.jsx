import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import CalculatorBody from './components/Calculator/CalculatorBody';
import { colorTheme1 } from './assets/themes/theme1';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
  const [theme, setTheme] = useState(colorTheme1);
  const [final, setFinal] = useState('');
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          pb: '2rem',
          backgroundColor: 'mainBackgroundColor',
          display: { md: 'flex' },
          justifyContent: { md: 'center' },
          alignItems: { md: 'center' },
        }}
      >
        <Box sx={{ width: { md: '40vw' } }}>
          <Header theme={theme} setTheme={setTheme} />
          <Display
            final={final}
            currentNumbers={currentNumbers}
            currentOperator={currentOperator}
            prevNumbers={prevNumbers}
          />
          <CalculatorBody
            final={final}
            setFinal={setFinal}
            currentNumbers={currentNumbers}
            setCurrentNumbers={setCurrentNumbers}
            currentOperator={currentOperator}
            setCurrentOperator={setCurrentOperator}
            prevNumbers={prevNumbers}
            setPrevNumbers={setPrevNumbers}
          />
        </Box>
      </Container>{' '}
    </ThemeProvider>
  );
}

export default App;
