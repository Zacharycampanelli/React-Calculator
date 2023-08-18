import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import CalculatorBody from './components/Calculator/CalculatorBody';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { colorTheme1 } from './assets/themes/theme1.js';

function App() {
  const [theme, setTheme] = useState('colorTheme1');
  const [final, setFinal] = useState('');
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');




  return (
    <ThemeProvider theme={eval(theme)}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth={false}
        sx={{ height: 'max-content', pb: '2rem', backgroundColor: 'veryDarkDesaturatedBlue' }}
      >
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
      </Container>{' '}
    </ThemeProvider>
  );
}

export default App;
