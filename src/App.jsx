import { useEffect, useMemo, useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import CalculatorBody from './components/Calculator/CalculatorBody';
import {colorTheme1} from './assets/themes/theme1'
import {colorTheme2} from './assets/themes/theme2'
import {colorTheme3} from './assets/themes/theme3'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useLocalStorage } from './useLocalStorage';


function App() {
  // const [theme, setTheme] = useLocalStorage("prefers-color-scheme", colorTheme1);
  const [theme, setTheme] = useState("colorTheme1");
  const [final, setFinal] = useState('');
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');
  




  return (
    <ThemeProvider theme={eval(theme)}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth={false} 
        sx={{  height: '100vh', pb: '2rem', backgroundColor: 'mainBackgroundColor', display: {md: 'flex'}, justifyContent: {md: 'center'}, alignItems: {md: 'center'} }}
      >
        <Box sx={{width: { md: '40vw'},}}>

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